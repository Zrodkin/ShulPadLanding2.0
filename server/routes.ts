import express, { type Express, type Request, type Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { Resend } from "resend";
import { z } from "zod";

// Validation schema for contact form
const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  organization: z.string().optional(),
  message: z.string().min(1, "Message is required").max(1000)
});

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Health check endpoint
  app.get("/api/health", (req: Request, res: Response) => {
    res.json({ 
      status: "ok", 
      timestamp: new Date().toISOString(),
      services: {
        resend: !!process.env.RESEND_API_KEY
      }
    });
  });

  // Contact form submission endpoint
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Validate the request body
      const validatedData = contactFormSchema.parse(req.body);
      
      // Check if Resend API key is configured
      if (!process.env.RESEND_API_KEY || !process.env.EMAIL_TO) {
        console.error("Resend configuration missing");
        return res.status(500).json({ 
          success: false, 
          message: "Email service not configured" 
        });
      }

      // Send email using Resend
      const { data, error } = await resend.emails.send({
        from: 'ShulPad Contact <onboarding@resend.dev>',
        to: [process.env.EMAIL_TO!],
        subject: `New ShulPad Inquiry from ${validatedData.name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${validatedData.name}</p>
          <p><strong>Email:</strong> ${validatedData.email}</p>
          ${validatedData.phone ? `<p><strong>Phone:</strong> ${validatedData.phone}</p>` : ''}
          ${validatedData.organization ? `<p><strong>Organization:</strong> ${validatedData.organization}</p>` : ''}
          <p><strong>Message:</strong></p>
          <p>${validatedData.message}</p>
        `,
        replyTo: validatedData.email
      });

      if (error) {
        console.error("Resend error:", error);
        return res.status(500).json({ 
          success: false, 
          message: "Failed to send message. Please try again." 
        });
      }

      console.log(`Contact form submission sent successfully. Email ID: ${data?.id}`);

      // Return success response
      res.json({ 
        success: true, 
        message: "Message sent successfully"
      });

    } catch (error: unknown) {
      console.error("Contact form error:", error);
      
      // Handle validation errors
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          success: false,
          message: "Invalid form data",
          errors: error.errors
        });
      }

      // Handle other errors
      res.status(500).json({ 
        success: false, 
        message: "Failed to send message. Please try again." 
      });
    }
  });

  // Create and return the HTTP server
  const httpServer = createServer(app);
  return httpServer;
}