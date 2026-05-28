import { describe, it, expect } from "vitest";
import * as z from "zod/v4-mini";
import { ChatCompletionRequest$outboundSchema } from "../src/models/chatcompletionrequest.js";
import { ImageEditRequest$outboundSchema } from "../src/models/imageeditrequest.js";
import { GeminiGenerateContentRequest$outboundSchema } from "../src/models/geminigeneratecontentrequest.js";
import { ServerList } from "../src/lib/config.js";

function buildURL(base: string, path: string): string {
  const baseURL = new URL(base);
  baseURL.pathname = baseURL.pathname.replace(/\/+$/, "") + "/";
  const resolvedPath = path.replace(/^\/+/, "");
  return new URL(resolvedPath, baseURL).href;
}

describe("Base URL", () => {
  it("should not contain /v1 suffix", () => {
    expect(ServerList[0]).toBe("https://api.r9s.ai");
  });

  it("default base + chat path assembles correctly", () => {
    expect(buildURL("https://api.r9s.ai", "/v1/chat/completions"))
      .toBe("https://api.r9s.ai/v1/chat/completions");
  });

  it("base with trailing slash assembles correctly", () => {
    expect(buildURL("https://api.r9s.ai/", "/v1/chat/completions"))
      .toBe("https://api.r9s.ai/v1/chat/completions");
  });

  it("custom proxy base preserves path prefix", () => {
    expect(buildURL("https://proxy.example.com/r9s", "/v1/chat/completions"))
      .toBe("https://proxy.example.com/r9s/v1/chat/completions");
  });

  it("Gemini path should assemble correctly without double v1", () => {
    expect(buildURL("https://api.r9s.ai", "/v1beta/models/gemini-3-flash:generateContent"))
      .toBe("https://api.r9s.ai/v1beta/models/gemini-3-flash:generateContent");
  });

  it("Gemini path should not contain /v1/v1beta", () => {
    expect(buildURL("https://api.r9s.ai", "/v1beta/models/gemini-3-flash:generateContent"))
      .not.toContain("/v1/v1beta");
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
