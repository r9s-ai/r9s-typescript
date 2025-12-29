# CompletionRequest

## Example Usage

```typescript
import { CompletionRequest } from "@r9s/sdk/models";

let value: CompletionRequest = {
  model: "Alpine",
  prompt: "<value>",
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `model`                                           | *string*                                          | :heavy_check_mark:                                | Model name                                        |
| `prompt`                                          | *string*                                          | :heavy_check_mark:                                | Prompt text                                       |
| `bestOf`                                          | *number*                                          | :heavy_minus_sign:                                | Generate multiple results and return the best one |
| `echo`                                            | *boolean*                                         | :heavy_minus_sign:                                | Whether to echo the prompt                        |
| `frequencyPenalty`                                | *number*                                          | :heavy_minus_sign:                                | N/A                                               |
| `logitBias`                                       | Record<string, *number*>                          | :heavy_minus_sign:                                | N/A                                               |
| `maxTokens`                                       | *number*                                          | :heavy_minus_sign:                                | N/A                                               |
| `n`                                               | *number*                                          | :heavy_minus_sign:                                | N/A                                               |
| `presencePenalty`                                 | *number*                                          | :heavy_minus_sign:                                | N/A                                               |
| `seed`                                            | *number*                                          | :heavy_minus_sign:                                | N/A                                               |
| `stop`                                            | *models.CompletionRequestStop*                    | :heavy_minus_sign:                                | N/A                                               |
| `stream`                                          | *boolean*                                         | :heavy_minus_sign:                                | N/A                                               |
| `temperature`                                     | *number*                                          | :heavy_minus_sign:                                | N/A                                               |
| `topP`                                            | *number*                                          | :heavy_minus_sign:                                | N/A                                               |
| `user`                                            | *string*                                          | :heavy_minus_sign:                                | N/A                                               |