# GeminiUsageMetadata

Token usage metadata

## Example Usage

```typescript
import { GeminiUsageMetadata } from "@r9s/sdk/models";

let value: GeminiUsageMetadata = {};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `promptTokenCount`                 | *number*                           | :heavy_minus_sign:                 | Number of tokens in the prompt     |
| `candidatesTokenCount`             | *number*                           | :heavy_minus_sign:                 | Total tokens across all candidates |
| `totalTokenCount`                  | *number*                           | :heavy_minus_sign:                 | Total token count                  |
| `cachedContentTokenCount`          | *number*                           | :heavy_minus_sign:                 | Cached content token count         |