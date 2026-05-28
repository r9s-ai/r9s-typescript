# GeminiEmbedContentRequest

Request to generate embeddings

## Example Usage

```typescript
import { GeminiEmbedContentRequest } from "@r9s/sdk/models";

let value: GeminiEmbedContentRequest = {
  content: {
    parts: [
      {
        fileData: {
          mimeType: "image/jpeg",
          fileUri: "gs://bucket/image.jpg",
        },
      },
    ],
  },
  outputDimensionality: 256,
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        | Example                                            |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `content`                                          | [models.GeminiContent](../models/geminicontent.md) | :heavy_check_mark:                                 | Content object containing role and parts           |                                                    |
| `taskType`                                         | [models.TaskType](../models/tasktype.md)           | :heavy_minus_sign:                                 | Task type for the embedding                        |                                                    |
| `title`                                            | *string*                                           | :heavy_minus_sign:                                 | Optional title (for RETRIEVAL_DOCUMENT task type)  |                                                    |
| `outputDimensionality`                             | *number*                                           | :heavy_minus_sign:                                 | Reduced dimension for output embedding             | 256                                                |