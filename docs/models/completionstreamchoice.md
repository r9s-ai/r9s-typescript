# CompletionStreamChoice

## Example Usage

```typescript
import { CompletionStreamChoice } from "@r9s/sdk/models";

let value: CompletionStreamChoice = {
  text: "<value>",
  index: 603415,
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `text`                                                                                       | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `index`                                                                                      | *number*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `logprobs`                                                                                   | [models.CompletionStreamChoiceLogprobs](../models/completionstreamchoicelogprobs.md)         | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `finishReason`                                                                               | [models.CompletionStreamChoiceFinishReason](../models/completionstreamchoicefinishreason.md) | :heavy_minus_sign:                                                                           | N/A                                                                                          |