# GeminiGenerateContentRequest

Request to generate content

## Example Usage

```typescript
import { GeminiGenerateContentRequest } from "@r9s/sdk/models";

let value: GeminiGenerateContentRequest = {
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
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `contents`                                                             | [models.GeminiContent](../models/geminicontent.md)[]                   | :heavy_check_mark:                                                     | Content array (conversation history)                                   |
| `generationConfig`                                                     | [models.GeminiGenerationConfig](../models/geminigenerationconfig.md)   | :heavy_minus_sign:                                                     | Configuration options for model generation                             |
| `safetySettings`                                                       | [models.GeminiSafetySetting](../models/geminisafetysetting.md)[]       | :heavy_minus_sign:                                                     | N/A                                                                    |
| `systemInstruction`                                                    | [models.GeminiSystemInstruction](../models/geminisysteminstruction.md) | :heavy_minus_sign:                                                     | System instruction to guide model behavior                             |
| `tools`                                                                | [models.GeminiTool](../models/geminitool.md)[]                         | :heavy_minus_sign:                                                     | N/A                                                                    |
| `toolConfig`                                                           | [models.GeminiToolConfig](../models/geminitoolconfig.md)               | :heavy_minus_sign:                                                     | Tool configuration                                                     |
| `cachedContent`                                                        | *string*                                                               | :heavy_minus_sign:                                                     | Cached content reference                                               |