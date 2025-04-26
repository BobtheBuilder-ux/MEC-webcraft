import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize Google AI
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || '');

export async function generateFollowUpQuestion(context: string): Promise<string> {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    
    const result = await model.generateContent(
      `Based on the following context, generate a relevant follow-up question:
      Context: ${context}
      
      Generate a natural, conversational follow-up question that would help gather more information about the user's needs.`
    );
    
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error in generateFollowUpQuestion:', error);
    throw error;
  }
} 