# Usage

## Example Usage

```typescript
import { Usage } from "@r9s/sdk/models";

let value: Usage = {
  promptTokens: 979796,
  completionTokens: 787440,
  totalTokens: 860864,
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `promptTokens`                                                         | *number*                                                               | :heavy_check_mark:                                                     | Number of tokens in the prompt (input)                                 |
| `promptTokensDetails`                                                  | [models.PromptTokensDetails](../models/prompttokensdetails.md)         | :heavy_minus_sign:                                                     | Details about prompt tokens                                            |
| `completionTokens`                                                     | *number*                                                               | :heavy_check_mark:                                                     | Number of tokens in the completion (output)                            |
| `completionTokensDetails`                                              | [models.CompletionTokensDetails](../models/completiontokensdetails.md) | :heavy_minus_sign:                                                     | Details about completion tokens                                        |
| `totalTokens`                                                          | *number*                                                               | :heavy_check_mark:                                                     | Total number of tokens (prompt + completion)                           |