/**
 * Browser-compatible stub for genkit functions
 * 
 * This provides empty implementations for genkit functionality
 * to avoid errors in browser environments.
 */

// Mock implementation that doesn't actually do anything
const mockGenkit = {
  ai: {
    generate: async (prompt: string) => {
      console.log('Genkit AI generate called with:', prompt);
      return {
        text: 'This is a browser stub for genkit.ai.generate. The actual AI functionality requires server-side processing.'
      };
    },
    chat: async (messages: any[]) => {
      console.log('Genkit AI chat called with:', messages);
      return {
        text: 'This is a browser stub for genkit.ai.chat. The actual AI functionality requires server-side processing.'
      };
    }
  },
  document: {
    create: () => ({
      addText: () => {},
      addImage: () => {},
      save: async () => 'document-stub-id'
    })
  },
  google: {
    ai: {
      // Add relevant functions here
      generateContent: async () => ({
        response: {
          text: () => 'Browser stub for Google AI content generation'
        }
      })
    }
  }
};

export default mockGenkit; 