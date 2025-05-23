// Load environment variables first
import dotenv from 'dotenv';
import { validateEnv } from './validateEnv';

// Load environment variables based on NODE_ENV
dotenv.config({
  path: process.env.NODE_ENV === 'production' ? '.env' : '.env'
});

// Validate environment variables
validateEnv();

import express, { Request, Response } from 'express';
import cors from 'cors';
import { GoogleGenerativeAI } from '@google/generative-ai';
import nodemailer from 'nodemailer';
import { getAvailableTimeSlots, scheduleAppointment } from './calendarService';

const app = express();
const port = process.env.PORT || 3001;

// Basic CORS configuration
app.use(cors());

app.use(express.json());

// Initialize Google AI
const genAI = new GoogleGenerativeAI(process.env.VITE_GEMINI_API_KEY || '');
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

// Initialize email transporter
const transporter = nodemailer.createTransport({
  host: 'smtp.hostinger.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

// API routes
app.post('/api/generate-question', async (req: Request, res: Response) => {
  try {
    const { context } = req.body;
    const result = await model.generateContent(context);
    const response = await result.response;
    const text = response.text();
    res.json({ questions: text.split('\n') });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/calendar/available-slots', async (req: Request, res: Response) => {
  try {
    const { date, timezone } = req.query;
    const slots = await getAvailableTimeSlots(date as string, timezone as string);
    res.json(slots);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/calendar/schedule', async (req: Request, res: Response) => {
  try {
    const appointment = req.body;
    const result = await scheduleAppointment(appointment);
    res.json(result);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/send-confirmation', async (req: Request, res: Response) => {
  try {
    const { name, email, inquiry } = req.body;
    await transporter.sendMail({
      from: '"MEC Webcraft" <clients@mecwebcraft.com>',
      to: email,
      subject: 'Inquiry Confirmation - MEC Webcraft',
      html: `
        <h1>Thank you for your inquiry</h1>
        <p>Dear ${name},</p>
        <p>We've received your inquiry about "${inquiry}".</p>
        <p>We'll get back to you shortly.</p>
      `
    });
    res.json({ success: true });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});