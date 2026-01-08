# AnthropicToolResultContent

## Example Usage

```typescript
import { AnthropicToolResultContent } from "@r9s/sdk/models";

let value: AnthropicToolResultContent = {
  type: "tool_result",
  toolUseId: "<id>",
  content: "<value>",
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `type`                                        | *"tool_result"*                               | :heavy_check_mark:                            | N/A                                           |
| `toolUseId`                                   | *string*                                      | :heavy_check_mark:                            | ID of the tool use this result corresponds to |
| `content`                                     | *string*                                      | :heavy_check_mark:                            | Result of the tool execution                  |