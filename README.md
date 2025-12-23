# @r9s-ai/typescript

Official TypeScript SDK for r9s AI / Edge Functions.

## Install

```bash
npm i @r9s-ai/typescript
```

## Usage

```ts
import { R9sClient } from "@r9s-ai/typescript";

const client = new R9sClient({ apiKey: process.env.R9S_API_KEY });
```

## Development

```bash
npm run build
npm pack --dry-run
```
