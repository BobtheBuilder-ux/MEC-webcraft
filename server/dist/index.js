"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Load environment variables first
const dotenv_1 = __importDefault(require("dotenv"));
const validateEnv_1 = require("./validateEnv");
// Load environment variables based on NODE_ENV
dotenv_1.default.config({
    path: process.env.NODE_ENV === 'production' ? '.env.production' : '.env'
});
// Validate environment variables
(0, validateEnv_1.validateEnv)();
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const generative_ai_1 = require("@google/generative-ai");
const nodemailer_1 = __importDefault(require("nodemailer"));
const calendarService_1 = require("./calendarService");
const app = (0, express_1.default)();
const port = process.env.PORT || 3001;
// Allowed origins
const allowedOrigins = [
    'http://localhost:5173',
    'http://localhost:3000',
    'http://localhost:8080',
    'https://mecwebcraft.com',
    'https://www.mecwebcraft.com',
    'https://api.mecwebcraft.com'
];
// Enhanced CORS configuration
app.use((0, cors_1.default)({
    origin: (origin, callback) => {
        // Allow requests with no origin (like mobile apps or curl requests)
        if (!origin)
            return callback(null, true);
        if (allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        }
        else {
            callback(new Error('CORS: Origin not allowed'));
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
    optionsSuccessStatus: 204
}));
app.use(express_1.default.json());
// CORS error handling middleware
app.use((err, req, res, next) => {
    if (err.message.includes('CORS')) {
        console.error('CORS Error:', {
            origin: req.headers.origin,
            method: req.method,
            path: req.path,
            error: err.message
        });
        return res.status(403).json({
            error: 'CORS error',
            message: 'Origin not allowed',
            allowedOrigins
        });
    }
    next(err);
});
// General error handling middleware
app.use((err, req, res, next) => {
    console.error('Server Error:', err);
    res.status(500).json({
        error: 'Internal Server Error',
        message: err.message
    });
});
// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'ok' });
});
// Initialize Google AI
const genAI = new generative_ai_1.GoogleGenerativeAI(process.env.VITE_GEMINI_API_KEY || '');
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
// Initialize email transporter
const transporter = nodemailer_1.default.createTransport({
    host: 'smtp.hostinger.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER || 'clients@mecwebcraft.com',
        pass: process.env.EMAIL_PASSWORD
    }
});
// Verify SMTP connection
transporter.verify((error, success) => {
    if (error) {
        console.error('SMTP Connection Error:', error);
    }
    else {
        console.log('SMTP Server is ready to send emails');
    }
});
// AI endpoint for generating follow-up questions with better error handling
app.post('/api/generate-question', async (req, res) => {
    try {
        const { context } = req.body;
        if (!context) {
            return res.status(400).json({ error: 'Context is required' });
        }
        console.log('Generating questions for context:', context);
        const prompt = `Based on the following context, generate 5-10 relevant follow-up questions that would help gather more information. The questions should be natural, conversational, and progressively more specific. Return them as a JSON array of strings:

    Context: ${context}
    
    Return the questions in this format:
    ["Question 1", "Question 2", "Question 3", ...]`;
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        let questions;
        try {
            questions = JSON.parse(text);
            if (!Array.isArray(questions) || questions.length < 5) {
                throw new Error('Invalid response format or insufficient questions');
            }
        }
        catch (parseError) {
            console.error('Error parsing AI response:', parseError);
            questions = text.split('\n')
                .filter(line => line.trim().startsWith('"') || line.trim().startsWith('-'))
                .map(line => line.replace(/^["-]\s*/, '').replace(/["]$/, '').trim())
                .filter(line => line.length > 0);
            if (questions.length < 5) {
                questions = [
                    "Could you tell me more about your specific needs?",
                    "What is your timeline for this project?",
                    "Do you have any specific design preferences?",
                    "What is your budget range for this project?",
                    "Have you worked with web developers before?"
                ];
            }
        }
        res.json({ questions });
    }
    catch (error) {
        console.error('Error generating questions:', error);
        res.status(500).json({
            error: 'Failed to generate questions',
            details: error.message,
            fallbackQuestions: [
                "Could you tell me more about your specific needs?",
                "What is your timeline for this project?",
                "Do you have any specific design preferences?",
                "What is your budget range for this project?",
                "Have you worked with web developers before?"
            ]
        });
    }
});
// Calendar endpoints with enhanced error handling
app.get('/api/calendar/available-slots', async (req, res) => {
    try {
        const { date, timezone } = req.query;
        if (!date || typeof date !== 'string') {
            return res.status(400).json({ error: 'Date parameter is required' });
        }
        const slots = await (0, calendarService_1.getAvailableTimeSlots)(date, timezone);
        res.json(slots);
    }
    catch (error) {
        console.error('Error getting available slots:', error);
        res.status(500).json({
            error: 'Failed to get available time slots',
            details: error.message
        });
    }
});
app.post('/api/calendar/schedule', async (req, res) => {
    try {
        const appointment = req.body;
        const result = await (0, calendarService_1.scheduleAppointment)(appointment);
        res.json(result);
    }
    catch (error) {
        console.error('Error scheduling appointment:', error);
        res.status(500).json({
            error: 'Failed to schedule appointment',
            details: error.message
        });
    }
});
// Email confirmation endpoint with enhanced error handling
app.post('/api/send-confirmation', async (req, res) => {
    try {
        const { name, email, inquiry, followUpAnswers, appointmentDate } = req.body;
        if (!name || !email || !inquiry) {
            return res.status(400).json({ error: 'Missing required fields' });
        }
        const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #FFD700; padding: 20px; text-align: center;">
          <h1 style="color: #000000; margin: 0;">MEC Webcraft</h1>
        </div>
        <div style="padding: 20px;">
          <p>Dear ${name},</p>
          <p>Thank you for your inquiry about "${inquiry}".</p>
          ${appointmentDate ? `<p>Your appointment has been scheduled for ${new Date(appointmentDate).toLocaleString()}.</p>` : ''}
          <p>We'll get back to you shortly with more information.</p>
          <p style="margin-top: 20px; font-size: 14px; color: #666;">
            Best regards,<br>
            The MEC Webcraft Team
          </p>
        </div>
      </div>
    `;
        await transporter.sendMail({
            from: '"MEC Webcraft" <clients@mecwebcraft.com>',
            to: email,
            subject: appointmentDate ? 'Appointment Confirmation - MEC Webcraft' : 'Thank You for Your Inquiry - MEC Webcraft',
            html: emailContent
        });
        res.json({ success: true });
    }
    catch (error) {
        console.error('Error sending confirmation email:', error);
        res.status(500).json({
            error: 'Failed to send confirmation email',
            details: error.message
        });
    }
});
// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
