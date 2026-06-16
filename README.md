# r9s

Official TypeScript SDK for r9s.ai.

The SDK provides a typed client for r9s-compatible AI APIs, including chat
completions, responses, messages, completions, embeddings, images, audio,
models, moderation, search, proxy, and Gemini-compatible endpoints.

## Install

```bash
npm i r9s
```

## Requirements

- Node.js 18 or later
- An r9s API key

## Quick Start

```ts
import { R9S } from "r9s";

const r9s = new R9S({
  apiKey: process.env.R9S_API_KEY ?? "",
});

const result = await r9s.chat.create({
  model: "gpt-4o-mini",
  messages: [{ role: "user", content: "Say hello in one sentence." }],
});

console.log(result.choices[0].message?.content);
```

## Configuration

```ts
import { R9S } from "r9s";

const r9s = new R9S({
  apiKey: process.env.R9S_API_KEY ?? "",
  serverURL: process.env.R9S_BASE_URL,
});
```

Use `serverURL` when you need to target a custom r9s-compatible endpoint.

## Streaming Chat

```ts
import { R9S } from "r9s";

const r9s = new R9S({
  apiKey: process.env.R9S_API_KEY ?? "",
});

const stream = await r9s.chat.create({
  model: "gpt-4o-mini",
  messages: [{ role: "user", content: "Write a short story." }],
  stream: true,
  streamOptions: { includeUsage: true },
});

for await (const chunk of stream) {
  const text = chunk.choices?.[0]?.delta?.content;
  if (text) {
    process.stdout.write(text);
  }
}
```

## Common APIs

```ts
await r9s.models.list();

await r9s.embeddings.create({
  model: "text-embedding-3-small",
  input: "hello world",
});

await r9s.responses.create({
  model: "gpt-4o-mini",
  input: "Summarize r9s in one sentence.",
});
```

## Development

```bash
npm ci
npm run build
npm pack --dry-run
```

Integration tests call live APIs and require valid credentials:

```bash
R9S_API_KEY=... R9S_BASE_URL=... npm test
```

## Release

The package is published to npm as [`r9s`](https://www.npmjs.com/package/r9s).

Release publishing is handled by GitHub Actions on `v*` tags using npm Trusted
Publishing.
