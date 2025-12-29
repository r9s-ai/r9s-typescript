# AnthropicMessageStartMessage

## Example Usage

```typescript
import { AnthropicMessageStartMessage } from "@r9s/sdk/models";

let value: AnthropicMessageStartMessage = {
  id: "<id>",
  type: "message",
  role: "assistant",
  content: [
    {},
  ],
  model: "Jetta",
  stopReason: "<value>",
  stopSequence: "<value>",
  usage: {
    inputTokens: 361746,
    outputTokens: 941680,
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `id`                                                                               | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `type`                                                                             | *"message"*                                                                        | :heavy_check_mark:                                                                 | N/A                                                                                |
| `role`                                                                             | *"assistant"*                                                                      | :heavy_check_mark:                                                                 | N/A                                                                                |
| `content`                                                                          | [models.AnthropicMessageStartContent](../models/anthropicmessagestartcontent.md)[] | :heavy_check_mark:                                                                 | N/A                                                                                |
| `model`                                                                            | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `stopReason`                                                                       | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `stopSequence`                                                                     | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `usage`                                                                            | [models.AnthropicMessageStartUsage](../models/anthropicmessagestartusage.md)       | :heavy_check_mark:                                                                 | N/A                                                                                |