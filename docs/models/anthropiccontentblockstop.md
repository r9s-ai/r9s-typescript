# AnthropicContentBlockStop

## Example Usage

```typescript
import { AnthropicContentBlockStop } from "@r9s/sdk/models";

let value: AnthropicContentBlockStop = {
  type: "content_block_stop",
  index: 510551,
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `type`                                                                                             | *"content_block_stop"*                                                                             | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `index`                                                                                            | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `contentBlock`                                                                                     | [models.AnthropicContentBlockStopContentBlock](../models/anthropiccontentblockstopcontentblock.md) | :heavy_minus_sign:                                                                                 | Optional content block metadata                                                                    |