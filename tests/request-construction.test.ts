import { describe, it, expect } from "vitest";
import { R9S } from "../src/index.js";
import { HTTPClient } from "../src/lib/http.js";

function makeMockClient(onRequest: (req: Request) => void): R9S {
  const fetcher = async (req: Request): Promise<Response> => {
    onRequest(req);
    return new Response(JSON.stringify({}), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  };
  return new R9S({
    apiKey: "test-key",
    httpClient: new HTTPClient({ fetcher }),
  });
}

describe("Chat streaming request", () => {
  it("sends Accept: text/event-stream when stream=true", async () => {
    let capturedReq: Request | null = null;
    const r9s = makeMockClient((req) => { capturedReq = req; });

    try {
      await r9s.chat.create({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: "hi" }],
        stream: true,
      });
    } catch {}

    expect(capturedReq).not.toBeNull();
    expect(capturedReq!.headers.get("accept")).toBe("text/event-stream");
  });

  it("sends Accept: application/json when stream=false", async () => {
    let capturedReq: Request | null = null;
    const r9s = makeMockClient((req) => { capturedReq = req; });

    try {
      await r9s.chat.create({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: "hi" }],
      });
    } catch {}

    expect(capturedReq).not.toBeNull();
    expect(capturedReq!.headers.get("accept")).toBe("application/json");
  });
});

describe("Chat request URL", () => {
  it("sends to /v1/chat/completions", async () => {
    let capturedReq: Request | null = null;
    const r9s = makeMockClient((req) => { capturedReq = req; });

    try {
      await r9s.chat.create({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: "hi" }],
      });
    } catch {}

    expect(capturedReq).not.toBeNull();
    expect(new URL(capturedReq!.url).pathname).toBe("/v1/chat/completions");
  });
});

describe("Gemini request", () => {
  it("sends x-goog-api-key header", async () => {
    let capturedReq: Request | null = null;
    const r9s = makeMockClient((req) => { capturedReq = req; });

    try {
      await r9s.gemini.generateContent(
        { googApiKey: "my-gemini-key" },
        "gemini-3-flash-preview",
        { contents: [{ parts: [{ text: "hi" }] }] },
      );
    } catch {}

    expect(capturedReq).not.toBeNull();
    expect(capturedReq!.headers.get("x-goog-api-key")).toBe("my-gemini-key");
  });

  it("sends to /v1beta path", async () => {
    let capturedReq: Request | null = null;
    const r9s = makeMockClient((req) => { capturedReq = req; });

    try {
      await r9s.gemini.generateContent(
        { googApiKey: "my-gemini-key" },
        "gemini-3-flash-preview",
        { contents: [{ parts: [{ text: "hi" }] }] },
      );
    } catch {}

    expect(capturedReq).not.toBeNull();
    expect(new URL(capturedReq!.url).pathname).toContain("/v1beta/");
    expect(new URL(capturedReq!.url).pathname).not.toContain("/v1/v1beta");
  });
});

describe("Image edit multipart request", () => {
  it("sends multipart/form-data with image and prompt fields", async () => {
    let capturedReq: Request | null = null;
    const r9s = makeMockClient((req) => { capturedReq = req; });

    try {
      await r9s.images.createEdit({
        model: "gpt-image-1",
        image: { fileName: "test.png", content: new Uint8Array([1, 2, 3]) },
        prompt: "Make it brighter",
      });
    } catch {}

    expect(capturedReq).not.toBeNull();
    expect(capturedReq!.headers.get("content-type")).toContain("multipart/form-data");

    const formData = await capturedReq!.formData();
    expect(formData.get("prompt")).toBe("Make it brighter");
    expect(formData.get("image")).not.toBeNull();
  });
});
