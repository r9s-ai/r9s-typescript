# ChatCompletionStreamEvent

Chat completion chunk event (data payload for SSE stream)

## Example Usage

```typescript
import { ChatCompletionStreamEvent } from "@r9s/sdk/models";

let value: ChatCompletionStreamEvent = {
  id: "<id>",
  object: "chat.completion.chunk",
  created: 336381,
  model: "Land Cruiser",
  choices: [
    {
      index: 440092,
      delta: {},
    },
  ],
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `id`                                                                                      | *string*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `object`                                                                                  | *"chat.completion.chunk"*                                                                 | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `created`                                                                                 | *number*                                                                                  | :heavy_check_mark:                                                                        | Unix timestamp                                                                            |
| `model`                                                                                   | *string*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `choices`                                                                                 | [models.ChatCompletionStreamChoice](../models/chatcompletionstreamchoice.md)[]            | :heavy_check_mark:                                                                        | Array of completion choices. May be empty in the final chunk when only usage is returned. |
| `systemFingerprint`                                                                       | *string*                                                                                  | :heavy_minus_sign:                                                                        | N/A                                                                                       |
| `usage`                                                                                   | [models.Usage](../models/usage.md)                                                        | :heavy_minus_sign:                                                                        | N/A                                                                                       |