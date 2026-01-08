# ResponseUsage

## Example Usage

```typescript
import { ResponseUsage } from "@r9s/sdk/models";

let value: ResponseUsage = {
  inputTokens: 68368,
  outputTokens: 947423,
  totalTokens: 870550,
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `inputTokens`                                                  | *number*                                                       | :heavy_check_mark:                                             | Number of tokens in the input                                  |
| `inputTokensDetails`                                           | [models.InputTokensDetails](../models/inputtokensdetails.md)   | :heavy_minus_sign:                                             | Details about input tokens                                     |
| `outputTokens`                                                 | *number*                                                       | :heavy_check_mark:                                             | Number of tokens in the output                                 |
| `outputTokensDetails`                                          | [models.OutputTokensDetails](../models/outputtokensdetails.md) | :heavy_minus_sign:                                             | Details about output tokens                                    |
| `totalTokens`                                                  | *number*                                                       | :heavy_check_mark:                                             | Total number of tokens (input + output)                        |