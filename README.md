# r9s

Official TypeScript SDK for r9s AI / Edge Functions.

## Install

```bash
npm i r9s
```

## Usage

```ts
import { R9sClient } from "r9s";

const client = new R9sClient({ apiKey: process.env.R9S_API_KEY });
```

## Development

```bash
npm run build
npm pack --dry-run
```
