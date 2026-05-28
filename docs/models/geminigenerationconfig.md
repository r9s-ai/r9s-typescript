# GeminiGenerationConfig

Configuration options for model generation

## Example Usage

```typescript
import { GeminiGenerationConfig } from "@r9s/sdk/models";

let value: GeminiGenerationConfig = {
  temperature: 0.7,
  topP: 0.95,
  topK: 40,
  candidateCount: 1,
  maxOutputTokens: 8192,
  stopSequences: [
    "\n\n",
  ],
  responseMimeType: "image/png",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `temperature`                                                            | *number*                                                                 | :heavy_minus_sign:                                                       | Controls randomness (0.0-2.0)                                            | 0.7                                                                      |
| `topP`                                                                   | *number*                                                                 | :heavy_minus_sign:                                                       | Nucleus sampling threshold                                               | 0.95                                                                     |
| `topK`                                                                   | *number*                                                                 | :heavy_minus_sign:                                                       | Top-k sampling parameter                                                 | 40                                                                       |
| `candidateCount`                                                         | *number*                                                                 | :heavy_minus_sign:                                                       | Number of response candidates to generate                                | 1                                                                        |
| `maxOutputTokens`                                                        | *number*                                                                 | :heavy_minus_sign:                                                       | Maximum number of tokens in the response                                 | 8192                                                                     |
| `stopSequences`                                                          | *string*[]                                                               | :heavy_minus_sign:                                                       | Sequences that will stop generation                                      | [<br/>"\n\n"<br/>]                                                       |
| `responseMimeType`                                                       | [models.ResponseMimeType](../models/responsemimetype.md)                 | :heavy_minus_sign:                                                       | Output format MIME type                                                  | image/png                                                                |
| `responseSchema`                                                         | [models.ResponseSchema](../models/responseschema.md)                     | :heavy_minus_sign:                                                       | Schema for structured output (when responseMimeType is application/json) |                                                                          |
| `seed`                                                                   | *number*                                                                 | :heavy_minus_sign:                                                       | Random seed for deterministic generation                                 |                                                                          |
| `presencePenalty`                                                        | *number*                                                                 | :heavy_minus_sign:                                                       | Penalizes tokens based on presence in the text so far                    |                                                                          |
| `frequencyPenalty`                                                       | *number*                                                                 | :heavy_minus_sign:                                                       | Penalizes tokens based on frequency in the text so far                   |                                                                          |
| `responseLogprobs`                                                       | *boolean*                                                                | :heavy_minus_sign:                                                       | Whether to return log probabilities of output tokens                     |                                                                          |
| `logprobs`                                                               | *number*                                                                 | :heavy_minus_sign:                                                       | Number of top log probabilities to return per token                      |                                                                          |
| `responseModalities`                                                     | [models.ResponseModalities](../models/responsemodalities.md)[]           | :heavy_minus_sign:                                                       | Output modalities (TEXT, IMAGE, AUDIO)                                   |                                                                          |
| `speechConfig`                                                           | [models.SpeechConfig](../models/speechconfig.md)                         | :heavy_minus_sign:                                                       | Configuration for speech output                                          |                                                                          |
| `thinkingConfig`                                                         | [models.ThinkingConfig](../models/thinkingconfig.md)                     | :heavy_minus_sign:                                                       | Configuration for Gemini thinking mode                                   |                                                                          |
| `imageConfig`                                                            | [models.ImageConfig](../models/imageconfig.md)                           | :heavy_minus_sign:                                                       | Configuration for image generation output                                |                                                                          |
| `mediaResolution`                                                        | [models.MediaResolution](../models/mediaresolution.md)                   | :heavy_minus_sign:                                                       | Resolution for media inputs                                              |                                                                          |
| `responseJsonSchema`                                                     | [models.ResponseJsonSchema](../models/responsejsonschema.md)             | :heavy_minus_sign:                                                       | JSON schema for structured output (alternative to responseSchema)        |                                                                          |