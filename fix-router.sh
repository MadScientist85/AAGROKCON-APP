#!/bin/bash

# Path to the router file
ROUTER_FILE="src/lib/ai/router.ts"

# Check if the file exists
if [ ! -f "$ROUTER_FILE" ]; then
  echo "Error: File $ROUTER_FILE not found!"
  exit 1
fi

# Create a backup of the original file
cp "$ROUTER_FILE" "${ROUTER_FILE}.bak"
echo "Created backup at ${ROUTER_FILE}.bak"

# Use a temporary file for the new content
cat > temp_router.ts << 'EOF'
import { NextResponse } from 'next/server';
import { OpenAIStream } from 'ai';
import { Configuration, OpenAIApi } from 'openai-edge';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export const aiRouter = async (req: Request) => {
  try {
    const { messages } = await req.json();
    
    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      stream: true,
      messages,
    });
    
    if (response.ok) {
      const stream = OpenAIStream(response);
      return new NextResponse(stream);
    }
  } catch (error) {
    console.error('OpenAI error:', error);
    return new NextResponse(JSON.stringify({ error: 'An error occurred during your request.' }), {
      status: 500,
      headers: { 'content-type': 'application/json' },
    });
  }
  throw new Error('All AI providers failed');
}

export const routeAIRequest = async (req: Request) => {
  return aiRouter(req);
}
EOF

# Replace the original file with the new content
mv temp_router.ts "$ROUTER_FILE"

echo "Successfully fixed $ROUTER_FILE with the correct structure"
echo "You can now run 'pnpm build' to verify the fix"
