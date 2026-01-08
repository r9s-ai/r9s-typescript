# CreateChatCompletionResponseBody

Successful response

## Example Usage

```typescript
import { CreateChatCompletionResponseBody } from "@r9s/sdk/models";

let value: CreateChatCompletionResponseBody = {
  data: {
    id: "<id>",
    object: "chat.completion.chunk",
    created: 939288,
    model: "Grand Caravan",
    choices: [
      {
        index: 440092,
        delta: {},
      },
    ],
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `data`                                                                     | [models.ChatCompletionStreamEvent](../models/chatcompletionstreamevent.md) | :heavy_check_mark:                                                         | Chat completion chunk event (data payload for SSE stream)                  |
| `id`                                                                       | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `event`                                                                    | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `retry`                                                                    | *number*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |