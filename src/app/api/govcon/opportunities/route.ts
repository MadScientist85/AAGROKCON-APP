import { searchOpportunities } from "@/lib/sam-api";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  
  const params = {
    naicsCode: searchParams.get("naicsCode") || undefined,
    keyword: searchParams.get("keyword") || undefined,
    postedFrom: searchParams.get("postedFrom") || undefined,
    postedTo: searchParams.get("postedTo") || undefined,
    limit: searchParams.get("limit") || undefined,
    offset: searchParams.get("offset") || undefined,
  };
  
  try {
    const data = await searchOpportunities(params);
    return Response.json(data);
  } catch (error) {
    console.error("Error fetching opportunities:", error);
    return Response.json({ error: "Failed to fetch opportunities" }, { status: 500 });
  }
}

