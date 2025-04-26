"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const generative_ai_1 = require("@google/generative-ai");
const nodemailer_1 = __importDefault(require("nodemailer"));
const google_auth_library_1 = require("google-auth-library");
const axios_1 = __importDefault(require("axios"));
// Load environment variables
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3001;
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Initialize Google AI
const genAI = new generative_ai_1.GoogleGenerativeAI(process.env.VITE_GEMINI_API_KEY || 'AIzaSyCMyhqJyvevcD6FS97RvPeNgd8j0nVBaJE');
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
// Initialize email transporter with Hostinger SMTP settings
const transporter = nodemailer_1.default.createTransport({
    host: 'smtp.hostinger.com',
    port: 465,
    secure: true, // use SSL
    auth: {
        user: 'clients@mecwebcraft.com',
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
// Google Calendar Configuration
const CALENDAR_ID = 'clients@mecwebcraft.com';
const CALENDAR_API_URL = 'https://www.googleapis.com/calendar/v3';
// Create a JWT client for Google Calendar API
const getAuthToken = async () => {
    try {
        const client = new google_auth_library_1.JWT({
            email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
            key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
            scopes: ['https://www.googleapis.com/auth/calendar'],
        });
        const tokens = await client.authorize();
        return tokens.access_token;
    }
    catch (error) {
        console.error('Error getting auth token:', error);
        throw error;
    }
};
// Calendar API endpoints
app.get('/api/calendar/available-slots', async (req, res) => {
    try {
        const { date } = req.query;
        if (!date || typeof date !== 'string') {
            return res.status(400).json({ error: 'Date parameter is required' });
        }
        const token = await getAuthToken();
        const response = await axios_1.default.get(`${CALENDAR_API_URL}/calendars/${CALENDAR_ID}/events`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            params: {
                timeMin: `${date}T00:00:00Z`,
                timeMax: `${date}T23:59:59Z`,
                singleEvents: true,
                orderBy: 'startTime',
            },
        });
        // Process the slots based on business hours and existing events
        // For simplicity, just returning the raw events from Google Calendar
        res.json({ slots: response.data.items });
    }
    catch (error) {
        console.error('Error fetching calendar slots:', error);
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        res.status(500).json({ error: 'Failed to fetch available slots', details: errorMessage });
    }
});
app.post('/api/calendar/schedule', async (req, res) => {
    try {
        const { name, email, startTime, endTime } = req.body;
        if (!name || !email || !startTime || !endTime) {
            return res.status(400).json({ error: 'Missing required fields' });
        }
        const token = await getAuthToken();
        const event = {
            summary: `Appointment with ${name}`,
            description: `Client: ${name}\nEmail: ${email}`,
            start: {
                dateTime: startTime,
                timeZone: 'America/New_York',
            },
            end: {
                dateTime: endTime,
                timeZone: 'America/New_York',
            },
        };
        const response = await axios_1.default.post(`${CALENDAR_API_URL}/calendars/${CALENDAR_ID}/events`, event, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });
        res.json(response.data);
    }
    catch (error) {
        console.error('Error scheduling appointment:', error);
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        res.status(500).json({ error: 'Failed to schedule appointment', details: errorMessage });
    }
});
// AI endpoint for generating follow-up questions
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
        // Parse the response into an array of questions
        let questions;
        try {
            questions = JSON.parse(text);
            if (!Array.isArray(questions) || questions.length < 5) {
                throw new Error('Invalid response format or insufficient questions');
            }
        }
        catch (parseError) {
            console.error('Error parsing AI response:', parseError);
            // If parsing fails, try to extract questions from the text
            questions = text.split('\n')
                .filter(line => line.trim().startsWith('"') || line.trim().startsWith('-'))
                .map(line => line.replace(/^["-]\s*/, '').replace(/["]$/, '').trim())
                .filter(line => line.length > 0);
            if (questions.length < 5) {
                throw new Error('Could not extract sufficient questions from response');
            }
        }
        console.log('Generated questions:', questions);
        res.json({ questions });
    }
    catch (error) {
        console.error('Error generating questions:', error);
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        res.status(500).json({
            error: 'Failed to generate questions',
            details: errorMessage,
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
// Endpoint for sending confirmation email
app.post('/api/send-confirmation', async (req, res) => {
    try {
        const { name, email, inquiry, followUpAnswers, appointmentDate } = req.body;
        if (!name || !email || !inquiry) {
            return res.status(400).json({ error: 'Missing required fields' });
        }
        const prompt = `Generate a personalized confirmation email for a client named ${name} who has inquired about "${inquiry}". 
    ${appointmentDate ? `They have scheduled an appointment for ${appointmentDate}.` : ''}
    The email should be warm, professional, and show that we've carefully reviewed their inquiry. 
    Include a personal touch and maintain a friendly tone.`;
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const emailContent = response.text();
        const mailOptions = {
            from: '"MEC Webcraft" <clients@mecwebcraft.com>',
            to: email,
            subject: appointmentDate ? 'Appointment Confirmation - MEC Webcraft' : 'Thank You for Your Inquiry - MEC Webcraft',
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #FFD700; padding: 20px; text-align: center;">
            <h1 style="color: #000000; margin: 0;">MEC Webcraft</h1>
          </div>
          <div style="padding: 20px;">
            ${emailContent}
            <p style="margin-top: 20px; font-size: 14px; color: #666;">
              Best regards,<br>
              The MEC Webcraft Team
            </p>
          </div>
          <div style="background-color: #f5f5f5; padding: 20px; text-align: center; font-size: 12px; color: #666;">
            <p>This is an automated message. Please do not reply to this email.</p>
            <p>© ${new Date().getFullYear()} MEC Webcraft. All rights reserved.</p>
          </div>
        </div>
      `
        };
        await transporter.sendMail(mailOptions);
        res.json({ success: true });
    }
    catch (error) {
        console.error('Error sending confirmation email:', error);
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        res.status(500).json({ error: 'Failed to send confirmation email', details: errorMessage });
    }
});
// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
