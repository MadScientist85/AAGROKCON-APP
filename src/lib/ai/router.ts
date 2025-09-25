import { NextResponse } from 'next/server';
import { OpenAI } from 'openai';
import { Anthropic } from '@anthropic-ai/sdk';
import openai from 'openai';

// Single implementation of the AI router
export const aiRouter = async ({
  prompt,
  model = 'grok-4-fast',
  opportunityId,
  naicsCode,
  opportunityTitle,
  bidType = 'proposal',
  includeResumes = false,
  includePastPerformance = false,
}) => {
  console.log(`Routing AI request to model: ${model}`);
  return {
    content: `This is a response to: "${prompt}" using model: ${model}`,
    model: model,
  };
};

// Single implementation of routeAIRequest
export const routeAIRequest = async ({ prompt, model = 'grok-4-fast' }) => {
  return aiRouter({
    prompt,
    model,
  });
};
