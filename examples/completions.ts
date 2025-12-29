/**
 * Completions API Examples
 * Demonstrates various ways to use the R9S completions API.
 */

import { R9S } from "@r9s/sdk";
import * as readline from "readline";

async function basicCompletion() {
  console.log("\n" + "=".repeat(60));
  console.log("Example 1: Basic Text Completion");
  console.log("=".repeat(60));

  const r9s = new R9S({
    apiKey: process.env.R9S_API_KEY || "",
    serverURL: process.env.R9S_BASE_URL,
  });

  const res = await r9s.completions.create({
    model: "gpt-4o-mini",
    prompt: "Once upon a time",
    maxTokens: 50,
  });

  console.log("Prompt: Once upon a time");
  console.log(`Completion: ${res.choices[0].text}`);
  console.log(`Usage: ${JSON.stringify(res.usage)}`);
}

async function completionWithOptions() {
  console.log("\n" + "=".repeat(60));
  console.log("Example 2: Completion with Options");
  console.log("=".repeat(60));

  const r9s = new R9S({
    apiKey: process.env.R9S_API_KEY || "",
    serverURL: process.env.R9S_BASE_URL,
  });

  const res = await r9s.completions.create({
    model: "gpt-4o-mini",
    prompt: "Write a haiku about coding",
    maxTokens: 100,
    temperature: 0.8,
    topP: 1.0,
    n: 1,
  });

  console.log(`Completion: ${res.choices[0].text}`);
  console.log(`Finish reason: ${res.choices[0].finishReason}`);
}

async function streamingCompletion() {
  console.log("\n" + "=".repeat(60));
  console.log("Example 3: Streaming Completion");
  console.log("=".repeat(60));

  const r9s = new R9S({
    apiKey: process.env.R9S_API_KEY || "",
    serverURL: process.env.R9S_BASE_URL,
  });

  const stream = await r9s.completions.create({
    model: "gpt-4o-mini",
    prompt: "List 3 benefits of unit testing:\n1.",
    maxTokens: 150,
    stream: true,
    stop: ["\n\n"],
  });

  process.stdout.write("Completion: ");
  for await (const chunk of stream) {
    if (chunk.choices?.[0]?.text) {
      process.stdout.write(chunk.choices[0].text);
    }
  }
  console.log();
}

async function codeCompletion() {
  console.log("\n" + "=".repeat(60));
  console.log("Example 4: Code Completion");
  console.log("=".repeat(60));

  const r9s = new R9S({
    apiKey: process.env.R9S_API_KEY || "",
    serverURL: process.env.R9S_BASE_URL,
  });

  const codePrompt = "def fibonacci(n):";
  const res = await r9s.completions.create({
    model: "gpt-4o-mini",
    prompt: codePrompt,
    maxTokens: 80,
    temperature: 0.3,
  });

  console.log(`Code prompt:\n${codePrompt}`);
  console.log(`\nCompletion:\n${res.choices[0].text}`);
}

async function completionWithStopSequences() {
  console.log("\n" + "=".repeat(60));
  console.log("Example 5: Completion with Stop Sequences");
  console.log("=".repeat(60));

  const r9s = new R9S({
    apiKey: process.env.R9S_API_KEY || "",
    serverURL: process.env.R9S_BASE_URL,
  });

  const res = await r9s.completions.create({
    model: "gpt-4o-mini",
    prompt: "Write a Python function to check if a number is prime:\n\n```python\n",
    maxTokens: 200,
    temperature: 0.5,
    stop: ["```", "\n\n\n"],
  });

  console.log(`Completion:\n\`\`\`python\n${res.choices[0].text}`);
}

async function multipleCompletions() {
  console.log("\n" + "=".repeat(60));
  console.log("Example 6: Multiple Completions");
  console.log("=".repeat(60));

  const r9s = new R9S({
    apiKey: process.env.R9S_API_KEY || "",
    serverURL: process.env.R9S_BASE_URL,
  });

  const res = await r9s.completions.create({
    model: "gpt-4o-mini",
    prompt: "The best programming language is",
    maxTokens: 30,
    temperature: 0.9,
    n: 3,
  });

  console.log(`Generated ${res.choices.length} completions:`);
  res.choices.forEach((choice, i) => {
    console.log(`\n${i + 1}. ${choice.text}`);
  });
}

async function completionWithEcho() {
  console.log("\n" + "=".repeat(60));
  console.log("Example 7: Completion with Echo");
  console.log("=".repeat(60));

  const r9s = new R9S({
    apiKey: process.env.R9S_API_KEY || "",
    serverURL: process.env.R9S_BASE_URL,
  });

  const res = await r9s.completions.create({
    model: "gpt-4o-mini",
    prompt: "The capital of France is",
    maxTokens: 20,
    echo: true,
    temperature: 0.3,
  });

  console.log(`Full text (with prompt): ${res.choices[0].text}`);
}

async function completionWithPenalties() {
  console.log("\n" + "=".repeat(60));
  console.log("Example 8: Completion with Penalties");
  console.log("=".repeat(60));

  const r9s = new R9S({
    apiKey: process.env.R9S_API_KEY || "",
    serverURL: process.env.R9S_BASE_URL,
  });

  const res = await r9s.completions.create({
    model: "gpt-4o-mini",
    prompt: "Write three creative ways to say hello:",
    maxTokens: 100,
    temperature: 0.8,
    frequencyPenalty: 0.5,
    presencePenalty: 0.5,
  });

  console.log(`Completion: ${res.choices[0].text}`);
}

async function completionWithSeed() {
  console.log("\n" + "=".repeat(60));
  console.log("Example 9: Completion with Seed (Reproducible)");
  console.log("=".repeat(60));

  const r9s = new R9S({
    apiKey: process.env.R9S_API_KEY || "",
    serverURL: process.env.R9S_BASE_URL,
  });

  const seed = 42;
  const prompt = "Random number between 1 and 100:";

  // First call
  const res1 = await r9s.completions.create({
    model: "gpt-4o-mini",
    prompt: prompt,
    maxTokens: 20,
    seed: seed,
    temperature: 0.7,
  });

  // Second call with same seed
  const res2 = await r9s.completions.create({
    model: "gpt-4o-mini",
    prompt: prompt,
    maxTokens: 20,
    seed: seed,
    temperature: 0.7,
  });

  console.log(`First call:  ${res1.choices[0].text}`);
  console.log(`Second call: ${res2.choices[0].text}`);
  console.log(`Results match: ${res1.choices[0].text === res2.choices[0].text}`);
}

async function main() {
  const examples = [
    { name: "Basic Completion", fn: basicCompletion },
    { name: "Completion with Options", fn: completionWithOptions },
    { name: "Streaming Completion", fn: streamingCompletion },
    { name: "Code Completion", fn: codeCompletion },
    { name: "Completion with Stop Sequences", fn: completionWithStopSequences },
    { name: "Multiple Completions", fn: multipleCompletions },
    { name: "Completion with Echo", fn: completionWithEcho },
    { name: "Completion with Penalties", fn: completionWithPenalties },
    { name: "Completion with Seed", fn: completionWithSeed },
  ];

  console.log("\n" + "=".repeat(60));
  console.log("R9S Completions API - All Examples");
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
            console.log("Invalid choice. Running basic completion example...");
            await basicCompletion();
          }
        } else {
          console.log("Invalid choice. Running basic completion example...");
          await basicCompletion();
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
