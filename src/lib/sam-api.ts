const SAM_API_KEY = process.env.SAM_API_KEY;
const SAM_API_URL = 'https://api.sam.gov/opportunities/v2/search';

export interface SamApiParams {
  naicsCode?: string;
  keyword?: string;
  postedFrom?: string;
  postedTo?: string;
  awardMin?: string;
  awardMax?: string;
  limit?: string;
  offset?: string;
}

export interface SamApiResponse {
  totalRecords: number;
  opportunitiesData: SamOpportunity[];
}

export interface SamOpportunity {
  id: string;
  title: string;
  solicitationNumber: string;
  fullParentPathName: string;
  fullParentPathCode: string;
  postedDate: string;
  type: string;
  baseType: string;
  archiveType: string;
  archiveDate: string;
  setAside: string;
  setAsideCode: string;
  naicsCode: string;
  naicsDesc: string;
  classCod: string;
  classDesc: string;
  active: string;
  award: {
    amount: string;
    date: string;
    awardee: string;
  };
  pointOfContact: {
    name: string;
    email: string;
    phone: string;
  }[];
  description: string;
  organizationType: string;
  officeAddress: {
    city: string;
    state: string;
    zip: string;
  };
  placeOfPerformance: {
    city: string;
    state: string;
    zip: string;
  };
  additionalInfoLink: string;
  uiLink: string;
  links: {
    rel: string;
    href: string;
  }[];
}

export async function searchOpportunities(params: SamApiParams): Promise<SamApiResponse> {
  const queryParams = new URLSearchParams();
  
  // Add all provided parameters
  Object.entries(params).forEach(([key, value]) => {
    if (value) queryParams.append(key, value);
  });
  
  // Add default parameters if not provided
  if (!params.limit) queryParams.append('limit', '10');
  if (!params.offset) queryParams.append('offset', '0');
  
  // Add API key
  queryParams.append('api_key', SAM_API_KEY || '');

  try {
    const response = await fetch(`${SAM_API_URL}?${queryParams.toString()}`, {
      headers: {
        'Accept': 'application/json',
      },
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`SAM.gov API error (${response.status}): ${errorText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching opportunities:', error);
    throw error;
  }
}

