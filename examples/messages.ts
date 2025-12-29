/**
 * Messages API Examples
 * Demonstrates various ways to use the R9S Messages API (Claude/Anthropic compatible).
 */

import { R9S } from "@r9s/sdk";
import * as readline from "readline";

async function basicMessage() {
  console.log("\n" + "=".repeat(60));
  console.log("Example 1: Basic Message");
  console.log("=".repeat(60));

  const r9s = new R9S({
    apiKey: process.env.R9S_API_KEY || "",
    serverURL: process.env.R9S_BASE_URL,
  });

  const res = await r9s.messages.create({
    model: "claude-haiku-4.5",
    messages: [
      {
        role: "user",
        content: [{ type: "text", text: "Hello! How can you assist me today?" }],
      },
    ],
    maxTokens: 1024,
  });

  console.log(`Assistant: ${(res.content[0] as any).text}`);
  console.log(
    `Usage: input_tokens=${res.usage.inputTokens}, output_tokens=${res.usage.outputTokens}`
  );
}

async function messageWithSystemPrompt() {
  console.log("\n" + "=".repeat(60));
  console.log("Example 2: Message with System Prompt");
  console.log("=".repeat(60));

  const r9s = new R9S({
    apiKey: process.env.R9S_API_KEY || "",
    serverURL: process.env.R9S_BASE_URL,
  });

  const res = await r9s.messages.create({
    model: "claude-haiku-4.5",
    system: "You are a knowledgeable historian specializing in ancient civilizations.",
    messages: [
      {
        role: "user",
        content: [{ type: "text", text: "Tell me about the pyramids of Egypt." }],
      },
    ],
    maxTokens: 500,
    temperature: 0.7,
  });

  console.log(`Assistant: ${(res.content[0] as any).text}`);
}

async function streamingMessage() {
  console.log("\n" + "=".repeat(60));
  console.log("Example 3: Streaming Message");
  console.log("=".repeat(60));

  const r9s = new R9S({
    apiKey: process.env.R9S_API_KEY || "",
    serverURL: process.env.R9S_BASE_URL,
  });

  const stream = await r9s.messages.create({
    model: "claude-haiku-4.5",
    messages: [
      {
        role: "user",
        content: [{ type: "text", text: "Write a short poem about the ocean." }],
      },
    ],
    maxTokens: 300,
    stream: true,
  });

  process.stdout.write("Assistant: ");
  for await (const chunk of stream) {
    const chunkType = (chunk as any).TYPE || (chunk as any).type;
    if (chunkType === "content_block_delta") {
      if ((chunk as any).delta?.text) {
        process.stdout.write((chunk as any).delta.text);
      }
    } else if (chunkType === "message_stop") {
      console.log("\n");
    }
  }
}

async function messageWithTools() {
  console.log("\n" + "=".repeat(60));
  console.log("Example 4: Message with Tool Use");
  console.log("=".repeat(60));

  const r9s = new R9S({
    apiKey: process.env.R9S_API_KEY || "",
    serverURL: process.env.R9S_BASE_URL,
  });

  const tools = [
    {
      name: "get_stock_price",
      description: "Get the current stock price for a given ticker symbol",
      inputSchema: {
        type: "object",
        properties: {
          ticker: {
            type: "string",
            description: "The stock ticker symbol, e.g. AAPL for Apple",
          },
        },
        required: ["ticker"],
      },
    },
  ];

  const res = await r9s.messages.create({
    model: "claude-haiku-4.5",
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: "What's the current stock price of Apple?",
          },
        ],
      },
    ],
    tools: tools as any,
    maxTokens: 1024,
  });

  let toolUseBlock: any = null;
  for (const block of res.content) {
    const blockType = (block as any).TYPE || (block as any).type;
    if (blockType === "tool_use") {
      toolUseBlock = block;
      console.log(`Assistant wants to call: ${(block as any).name}`);
      console.log(`Arguments: ${JSON.stringify((block as any).input)}`);
      break;
    }
  }

  if (toolUseBlock) {
    const toolResult = JSON.stringify({
      ticker: "AAPL",
      price: 178.5,
      currency: "USD",
      timestamp: "2025-12-23T10:30:00Z",
    });

    const messages = [
      {
        role: "user" as const,
        content: [
          {
            type: "text" as const,
            text: "What's the current stock price of Apple?",
          },
        ],
      },
      { role: "assistant" as const, content: res.content as any },
      {
        role: "user" as const,
        content: [
          {
            type: "tool_result" as const,
            toolUseId: toolUseBlock.id,
            content: toolResult,
          },
        ],
      },
    ];

    const finalRes = await r9s.messages.create({
      model: "claude-haiku-4.5",
      messages: messages as any,
      tools: tools as any,
      maxTokens: 1024,
    });

    console.log(`Final answer: ${(finalRes.content[0] as any).text}`);
  }
}

async function multiTurnConversation() {
  console.log("\n" + "=".repeat(60));
  console.log("Example 5: Multi-turn Conversation");
  console.log("=".repeat(60));

  const r9s = new R9S({
    apiKey: process.env.R9S_API_KEY || "",
    serverURL: process.env.R9S_BASE_URL,
  });

  const messages = [
    {
      role: "user" as const,
      content: [
        {
          type: "text" as const,
          text: "I'm learning Python. Can you explain what a dictionary is?",
        },
      ],
    },
    {
      role: "assistant" as const,
      content: [
        {
          type: "text" as const,
          text: "A dictionary in Python is a data structure that stores key-value pairs. It's like a real dictionary where you look up a word (key) to find its definition (value).",
        },
      ],
    },
    {
      role: "user" as const,
      content: [
        {
          type: "text" as const,
          text: "Can you show me an example of creating one?",
        },
      ],
    },
  ];

  const res = await r9s.messages.create({
    model: "claude-haiku-4.5",
    system: "You are a patient Python programming tutor.",
    messages: messages as any,
    maxTokens: 800,
  });

  console.log(`Assistant: ${(res.content[0] as any).text}`);
}

async function visionInput() {
  console.log("\n" + "=".repeat(60));
  console.log("Example 6: Vision Input");
  console.log("=".repeat(60));

  const r9s = new R9S({
    apiKey: process.env.R9S_API_KEY || "",
    serverURL: process.env.R9S_BASE_URL,
  });

  const res = await r9s.messages.create({
    model: "claude-sonnet-4.5",
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: "What's in this image? Describe it in detail.",
          },
          {
            type: "image",
            source: {
              type: "url",
              url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Gfp-wisconsin-madison-the-nature-boardwalk.jpg/2560px-Gfp-wisconsin-madison-the-nature-boardwalk.jpg",
            },
          },
        ] as any,
      },
    ],
    maxTokens: 500,
  });

  console.log(`Assistant: ${(res.content[0] as any).text}`);
}

async function base64ImageInput() {
  console.log("\n" + "=".repeat(60));
  console.log("Example 7: Base64 Image Input");
  console.log("=".repeat(60));

  const r9s = new R9S({
    apiKey: process.env.R9S_API_KEY || "",
    serverURL: process.env.R9S_BASE_URL,
  });

  const base64Image =
    "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==";

  const res = await r9s.messages.create({
    model: "claude-sonnet-4.5",
    messages: [
      {
        role: "user",
        content: [
          { type: "text", text: "Describe this image." },
          {
            type: "image",
            source: {
              type: "base64",
              mediaType: "image/png",
              data: base64Image,
            },
          },
        ] as any,
      },
    ],
    maxTokens: 300,
  });

  console.log(`Assistant: ${(res.content[0] as any).text}`);
}

async function withMetadata() {
  console.log("\n" + "=".repeat(60));
  console.log("Example 8: With Metadata Tracking");
  console.log("=".repeat(60));

  const r9s = new R9S({
    apiKey: process.env.R9S_API_KEY || "",
    serverURL: process.env.R9S_BASE_URL,
  });

  const res = await r9s.messages.create({
    model: "claude-haiku-4.5",
    messages: [
      {
        role: "user",
        content: [{ type: "text", text: "What is machine learning?" }],
      },
    ],
    maxTokens: 500,
    metadata: {
      userId: "user_12345",
      sessionId: "session_abc789",
      source: "web_app",
      version: "2.1.0",
    } as any,
  });

  console.log(`Assistant: ${(res.content[0] as any).text}`);
  console.log(`Request ID: ${res.id}`);
}

async function withStopSequences() {
  console.log("\n" + "=".repeat(60));
  console.log("Example 9: Using Stop Sequences");
  console.log("=".repeat(60));

  const r9s = new R9S({
    apiKey: process.env.R9S_API_KEY || "",
    serverURL: process.env.R9S_BASE_URL,
  });

  const res = await r9s.messages.create({
    model: "claude-haiku-4.5",
    messages: [
      {
        role: "user",
        content: [{ type: "text", text: "count 1 to 10" }],
      },
    ],
    maxTokens: 200,
    temperature: 0.9,
    stopSequences: ["5\n"],
  });

  console.log(`Assistant: ${(res.content[0] as any).text}`);
  console.log(`Stop reason: ${res.stopReason}`);
}

async function temperatureComparison() {
  console.log("\n" + "=".repeat(60));
  console.log("Example 10: Temperature Comparison");
  console.log("=".repeat(60));

  const r9s = new R9S({
    apiKey: process.env.R9S_API_KEY || "",
    serverURL: process.env.R9S_BASE_URL,
  });

  const prompt = "Write a creative name for a coffee shop.";

  console.log("\nWith temperature=0.0 (deterministic):");
  const res1 = await r9s.messages.create({
    model: "claude-haiku-4.5",
    messages: [{ role: "user", content: [{ type: "text", text: prompt }] }],
    maxTokens: 100,
    temperature: 0.0,
  });
  console.log(`Response: ${(res1.content[0] as any).text}`);

  console.log("\nWith temperature=1.0 (creative):");
  const res2 = await r9s.messages.create({
    model: "claude-haiku-4.5",
    messages: [{ role: "user", content: [{ type: "text", text: prompt }] }],
    maxTokens: 100,
    temperature: 1.0,
  });
  console.log(`Response: ${(res2.content[0] as any).text}`);
}

async function topKTopPSampling() {
  console.log("\n" + "=".repeat(60));
  console.log("Example 11: Top-K and Top-P Sampling");
  console.log("=".repeat(60));

  const r9s = new R9S({
    apiKey: process.env.R9S_API_KEY || "",
    serverURL: process.env.R9S_BASE_URL,
  });

  const res = await r9s.messages.create({
    model: "claude-haiku-4.5",
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: "Generate a creative story opening sentence.",
          },
        ],
      },
    ],
    maxTokens: 150,
    topK: 50,
    topP: 0.95,
  });

  console.log(`Assistant: ${(res.content[0] as any).text}`);
}

async function parallelToolCalls() {
  console.log("\n" + "=".repeat(60));
  console.log("Example 12: Parallel Tool Calls");
  console.log("=".repeat(60));

  const r9s = new R9S({
    apiKey: process.env.R9S_API_KEY || "",
    serverURL: process.env.R9S_BASE_URL,
  });

  const tools = [
    {
      name: "get_weather",
      description: "Get weather for a city",
      inputSchema: {
        type: "object",
        properties: { city: { type: "string" } },
        required: ["city"],
      },
    },
    {
      name: "get_time",
      description: "Get current time in a timezone",
      inputSchema: {
        type: "object",
        properties: { timezone: { type: "string" } },
        required: ["timezone"],
      },
    },
  ];

  const res = await r9s.messages.create({
    model: "claude-haiku-4.5",
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: "What's the weather in Tokyo and what time is it there?",
          },
        ],
      },
    ],
    tools: tools as any,
    maxTokens: 1024,
  });

  const toolCalls = res.content.filter(
    (block: any) =>
      ((block as any).TYPE || (block as any).type) === "tool_use"
  );
  console.log(`Number of tool calls: ${toolCalls.length}`);
  toolCalls.forEach((toolCall: any, i: number) => {
    console.log(
      `  ${i + 1}. ${toolCall.name}(${JSON.stringify(toolCall.input)})`
    );
  });
}

async function thinkingMode() {
  console.log("\n" + "=".repeat(60));
  console.log("Example 13: Extended Thinking Mode");
  console.log("=".repeat(60));

  const r9s = new R9S({
    apiKey: process.env.R9S_API_KEY || "",
    serverURL: process.env.R9S_BASE_URL,
  });

  const res = await r9s.messages.create({
    model: "claude-sonnet-4.5",
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: "Solve this puzzle: If 5 cats can catch 5 mice in 5 minutes, how many cats are needed to catch 100 mice in 100 minutes?",
          },
        ],
      },
    ],
    maxTokens: 2000,
    thinking: { type: "enabled", budgetTokens: 1000 } as any,
  });

  for (const block of res.content) {
    const blockType = (block as any).TYPE || (block as any).type;
    if (blockType === "thinking") {
      console.log(`Thinking process:\n${(block as any).thinking}\n`);
    } else if (blockType === "text") {
      console.log(`Answer: ${(block as any).text}`);
    }
  }
}

async function main() {
  const examples = [
    { name: "Basic Message", fn: basicMessage },
    { name: "Message with System Prompt", fn: messageWithSystemPrompt },
    { name: "Streaming Message", fn: streamingMessage },
    { name: "Message with Tools", fn: messageWithTools },
    { name: "Multi-turn Conversation", fn: multiTurnConversation },
    { name: "Vision Input", fn: visionInput },
    { name: "Base64 Image Input", fn: base64ImageInput },
    { name: "With Metadata", fn: withMetadata },
    { name: "With Stop Sequences", fn: withStopSequences },
    { name: "Temperature Comparison", fn: temperatureComparison },
    { name: "Top-K and Top-P Sampling", fn: topKTopPSampling },
    { name: "Parallel Tool Calls", fn: parallelToolCalls },
    { name: "Thinking Mode", fn: thinkingMode },
  ];

  console.log("\n" + "=".repeat(60));
  console.log("R9S Messages API - All Examples");
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
    "\nSelect an example to run (1-13), or 0 to run all: ",
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
            console.log("Invalid choice. Running basic message example...");
            await basicMessage();
          }
        } else {
          console.log("Invalid choice. Running basic message example...");
          await basicMessage();
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
