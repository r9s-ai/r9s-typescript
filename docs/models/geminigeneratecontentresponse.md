# GeminiGenerateContentResponse

Response from generateContent or streamGenerateContent

## Example Usage

```typescript
import { GeminiGenerateContentResponse } from "@r9s/sdk/models";

let value: GeminiGenerateContentResponse = {
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
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `candidates`                                                     | [models.GeminiCandidate](../models/geminicandidate.md)[]         | :heavy_minus_sign:                                               | N/A                                                              |                                                                  |
| `promptFeedback`                                                 | [models.GeminiPromptFeedback](../models/geminipromptfeedback.md) | :heavy_minus_sign:                                               | Feedback about the prompt                                        |                                                                  |
| `usageMetadata`                                                  | [models.GeminiUsageMetadata](../models/geminiusagemetadata.md)   | :heavy_minus_sign:                                               | Token usage metadata                                             |                                                                  |
| `modelVersion`                                                   | *string*                                                         | :heavy_minus_sign:                                               | Model version used                                               | gemini-2.0-flash-001                                             |
| `responseId`                                                     | *string*                                                         | :heavy_minus_sign:                                               | Unique identifier for this response                              |                                                                  |
| `modelStatus`                                                    | [models.ModelStatus](../models/modelstatus.md)                   | :heavy_minus_sign:                                               | Current model operational status                                 |                                                                  |