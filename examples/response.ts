/**
 * Response API Examples
 * Demonstrates various ways to use the R9S Response API (OpenAI 2025 format).
 */

import { R9S } from "@r9s/sdk";
import * as readline from "readline";

async function simpleTextInput() {
  console.log("\n" + "=".repeat(60));
  console.log("Example 1: Simple Text Input");
  console.log("=".repeat(60));

  const r9s = new R9S({
    apiKey: process.env.R9S_API_KEY || "",
    serverURL: process.env.R9S_BASE_URL,
  });

  const res = await r9s.responses.create({
    model: "gpt-4o-mini",
    input: "Tell me a joke about programming",
    instructions: "You are a funny assistant",
    maxOutputTokens: 500,
    temperature: 0.7,
    stream: false,
  });

  if (res.output?.[0]?.content) {
    console.log(`Assistant: ${(res.output[0].content[0] as any).text}`);
  }
  if (res.usage) {
    console.log(`Usage: ${JSON.stringify(res.usage)}`);
  }
}

async function withMessages() {
  console.log("\n" + "=".repeat(60));
  console.log("Example 2: Using Message Array");
  console.log("=".repeat(60));

  const r9s = new R9S({
    apiKey: process.env.R9S_API_KEY || "",
    serverURL: process.env.R9S_BASE_URL,
  });

  const res = await r9s.responses.create({
    model: "gpt-4o-mini",
    input: [
      {
        role: "user",
        content: "Hello, how are you?",
      },
    ] as any,
    instructions: "You are a helpful assistant",
    maxOutputTokens: 1000,
    stream: false,
  });

  if (res.output?.[0]?.content) {
    console.log(`Assistant: ${(res.output[0].content[0] as any).text}`);
  }
}

async function multiTurnConversation() {
  console.log("\n" + "=".repeat(60));
  console.log("Example 3: Multi-turn Conversation");
  console.log("=".repeat(60));

  const r9s = new R9S({
    apiKey: process.env.R9S_API_KEY || "",
    serverURL: process.env.R9S_BASE_URL,
  });

  const res = await r9s.responses.create({
    model: "gpt-4o-mini",
    input: [
      {
        role: "user",
        content: "What is artificial intelligence?",
      },
      {
        role: "assistant",
        content: "Artificial intelligence (AI) is...",
      },
      {
        role: "user",
        content: "Can you give me some examples?",
      },
    ] as any,
    instructions: "You are a knowledgeable AI tutor",
    maxOutputTokens: 2000,
    stream: false,
  });

  if (res.output?.[0]?.content) {
    console.log(`Assistant: ${(res.output[0].content[0] as any).text}`);
  }
}

async function withTools() {
  console.log("\n" + "=".repeat(60));
  console.log("Example 4: Request with Tool Calls");
  console.log("=".repeat(60));

  const r9s = new R9S({
    apiKey: process.env.R9S_API_KEY || "",
    serverURL: process.env.R9S_BASE_URL,
  });

  const res = await r9s.responses.create({
    model: "gpt-4o-mini",
    input: [
      {
        role: "user",
        content: "What's the weather like in San Francisco?",
      },
    ] as any,
    instructions: "You are a helpful assistant with access to tools",
    maxOutputTokens: 2000,
    temperature: 0.7,
    tools: [
      {
        type: "function",
        name: "get_weather",
        description: "Get the current weather in a location",
        parameters: {
          type: "object",
          properties: { location: { type: "string" } },
          required: ["location"],
        },
      },
    ] as any,
    stream: false,
  });

  console.log(`Output: ${JSON.stringify(res.output)}`);
  if (res.usage) {
    console.log(`Usage: ${JSON.stringify(res.usage)}`);
  }
}

async function streamingResponse() {
  console.log("\n" + "=".repeat(60));
  console.log("Example 5: Streaming Response");
  console.log("=".repeat(60));

  const r9s = new R9S({
    apiKey: process.env.R9S_API_KEY || "",
    serverURL: process.env.R9S_BASE_URL,
  });

  const stream = await r9s.responses.create({
    model: "gpt-4o-mini",
    input: "Write a short poem about the ocean",
    instructions: "You are a creative poet",
    stream: true,
    maxOutputTokens: 500,
    temperature: 0.9,
  });

  process.stdout.write("Assistant: ");
  for await (const chunk of stream) {
    if ((chunk as any).type === "response.output_text.delta") {
      process.stdout.write((chunk as any).delta);
    }
  }
  console.log();
}

async function jsonMode() {
  console.log("\n" + "=".repeat(60));
  console.log("Example 6: JSON Mode Output");
  console.log("=".repeat(60));

  const r9s = new R9S({
    apiKey: process.env.R9S_API_KEY || "",
    serverURL: process.env.R9S_BASE_URL,
  });

  const res = await r9s.responses.create({
    model: "gpt-4o-mini",
    input:
      "Extract person information and return as JSON: John Smith is 35 years old and works as a software engineer in San Francisco",
    instructions: "Extract structured data and output in JSON format",
    text: {
      format: { type: "json_object" },
    } as any,
    maxOutputTokens: 500,
    stream: false,
  });

  if (res.output?.[0]?.content) {
    console.log(`JSON Output:\n${(res.output[0].content[0] as any).text}`);
  }
}

async function jsonSchema() {
  console.log("\n" + "=".repeat(60));
  console.log("Example 7: Structured JSON with Schema");
  console.log("=".repeat(60));

  const r9s = new R9S({
    apiKey: process.env.R9S_API_KEY || "",
    serverURL: process.env.R9S_BASE_URL,
  });

  const res = await r9s.responses.create({
    model: "gpt-4o-mini",
    input:
      "Generate a user profile for software developer Alice Chen in JSON format",
    instructions: "Create a detailed user profile following the schema",
    text: {
      format: {
        type: "json_schema",
        name: "user_profile",
        schema: {
          type: "object",
          properties: {
            name: { type: "string" },
            age: { type: "integer" },
            occupation: { type: "string" },
            location: { type: "string" },
            skills: { type: "array", items: { type: "string" } },
          },
          required: ["name", "age", "occupation", "location", "skills"],
          additionalProperties: false,
        },
        strict: true,
      },
    } as any,
    maxOutputTokens: 800,
    stream: false,
  });

  if (res.output?.[0]?.content) {
    console.log(`Structured Output:\n${(res.output[0].content[0] as any).text}`);
  }
}

async function withMetadata() {
  console.log("\n" + "=".repeat(60));
  console.log("Example 8: Request with Metadata");
  console.log("=".repeat(60));

  const r9s = new R9S({
    apiKey: process.env.R9S_API_KEY || "",
    serverURL: process.env.R9S_BASE_URL,
  });

  const res = await r9s.responses.create({
    model: "gpt-4o-mini",
    input: "Summarize the key points from our discussion",
    instructions: "You are a meeting assistant",
    maxOutputTokens: 1500,
    temperature: 0.5,
    topP: 0.9,
    metadata: {
      userId: "user_12345",
      sessionId: "session_abc",
      conversationId: "conv_xyz",
    } as any,
    stream: false,
  });

  if (res.output?.[0]?.content) {
    console.log(`Assistant: ${(res.output[0].content[0] as any).text}`);
  }
}

async function reasoningMode() {
  console.log("\n" + "=".repeat(60));
  console.log("Example 9: Reasoning Mode");
  console.log("=".repeat(60));

  const r9s = new R9S({
    apiKey: process.env.R9S_API_KEY || "",
    serverURL: process.env.R9S_BASE_URL,
  });

  const res = await r9s.responses.create({
    model: "gpt-5-codex",
    input:
      "A farmer needs to transport a fox, a chicken, and a bag of grain across a river. The boat can only carry the farmer and one item. If left alone, the fox will eat the chicken, and the chicken will eat the grain. How can the farmer get everything across safely?",
    instructions: "Think through this step by step",
    reasoning: {
      effort: "high",
    } as any,
    maxOutputTokens: 3000,
    stream: false,
  });

  if (res.output?.[0]?.content) {
    console.log(`Assistant: ${(res.output[0].content[0] as any).text}`);
  }
}

async function main() {
  const examples = [
    { name: "Simple Text Input", fn: simpleTextInput },
    { name: "Using Message Array", fn: withMessages },
    { name: "Multi-turn Conversation", fn: multiTurnConversation },
    { name: "Request with Tool Calls", fn: withTools },
    { name: "Streaming Response", fn: streamingResponse },
    { name: "JSON Mode Output", fn: jsonMode },
    { name: "Structured JSON with Schema", fn: jsonSchema },
    { name: "Request with Metadata", fn: withMetadata },
    { name: "Reasoning Mode", fn: reasoningMode },
  ];

  console.log("\n" + "=".repeat(60));
  console.log("R9S Response API - All Examples");
  console.log("=".repeat(60));
  console.log("\nAvailable examples:");
  examples.forEach((ex, i) => {
    console.log(`  ${i + 1}. ${ex.name}`);
  });

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question(
    "\nSelect an example to run (1-9), or 0 to run all: ",
    async (answer) => {
      rl.close();

      try {
        const choice = answer.trim();

        if (choice === "0") {
          for (const { name, fn } of examples) {
            try {
              await fn();
            } catch (e) {
              console.error(`\nError in ${name}: ${e}`);
            }
          }
        } else if (/^\d+$/.test(choice)) {
          const idx = parseInt(choice) - 1;
          if (idx >= 0 && idx < examples.length) {
            await examples[idx].fn();
          } else {
            console.log("Invalid choice. Running streaming response example...");
            await streamingResponse();
          }
        } else {
          console.log("Invalid choice. Running streaming response example...");
          await streamingResponse();
        }
      } catch (e) {
        console.error(`\nError: ${e}`);
      }
    }
  );
}

if (require.main === module) {
  main();
}
