/**
 * Chat Completions API Examples
 * Demonstrates various ways to use the R9S chat completions API.
 */

import { R9S } from "@r9s/sdk";
import * as readline from "readline";

async function basicChat() {
  console.log("\n" + "=".repeat(60));
  console.log("Example 1: Basic Chat");
  console.log("=".repeat(60));

  const r9s = new R9S({
    apiKey: process.env.R9S_API_KEY || "",
    serverURL: process.env.R9S_BASE_URL,
  });

  const res = await r9s.chat.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: "Hello, how are you?" }],
  });

  console.log(`Assistant: ${res.choices[0].message?.content}`);
  console.log(`Usage: ${JSON.stringify(res.usage)}`);
}

async function chatWithSystemPrompt() {
  console.log("\n" + "=".repeat(60));
  console.log("Example 2: Chat with System Prompt");
  console.log("=".repeat(60));

  const r9s = new R9S({
    apiKey: process.env.R9S_API_KEY || "",
    serverURL: process.env.R9S_BASE_URL,
  });

  const res = await r9s.chat.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      { role: "user", content: "What is the capital of France?" },
    ],
    temperature: 0.7,
    maxTokens: 100,
  });

  console.log(`Assistant: ${res.choices[0].message?.content}`);
}

async function streamingChat() {
  console.log("\n" + "=".repeat(60));
  console.log("Example 3: Streaming Chat");
  console.log("=".repeat(60));

  const r9s = new R9S({
    apiKey: process.env.R9S_API_KEY || "",
    serverURL: process.env.R9S_BASE_URL,
  });

  const stream = await r9s.chat.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: "Tell me a short story about a cat" }],
    stream: true,
    streamOptions: { includeUsage: true },
    temperature: 0.8,
  });

  process.stdout.write("Assistant: ");
  for await (const chunk of stream) {
    if (chunk.choices?.[0]?.delta?.content) {
      process.stdout.write(chunk.choices[0].delta.content);
    }
    if (chunk.usage) {
      console.log(`\n\nUsage: ${JSON.stringify(chunk.usage)}`);
    }
  }
  console.log();
}

async function chatWithTools() {
  console.log("\n" + "=".repeat(60));
  console.log("Example 4: Chat with Tool Calls");
  console.log("=".repeat(60));

  const r9s = new R9S({
    apiKey: process.env.R9S_API_KEY || "",
    serverURL: process.env.R9S_BASE_URL,
  });

  const tools = [
    {
      type: "function" as const,
      function: {
        name: "get_weather",
        description: "Get the current weather in a given location",
        parameters: {
          type: "object",
          properties: {
            location: {
              type: "string",
              description: "The city and state, e.g. San Francisco, CA",
            },
            unit: {
              type: "string",
              enum: ["celsius", "fahrenheit"],
              description: "The temperature unit to use",
            },
          },
          required: ["location"],
        },
      },
    },
  ];

  const res = await r9s.chat.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "user", content: "What's the weather like in San Francisco?" },
    ],
    tools: tools as any,
    toolChoice: "auto",
  });

  const assistantMessage = res.choices[0].message;
  console.log(
    `Assistant wants to call: ${
      assistantMessage?.toolCalls?.[0]?.function?.name || "No tool call"
    }`
  );

  if (assistantMessage?.toolCalls) {
    const toolCall = assistantMessage.toolCalls[0];
    const toolResponse = JSON.stringify({
      temperature: 18,
      condition: "sunny",
      humidity: 65,
    });

    const messages = [
      { role: "user" as const, content: "What's the weather in San Francisco?" },
      {
        role: "assistant" as const,
        content: assistantMessage.content || "",
        toolCalls: [
          {
            id: toolCall.id,
            type: "function" as const,
            function: {
              name: toolCall.function.name,
              arguments: toolCall.function.arguments,
            },
          },
        ],
      },
      {
        role: "tool" as const,
        content: toolResponse,
        toolCallId: toolCall.id,
      },
    ];

    const finalRes = await r9s.chat.create({
      model: "gpt-4o-mini",
      messages: messages as any,
      tools: tools as any,
    });

    console.log(`Final answer: ${finalRes.choices[0].message?.content}`);
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
    { role: "system" as const, content: "You are a knowledgeable programming tutor." },
    { role: "user" as const, content: "How do I create a list in Python?" },
    {
      role: "assistant" as const,
      content:
        "In Python, you can create a list using square brackets. For example: my_list = [1, 2, 3]",
    },
    { role: "user" as const, content: "How do I add items to it?" },
  ];

  const res = await r9s.chat.create({
    model: "gpt-4o-mini",
    messages: messages as any,
    maxTokens: 500,
    temperature: 0.8,
  });

  console.log(`Assistant: ${res.choices[0].message?.content}`);
}

async function jsonModeOutput() {
  console.log("\n" + "=".repeat(60));
  console.log("Example 6: JSON Mode Output");
  console.log("=".repeat(60));

  const r9s = new R9S({
    apiKey: process.env.R9S_API_KEY || "",
    serverURL: process.env.R9S_BASE_URL,
  });

  const res = await r9s.chat.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: "You are a helpful assistant that outputs in JSON format.",
      },
      {
        role: "user",
        content:
          "Extract the name, age, and occupation from this text: John is 30 years old and works as a software engineer.",
      },
    ],
    responseFormat: { type: "json_object" },
    temperature: 0.5,
  });

  console.log(`JSON Output:\n${res.choices[0].message?.content}`);
}

async function structuredJsonOutput() {
  console.log("\n" + "=".repeat(60));
  console.log("Example 7: Structured JSON Output with Schema");
  console.log("=".repeat(60));

  const r9s = new R9S({
    apiKey: process.env.R9S_API_KEY || "",
    serverURL: process.env.R9S_BASE_URL,
  });

  const res = await r9s.chat.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "user",
        content: "Generate a user profile for a software engineer named Alice",
      },
    ],
    responseFormat: {
      type: "json_schema",
      jsonSchema: {
        name: "user_profile",
        description: "A user profile object",
        schema: {
          type: "object",
          properties: {
            name: { type: "string" },
            age: { type: "integer" },
            occupation: { type: "string" },
            skills: { type: "array", items: { type: "string" } },
          },
          required: ["name", "occupation"],
        },
      },
    } as any,
    temperature: 0.7,
  });

  console.log(`Structured Output:\n${res.choices[0].message?.content}`);
}

async function visionInput() {
  console.log("\n" + "=".repeat(60));
  console.log("Example 8: Vision Input");
  console.log("=".repeat(60));

  const r9s = new R9S({
    apiKey: process.env.R9S_API_KEY || "",
    serverURL: process.env.R9S_BASE_URL,
  });

  const res = await r9s.chat.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "user",
        content: [
          { type: "text", text: "What's in this image?" },
          {
            type: "image_url",
            imageUrl: {
              url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Gfp-wisconsin-madison-the-nature-boardwalk.jpg/2560px-Gfp-wisconsin-madison-the-nature-boardwalk.jpg",
              detail: "high",
            },
          },
        ] as any,
      },
    ],
    maxTokens: 300,
  });

  console.log(`Assistant: ${res.choices[0].message?.content}`);
}

async function forcedToolCall() {
  console.log("\n" + "=".repeat(60));
  console.log("Example 9: Forced Tool Call");
  console.log("=".repeat(60));

  const r9s = new R9S({
    apiKey: process.env.R9S_API_KEY || "",
    serverURL: process.env.R9S_BASE_URL,
  });

  const tools = [
    {
      type: "function" as const,
      function: {
        name: "get_weather",
        description: "Get weather information",
        parameters: {
          type: "object",
          properties: { location: { type: "string" } },
          required: ["location"],
        },
      },
    },
    {
      type: "function" as const,
      function: {
        name: "get_time",
        description: "Get current time",
        parameters: {
          type: "object",
          properties: { timezone: { type: "string" } },
        },
      },
    },
  ];

  const res = await r9s.chat.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: "Tell me about the weather" }],
    tools: tools as any,
    toolChoice: {
      type: "function",
      function: { name: "get_weather" },
    } as any,
  });

  if (res.choices[0].message?.toolCalls) {
    console.log(
      `Forced to call: ${res.choices[0].message.toolCalls[0].function.name}`
    );
  }
}

async function parallelToolCalls() {
  console.log("\n" + "=".repeat(60));
  console.log("Example 10: Parallel Tool Calls");
  console.log("=".repeat(60));

  const r9s = new R9S({
    apiKey: process.env.R9S_API_KEY || "",
    serverURL: process.env.R9S_BASE_URL,
  });

  const tools = [
    {
      type: "function" as const,
      function: {
        name: "get_weather",
        description: "Get weather information",
        parameters: {
          type: "object",
          properties: { city: { type: "string" } },
          required: ["city"],
        },
      },
    },
  ];

  const res = await r9s.chat.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "user",
        content:
          "Check the weather in Tokyo, Paris, and New York simultaneously",
      },
    ],
    tools: tools as any,
    parallelToolCalls: true,
    temperature: 0.7,
  });

  if (res.choices[0].message?.toolCalls) {
    console.log(
      `Number of parallel tool calls: ${res.choices[0].message.toolCalls.length}`
    );
    res.choices[0].message.toolCalls.forEach((toolCall, i) => {
      console.log(
        `  ${i + 1}. ${toolCall.function.name}(${toolCall.function.arguments})`
      );
    });
  }
}

async function withMetadata() {
  console.log("\n" + "=".repeat(60));
  console.log("Example 11: With Metadata and User Tracking");
  console.log("=".repeat(60));

  const r9s = new R9S({
    apiKey: process.env.R9S_API_KEY || "",
    serverURL: process.env.R9S_BASE_URL,
  });

  const res = await r9s.chat.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "user",
        content: "Explain quantum entanglement in simple terms",
      },
    ],
    temperature: 0.8,
    maxTokens: 300,
    user: "user_abc123",
    metadata: {
      sessionId: "session_xyz789",
      conversationId: "conv_456",
      source: "mobile_app",
      version: "1.2.3",
    } as any,
    store: true,
  });

  console.log(`Assistant: ${res.choices[0].message?.content}`);
}

async function main() {
  const examples = [
    { name: "Basic Chat", fn: basicChat },
    { name: "Chat with System Prompt", fn: chatWithSystemPrompt },
    { name: "Streaming Chat", fn: streamingChat },
    { name: "Chat with Tools", fn: chatWithTools },
    { name: "Multi-turn Conversation", fn: multiTurnConversation },
    { name: "JSON Mode Output", fn: jsonModeOutput },
    { name: "Structured JSON Output", fn: structuredJsonOutput },
    { name: "Vision Input", fn: visionInput },
    { name: "Forced Tool Call", fn: forcedToolCall },
    { name: "Parallel Tool Calls", fn: parallelToolCalls },
    { name: "With Metadata", fn: withMetadata },
  ];

  console.log("\n" + "=".repeat(60));
  console.log("R9S Chat Completions API - All Examples");
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
    "\nSelect an example to run (1-11), or 0 to run all: ",
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
            console.log("Invalid choice. Running basic chat example...");
            await basicChat();
          }
        } else {
          console.log("Invalid choice. Running basic chat example...");
          await basicChat();
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
