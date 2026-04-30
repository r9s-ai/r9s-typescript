# EmbedContentRequest

## Example Usage

```typescript
import { EmbedContentRequest } from "@r9s/sdk/models";

let value: EmbedContentRequest = {
  model: "models/text-embedding-005",
  geminiEmbedContentRequest: {
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
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `model`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | The embedding model resource name.<br/>Examples: models/text-embedding-005, models/embedding-001<br/> | models/text-embedding-005                                                                     |
| `geminiEmbedContentRequest`                                                                   | [models.GeminiEmbedContentRequest](../models/geminiembedcontentrequest.md)                    | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |