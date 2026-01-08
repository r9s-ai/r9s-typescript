# AnthropicTool

## Example Usage

```typescript
import { AnthropicTool } from "@r9s/sdk/models";

let value: AnthropicTool = {
  name: "<value>",
  inputSchema: {
    type: "object",
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `name`                                                           | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `description`                                                    | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `inputSchema`                                                    | [models.AnthropicInputSchema](../models/anthropicinputschema.md) | :heavy_check_mark:                                               | N/A                                                              |