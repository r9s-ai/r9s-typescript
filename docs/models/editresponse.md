# EditResponse

## Example Usage

```typescript
import { EditResponse } from "@r9s/sdk/models";

let value: EditResponse = {
  object: "edit",
  created: 439679,
  choices: [
    {
      text: "<value>",
      index: 307575,
    },
  ],
  usage: {
    promptTokens: 58397,
    completionTokens: 32120,
    totalTokens: 382530,
  },
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `object`                                       | *"edit"*                                       | :heavy_check_mark:                             | N/A                                            |
| `created`                                      | *number*                                       | :heavy_check_mark:                             | N/A                                            |
| `choices`                                      | [models.EditChoice](../models/editchoice.md)[] | :heavy_check_mark:                             | N/A                                            |
| `usage`                                        | [models.Usage](../models/usage.md)             | :heavy_check_mark:                             | N/A                                            |