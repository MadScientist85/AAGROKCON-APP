import { NextResponse } from 'next/server';
import { routeAIRequest } from '@/lib/ai/router';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const naics = searchParams.get('naics') || '';
    const setAsides = searchParams.get('setAsides') || '';

    // Fetch opportunities from SAM.gov
    const response = await fetch(`https://api.sam.gov/opportunities/v1/search?naics=${naics}&setAsides=${setAsides}`, {
      headers: {
        'Content-Type': 'application/json',
        // Add any required API keys or auth headers
      },
    });

    const data = await response.json();

    // Create a proper Request object for the AI router
    const aiRequest = new Request(`https://api/ai/summarize?text=Summarize SAM.gov opportunities for NAICS ${naics}, set-asides ${setAsides}`);
    
    // Call the AI router but don't try to parse the response yet
    await routeAIRequest(aiRequest);
    
    // Return the data with a placeholder for the AI summary
    return NextResponse.json({
      success: true,
      data: data.opportunitiesData,
      aiSummary: "AI summary feature coming soon",
    });
  } catch (error) {
    // If any error occurs, return a failure response
    return NextResponse.json({ 
      success: false, 
      error: "Failed to fetch opportunities" 
    }, { status: 500 });
  }
}
