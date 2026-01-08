# ChatCompletionResponse

## Example Usage

```typescript
import { ChatCompletionResponse } from "@r9s/sdk/models";

let value: ChatCompletionResponse = {
  id: "<id>",
  object: "chat.completion",
  created: 213082,
  model: "Altima",
  choices: [
    {
      index: 120622,
      message: {
        role: "system",
      },
      finishReason: "content_filter",
    },
  ],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `id`                                                               | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `object`                                                           | *"chat.completion"*                                                | :heavy_check_mark:                                                 | N/A                                                                |
| `created`                                                          | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `model`                                                            | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `choices`                                                          | [models.ChatCompletionChoice](../models/chatcompletionchoice.md)[] | :heavy_check_mark:                                                 | N/A                                                                |
| `usage`                                                            | [models.Usage](../models/usage.md)                                 | :heavy_minus_sign:                                                 | N/A                                                                |
| `systemFingerprint`                                                | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |