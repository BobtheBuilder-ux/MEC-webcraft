import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

// Use the free version of Gemini
const MODEL_NAME = "gemini-pro";  // Free tier uses the same model name

interface GeneratedBlogContent {
  content: string;
  tags: string[];
  seoKeywords: string[];
  metaDescription: string;
}

export async function generateBlogContent(title: string): Promise<GeneratedBlogContent> {
  try {
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });

    const prompt = `Write a blog post about: "${title}".
    Create a response in JSON format with these keys:
    - content: Well-structured HTML content with h2, h3, p tags
    - tags: A list of 5 or fewer relevant tags
    - seoKeywords: A list of 10 or fewer SEO keywords
    - metaDescription: A meta description under 160 characters

    Make sure the content is engaging, informative, and optimized for SEO.
    Focus on web development, technology, and digital solutions topics.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // Extract JSON from the response
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error('Failed to parse AI response as JSON');
    }

    const parsedResponse = JSON.parse(jsonMatch[0]);

    // Ensure the response has all required fields
    const formattedResponse: GeneratedBlogContent = {
      content: parsedResponse.content || '',
      tags: Array.isArray(parsedResponse.tags) ? parsedResponse.tags : [],
      seoKeywords: Array.isArray(parsedResponse.seoKeywords) ? parsedResponse.seoKeywords : [],
      metaDescription: parsedResponse.metaDescription || ''
    };

    return formattedResponse;
  } catch (error) {
    console.error('Error generating blog content:', error);
    throw new Error('Failed to generate blog content');
  }
}