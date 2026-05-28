# GeminiInlineRequestConfig

Inline requests configuration (max 20MB)

## Example Usage

```typescript
import { GeminiInlineRequestConfig } from "@r9s/sdk/models";

let value: GeminiInlineRequestConfig = {
  requests: [
    {
      request: {
        contents: [],
        generationConfig: {
          temperature: 0.7,
          topP: 0.95,
          topK: 40,
          candidateCount: 1,
          maxOutputTokens: 8192,
          stopSequences: [
            "\n\n",
          ],
          responseMimeType: "image/png",
        },
      },
    },
  ],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `requests`                                                             | [models.GeminiBatchRequestItem](../models/geminibatchrequestitem.md)[] | :heavy_check_mark:                                                     | Array of request items                                                 |