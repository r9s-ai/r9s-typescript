import { describe, it, expect } from "vitest";
import * as z from "zod/v4-mini";
import { ChatCompletionRequest$outboundSchema } from "../src/models/chatcompletionrequest.js";
import { ImageEditRequest$outboundSchema } from "../src/models/imageeditrequest.js";
import { GeminiGenerateContentRequest$outboundSchema } from "../src/models/geminigeneratecontentrequest.js";
import { ServerList } from "../src/lib/config.js";

describe("Base URL", () => {
  it("should not contain /v1 suffix", () => {
    expect(ServerList[0]).toBe("https://api.r9s.ai");
  });

  it("chat completions path should include /v1", () => {
    const path = "/v1/chat/completions";
    const url = new URL(path, ServerList[0] + "/");
    expect(url.pathname).toBe("/v1/chat/completions");
  });

  it("Gemini path should assemble correctly without double v1", () => {
    const path = "/v1beta/models/gemini-3-flash:generateContent";
    const base = new URL(ServerList[0] + "/");
    const url = new URL(path, base);
    expect(url.href).toBe("https://api.r9s.ai/v1beta/models/gemini-3-flash:generateContent");
    expect(url.href).not.toContain("/v1/v1beta");
  });
});

describe("ChatCompletionRequest schema", () => {
  it("should validate a valid request", () => {
    const result = z.safeParse(ChatCompletionRequest$outboundSchema, {
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: "Hello" }],
    });
    expect(result.success).toBe(true);
  });

  it("should fail without model", () => {
    const result = z.safeParse(ChatCompletionRequest$outboundSchema, {
      messages: [{ role: "user", content: "Hello" }],
    });
    expect(result.success).toBe(false);
  });

  it("should fail without messages", () => {
    const result = z.safeParse(ChatCompletionRequest$outboundSchema, {
      model: "gpt-4o-mini",
    });
    expect(result.success).toBe(false);
  });
});

describe("ImageEditRequest schema", () => {
  it("should fail without prompt", () => {
    const result = z.safeParse(ImageEditRequest$outboundSchema, {
      model: "gpt-image-1",
      image: { fileName: "test.png", content: new Uint8Array([1, 2, 3]) },
    });
    expect(result.success).toBe(false);
  });

  it("should validate a valid request", () => {
    const result = z.safeParse(ImageEditRequest$outboundSchema, {
      model: "gpt-image-1",
      image: { fileName: "test.png", content: new Uint8Array([1, 2, 3]) },
      prompt: "Make it brighter",
    });
    expect(result.success).toBe(true);
  });
});

describe("GeminiGenerateContentRequest schema", () => {
  it("should validate a valid request", () => {
    const result = z.safeParse(GeminiGenerateContentRequest$outboundSchema, {
      contents: [{ parts: [{ text: "Hello" }] }],
    });
    expect(result.success).toBe(true);
  });

  it("should fail without contents", () => {
    const result = z.safeParse(GeminiGenerateContentRequest$outboundSchema, {});
    expect(result.success).toBe(false);
  });
});
