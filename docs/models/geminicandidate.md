# GeminiCandidate

A response candidate

## Example Usage

```typescript
import { GeminiCandidate } from "@r9s/sdk/models";

let value: GeminiCandidate = {
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
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `content`                                                                      | [models.GeminiContent](../models/geminicontent.md)                             | :heavy_minus_sign:                                                             | Content object containing role and parts                                       |
| `finishReason`                                                                 | [models.GeminiCandidateFinishReason](../models/geminicandidatefinishreason.md) | :heavy_minus_sign:                                                             | Reason for finishing generation                                                |
| `safetyRatings`                                                                | [models.GeminiSafetyRating](../models/geminisafetyrating.md)[]                 | :heavy_minus_sign:                                                             | N/A                                                                            |
| `citationMetadata`                                                             | [models.CitationMetadata](../models/citationmetadata.md)                       | :heavy_minus_sign:                                                             | Citation information                                                           |
| `tokenCount`                                                                   | *number*                                                                       | :heavy_minus_sign:                                                             | Token count for this candidate                                                 |