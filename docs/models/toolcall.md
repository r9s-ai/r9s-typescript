# ToolCall

## Example Usage

```typescript
import { ToolCall } from "@r9s/sdk/models";

let value: ToolCall = {
  id: "<id>",
  type: "<value>",
  function: {
    name: "<value>",
  },
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `id`                                             | *string*                                         | :heavy_check_mark:                               | N/A                                              |
| `type`                                           | *string*                                         | :heavy_check_mark:                               | N/A                                              |
| `function`                                       | [models.FunctionCall](../models/functioncall.md) | :heavy_check_mark:                               | N/A                                              |