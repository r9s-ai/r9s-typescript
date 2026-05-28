# GeminiInlineResponseItem

Single response item in batch results

## Example Usage

```typescript
import { GeminiInlineResponseItem } from "@r9s/sdk/models";

let value: GeminiInlineResponseItem = {
  response: {
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
| `response`                                                                         | [models.GeminiGenerateContentResponse](../models/geminigeneratecontentresponse.md) | :heavy_minus_sign:                                                                 | Response from generateContent or streamGenerateContent                             |
| `error`                                                                            | [models.GeminiInlineResponseItemError](../models/geminiinlineresponseitemerror.md) | :heavy_minus_sign:                                                                 | Error if this request failed                                                       |