# ToolChoice

Specify specific tool selection

## Example Usage

```typescript
import { ToolChoice } from "@r9s/sdk/models";

let value: ToolChoice = {
  type: "function",
  function: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `type`                                                       | *"function"*                                                 | :heavy_check_mark:                                           | Tool type                                                    |
| `function`                                                   | [models.ToolChoiceFunction](../models/toolchoicefunction.md) | :heavy_check_mark:                                           | N/A                                                          |