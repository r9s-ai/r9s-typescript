# AnthropicThinkingContent

## Example Usage

```typescript
import { AnthropicThinkingContent } from "@r9s/sdk/models";

let value: AnthropicThinkingContent = {
  type: "thinking",
  thinking: "<value>",
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `type`                                                    | *"thinking"*                                              | :heavy_check_mark:                                        | Extended thinking output content                          |
| `thinking`                                                | *string*                                                  | :heavy_check_mark:                                        | The model's thinking process/reasoning                    |
| `signature`                                               | *string*                                                  | :heavy_minus_sign:                                        | Cryptographic signature for thinking content verification |