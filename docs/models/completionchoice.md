# CompletionChoice

## Example Usage

```typescript
import { CompletionChoice } from "@r9s/sdk/models";

let value: CompletionChoice = {
  text: "<value>",
  index: 749310,
  finishReason: "length",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `text`                                                                           | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `index`                                                                          | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `logprobs`                                                                       | [models.CompletionChoiceLogprobs](../models/completionchoicelogprobs.md)         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `finishReason`                                                                   | [models.CompletionChoiceFinishReason](../models/completionchoicefinishreason.md) | :heavy_check_mark:                                                               | N/A                                                                              |