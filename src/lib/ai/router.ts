import { NextResponse } from 'next/server';
import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export interface AIRequestParams {
  prompt: string;
  model?: string;
  opportunityId?: string;
  naicsCode?: string;
  opportunityTitle?: string;
  bidType?: 'full' | 'technical' | 'price' | 'draft';
  includeResumes?: boolean;
  includePastPerformance?: boolean;
}

// This is the ONLY declaration of routeAIRequest that should exist
export async function routeAIRequest({
  prompt,
  model = 'grok-4-fast',
  opportunityId,
  naicsCode,
  opportunityTitle,
  bidType = 'full',
  includeResumes = true,
  includePastPerformance = true
}: AIRequestParams) {
  // Placeholder for actual AI routing logic
  // For now, it will just return a dummy response
  return { message: `AI request for '${prompt}' with model '${model}' processed.` };
}

export const aiRouter = async ({ prompt, model }: { prompt: string, model: string }) => {
  // This aiRouter is a placeholder and will be used by routeAIRequest
  // Actual implementation would involve calling OpenAI or other AI services
  return { message: `AI router processed: ${prompt} with model ${model}` };
};
