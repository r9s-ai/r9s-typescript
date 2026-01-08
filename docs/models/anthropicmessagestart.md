# AnthropicMessageStart

## Example Usage

```typescript
import { AnthropicMessageStart } from "@r9s/sdk/models";

let value: AnthropicMessageStart = {
  type: "message_start",
  message: {
    id: "<id>",
    type: "message",
    role: "assistant",
    content: [
      {},
    ],
    model: "Element",
    stopReason: "<value>",
    stopSequence: null,
    usage: {
      inputTokens: 361746,
      outputTokens: 941680,
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `type`                                                                           | *"message_start"*                                                                | :heavy_check_mark:                                                               | N/A                                                                              |
| `message`                                                                        | [models.AnthropicMessageStartMessage](../models/anthropicmessagestartmessage.md) | :heavy_check_mark:                                                               | N/A                                                                              |