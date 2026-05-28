# GeminiBatchRequestItem

Single request in a batch with optional metadata

## Example Usage

```typescript
import { GeminiBatchRequestItem } from "@r9s/sdk/models";

let value: GeminiBatchRequestItem = {
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
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [models.GeminiGenerateContentRequest](../models/geminigeneratecontentrequest.md) | :heavy_check_mark:                                                               | Request to generate content                                                      |
| `metadata`                                                                       | Record<string, *string*>                                                         | :heavy_minus_sign:                                                               | Optional metadata for tracking this request                                      |