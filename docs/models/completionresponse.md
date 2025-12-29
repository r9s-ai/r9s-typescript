# CompletionResponse

## Example Usage

```typescript
import { CompletionResponse } from "@r9s/sdk/models";

let value: CompletionResponse = {
  id: "<id>",
  object: "completion",
  created: 828261,
  model: "V90",
  choices: [],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `id`                                                       | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `object`                                                   | *"completion"*                                             | :heavy_check_mark:                                         | N/A                                                        |
| `created`                                                  | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `model`                                                    | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `choices`                                                  | [models.CompletionChoice](../models/completionchoice.md)[] | :heavy_check_mark:                                         | N/A                                                        |
| `usage`                                                    | [models.Usage](../models/usage.md)                         | :heavy_minus_sign:                                         | N/A                                                        |