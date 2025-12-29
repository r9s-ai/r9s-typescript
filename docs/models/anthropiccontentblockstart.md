# AnthropicContentBlockStart

## Example Usage

```typescript
import { AnthropicContentBlockStart } from "@r9s/sdk/models";

let value: AnthropicContentBlockStart = {
  type: "content_block_start",
  index: 200973,
  contentBlock: {
    type: "tool_use",
  },
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `type`                                           | *"content_block_start"*                          | :heavy_check_mark:                               | N/A                                              |
| `index`                                          | *number*                                         | :heavy_check_mark:                               | N/A                                              |
| `contentBlock`                                   | [models.ContentBlock](../models/contentblock.md) | :heavy_check_mark:                               | N/A                                              |