# StreamGenerateContentRequest

## Example Usage

```typescript
import { StreamGenerateContentRequest } from "@r9s/sdk/models";

let value: StreamGenerateContentRequest = {
  model: "models/gemini-3-flash",
  geminiGenerateContentRequest: {
    contents: [
      {
        parts: [
          {
            fileData: {
              mimeType: "image/jpeg",
              fileUri: "gs://bucket/image.jpg",
            },
          },
        ],
      },
    ],
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

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             | Example                                                                                                 |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `model`                                                                                                 | *string*                                                                                                | :heavy_check_mark:                                                                                      | The model resource name in format models/{model}.<br/>Examples: models/gemini-3-flash, models/gemini-3-pro<br/> | models/gemini-3-flash                                                                                   |
| `alt`                                                                                                   | [models.Alt](../models/alt.md)                                                                          | :heavy_minus_sign:                                                                                      | Data format for the response (use 'sse' for server-sent events)                                         |                                                                                                         |
| `geminiGenerateContentRequest`                                                                          | [models.GeminiGenerateContentRequest](../models/geminigeneratecontentrequest.md)                        | :heavy_check_mark:                                                                                      | N/A                                                                                                     |                                                                                                         |