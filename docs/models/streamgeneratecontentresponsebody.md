# StreamGenerateContentResponseBody

Successful streaming response (Server-Sent Events)

## Example Usage

```typescript
import { StreamGenerateContentResponseBody } from "@r9s/sdk/models";

let value: StreamGenerateContentResponseBody = {
  data: {
    candidates: [
      {
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
      },
    ],
    modelVersion: "gemini-2.0-flash-001",
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `data`                                                                             | [models.GeminiGenerateContentResponse](../models/geminigeneratecontentresponse.md) | :heavy_check_mark:                                                                 | Response from generateContent or streamGenerateContent                             |
| `id`                                                                               | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `event`                                                                            | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `retry`                                                                            | *number*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |