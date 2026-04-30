# GeminiEmbedContentResponse

Response from embedContent

## Example Usage

```typescript
import { GeminiEmbedContentResponse } from "@r9s/sdk/models";

let value: GeminiEmbedContentResponse = {
  embedding: {
    values: [
      9633.59,
      5247.61,
      1463.46,
    ],
  },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `embedding`                                            | [models.GeminiEmbedding](../models/geminiembedding.md) | :heavy_check_mark:                                     | Embedding vector                                       |