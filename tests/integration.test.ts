import { describe, it, expect, beforeAll } from "vitest";
import { R9S } from "../src/index.js";

const API_KEY = process.env.R9S_API_KEY || "";

beforeAll(() => {
  if (!API_KEY) {
    console.warn("R9S_API_KEY not set, integration tests will be skipped");
  }
});

function skipIfNoKey() {
  if (!API_KEY) return true;
  return false;
}

describe("Chat Completions", () => {
  it("basic chat returns a response", async () => {
    if (skipIfNoKey()) return;
    const r9s = new R9S({ apiKey: API_KEY });
    const res = await r9s.chat.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: "Say hello in one word." }],
    });
    expect(res.choices).toHaveLength(1);
    expect(res.choices[0]?.message?.content).toBeTruthy();
    expect(res.usage?.totalTokens).toBeGreaterThan(0);
  });

  it("streaming chat returns chunks", async () => {
    if (skipIfNoKey()) return;
    const r9s = new R9S({ apiKey: API_KEY });
    const stream = await r9s.chat.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: "Say hello in one word." }],
      stream: true,
    });
    const chunks: string[] = [];
    for await (const chunk of stream) {
      if (chunk.choices[0]?.delta?.content) {
        chunks.push(chunk.choices[0].delta.content);
      }
    }
    expect(chunks.length).toBeGreaterThan(0);
  });
});

describe("Models", () => {
  it("list models returns a non-empty array", async () => {
    if (skipIfNoKey()) return;
    const r9s = new R9S({ apiKey: API_KEY });
    const res = await r9s.models.list();
    expect(res.data.length).toBeGreaterThan(0);
  });
});

describe("Embeddings", () => {
  it("create embeddings returns a vector", async () => {
    if (skipIfNoKey()) return;
    const r9s = new R9S({ apiKey: API_KEY });
    const res = await r9s.embeddings.create({
      model: "text-embedding-3-large",
      input: "Hello world",
    });
    expect(res.data[0]?.embedding?.length).toBeGreaterThan(0);
  });
});

describe("Gemini", () => {
  it("generateContent returns a response", async () => {
    if (skipIfNoKey()) return;
    const r9s = new R9S({ apiKey: API_KEY });
    const res = await r9s.gemini.generateContent(
      { googApiKey: API_KEY },
      "gemini-3-flash-preview",
      { contents: [{ parts: [{ text: "Say hello in one word." }] }] },
    );
    expect(res.candidates?.length).toBeGreaterThan(0);
  });
});
