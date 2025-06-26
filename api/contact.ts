import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';
import { z } from 'zod';

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  organization: z.string().optional(),
  message: z.string().min(1, "Message is required").max(1000)
});

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const validatedData = contactFormSchema.parse(req.body);
    
    if (!process.env.RESEND_API_KEY) {
      return res.status(500).json({ 
        success: false, 
        message: "Email service not configured" 
      });
    }

    const { data, error } = await resend.emails.send({
      from: 'ShulPad Contact <noreply@shulpad.com>', // Using your verified domain
      to: ['info@shulpad.com'], // Your business email
      subject: `New ShulPad Inquiry from ${validatedData.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        ${validatedData.phone ? `<p><strong>Phone:</strong> ${validatedData.phone}</p>` : ''}
        ${validatedData.organization ? `<p><strong>Organization:</strong> ${validatedData.organization}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${validatedData.message}</p>
        
        <hr>
        <p><small>Reply to this customer at: ${validatedData.email}</small></p>
      `,
      replyTo: validatedData.email // So you can reply directly to the customer
    });

    if (error) {
      console.error("Resend error:", error);
      return res.status(500).json({ 
        success: false, 
        message: "Failed to send message. Please try again." 
      });
    }

    return res.json({ 
      success: true, 
      message: "Message sent successfully"
    });

  } catch (error: unknown) {
    console.error("Contact form error:", error);
    
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        success: false,
        message: "Invalid form data",
        errors: error.errors
      });
    }

    return res.status(500).json({ 
      success: false, 
      message: "Failed to send message. Please try again." 
    });
  }
}
