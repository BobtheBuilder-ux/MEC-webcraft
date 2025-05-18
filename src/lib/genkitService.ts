// Import our browser-compatible mockGenkit instead of the actual genkit
import mockGenkit from './genkit-browser';

// Initialize Gemini with the provided API key
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY || 'AIzaSyCMyhqJyvevcD6FS97RvPeNgd8j0nVBaJE';

// Use mockGenkit instead of real genkit
const ai = mockGenkit.ai;

/**
 * Generates a follow-up question based on the user's initial inquiry
 * @param inquiry - The user's initial inquiry
 * @returns A follow-up question based on the user's inquiry
 */
export async function generateFollowUpQuestion(context: string): Promise<string> {
  try {
    const response = await fetch('http://localhost:3001/api/generate-question', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ context }),
    });

    if (!response.ok) {
      throw new Error('Failed to generate question');
    }

    const data = await response.json();
    return data.question;
  } catch (error) {
    console.error('Error generating follow-up question:', error);
    return 'Would you like to tell me more about your project?';
  }
} 