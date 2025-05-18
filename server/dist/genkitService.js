"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateFollowUpQuestion = generateFollowUpQuestion;
const generative_ai_1 = require("@google/generative-ai");
// Initialize Google AI
const genAI = new generative_ai_1.GoogleGenerativeAI(process.env.GOOGLE_API_KEY || '');
async function generateFollowUpQuestion(context) {
    try {
        const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
        const result = await model.generateContent(`Based on the following context, generate a relevant follow-up question:
      Context: ${context}
      
      Generate a natural, conversational follow-up question that would help gather more information about the user's needs.`);
        const response = await result.response;
        return response.text();
    }
    catch (error) {
        console.error('Error in generateFollowUpQuestion:', error);
        throw error;
    }
}
