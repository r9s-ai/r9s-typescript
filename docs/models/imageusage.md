# ImageUsage

Usage information for image generation (provider-dependent)

## Example Usage

```typescript
import { ImageUsage } from "@r9s/sdk/models";

let value: ImageUsage = {};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `promptTokens`                                        | *number*                                              | :heavy_minus_sign:                                    | Token count for the prompt                            |
| `imageTokens`                                         | *number*                                              | :heavy_minus_sign:                                    | Token count for the generated image (GPT-Image-1/1.5) |
| `inputTextTokens`                                     | *number*                                              | :heavy_minus_sign:                                    | Input text token count (Qwen)                         |
| `outputImageTokens`                                   | *number*                                              | :heavy_minus_sign:                                    | Output image token count (Qwen)                       |
| `width`                                               | *number*                                              | :heavy_minus_sign:                                    | Generated image width (Qwen)                          |
| `height`                                              | *number*                                              | :heavy_minus_sign:                                    | Generated image height (Qwen)                         |
| `imageCount`                                          | *number*                                              | :heavy_minus_sign:                                    | Number of images generated (Qwen)                     |