# AnthropicMessageDelta

## Example Usage

```typescript
import { AnthropicMessageDelta } from "@r9s/sdk/models";

let value: AnthropicMessageDelta = {
  type: "message_delta",
  delta: {},
  usage: {},
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `type`                                                                       | *"message_delta"*                                                            | :heavy_check_mark:                                                           | N/A                                                                          |
| `delta`                                                                      | [models.AnthropicMessageDeltaDelta](../models/anthropicmessagedeltadelta.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `usage`                                                                      | [models.AnthropicMessageDeltaUsage](../models/anthropicmessagedeltausage.md) | :heavy_check_mark:                                                           | N/A                                                                          |