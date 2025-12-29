# AnthropicToolUseContent

## Example Usage

```typescript
import { AnthropicToolUseContent } from "@r9s/sdk/models";

let value: AnthropicToolUseContent = {
  type: "tool_use",
  id: "<id>",
  name: "<value>",
  input: {
    "key": "<value>",
    "key1": "<value>",
  },
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `type`                              | *"tool_use"*                        | :heavy_check_mark:                  | N/A                                 |
| `id`                                | *string*                            | :heavy_check_mark:                  | Unique identifier for this tool use |
| `name`                              | *string*                            | :heavy_check_mark:                  | Name of the tool being called       |
| `input`                             | Record<string, *any*>               | :heavy_check_mark:                  | Input parameters for the tool       |