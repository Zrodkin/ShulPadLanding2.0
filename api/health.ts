import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  return res.json({ 
    status: "ok", 
    timestamp: new Date().toISOString(),
    services: {
      resend: !!process.env.RESEND_API_KEY
    }
  });
}
