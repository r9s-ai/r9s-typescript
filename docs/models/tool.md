# Tool

Tool definition (nested format). Used for /v1/chat/completions and other endpoints.
Format: { "type": "function", "function": { "name": "...", "description": "...", "parameters": {...} } }


## Example Usage

```typescript
import { Tool } from "@r9s/sdk/models";

let value: Tool = {
  type: "function",
  function: {
    name: "<value>",
  },
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `type`                                      | [models.ToolType](../models/tooltype.md)    | :heavy_check_mark:                          | Tool type, currently only supports function |
| `function`                                  | [models.FunctionT](../models/functiont.md)  | :heavy_check_mark:                          | N/A                                         |