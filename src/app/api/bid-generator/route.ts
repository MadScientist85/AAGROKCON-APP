import { routeAIRequest } from "@/lib/ai/router";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Ensure we're using the correct parameter format
    const result = await routeAIRequest({ 
      prompt: body.prompt,
      opportunityId: body.opportunityId,
      bidType: body.bidType || "full",
      includeResumes: body.includeResumes !== false,
      includePastPerformance: body.includePastPerformance !== false,
    });
    
    return Response.json(result);
  } catch (error) {
    console.error("Error generating bid:", error);
    return Response.json({ error: "Failed to generate bid" }, { status: 500 });
  }
}

