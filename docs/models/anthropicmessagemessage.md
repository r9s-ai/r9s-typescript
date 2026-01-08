# AnthropicMessageMessage

## Example Usage

```typescript
import { AnthropicMessageMessage } from "@r9s/sdk/models";

let value: AnthropicMessageMessage = {
  role: "user",
  content: "<value>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `role`                                                                         | [models.AnthropicMessageMessageRole](../models/anthropicmessagemessagerole.md) | :heavy_check_mark:                                                             | Role of the message sender (user or assistant)                                 |
| `content`                                                                      | *models.AnthropicMessageMessageContent*                                        | :heavy_check_mark:                                                             | Message content - can be array of content blocks or string                     |