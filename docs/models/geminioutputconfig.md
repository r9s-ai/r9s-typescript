# GeminiOutputConfig

Output configuration containing results

## Example Usage

```typescript
import { GeminiOutputConfig } from "@r9s/sdk/models";

let value: GeminiOutputConfig = {
  inlinedResponses: [
    {
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
    },
  ],
  fileName: "files/output_xyz789",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `inlinedResponses`                                                         | [models.GeminiInlineResponseItem](../models/geminiinlineresponseitem.md)[] | :heavy_minus_sign:                                                         | Inline response results (for inline input)                                 |                                                                            |
| `fileName`                                                                 | *string*                                                                   | :heavy_minus_sign:                                                         | Output JSONL file name (for file input)                                    | files/output_xyz789                                                        |