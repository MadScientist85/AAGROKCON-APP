import { NextResponse } from 'next/server';

// Simplified AI router that doesn't depend on external packages
export const aiRouter = async (req: Request) => {
  try {
    // Extract the query parameter from the URL
    const url = new URL(req.url);
    const text = url.searchParams.get('text') || '';
    
    // For now, just return a simple response
    return new NextResponse(JSON.stringify({
      text: `AI processed: ${text}`,
      // This is a placeholder for actual AI processing
      summary: "This is a placeholder summary. Actual AI processing will be implemented later."
    }), {
      status: 200,
      headers: { 'content-type': 'application/json' },
    });
  } catch (error) {
    console.error('AI processing error:', error);
    return new NextResponse(JSON.stringify({ error: 'An error occurred during your request.' }), {
      status: 500,
      headers: { 'content-type': 'application/json' },
    });
  }
}

// Export the function that the route is trying to use
export const routeAIRequest = async (req: Request) => {
  return aiRouter(req);
}

// Add the missing routeAIRequest function that's being imported in route.ts
export const routeAIRequest = async ({ prompt, model = 'grok-4-fast' }) => {
  return aiRouter({ prompt, model });
};
