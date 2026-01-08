# ChatCompletionStreamChoice

## Example Usage

```typescript
import { ChatCompletionStreamChoice } from "@r9s/sdk/models";

let value: ChatCompletionStreamChoice = {
  index: 363261,
  delta: {},
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `index`                                                                                              | *number*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `delta`                                                                                              | [models.ChatCompletionStreamDelta](../models/chatcompletionstreamdelta.md)                           | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `finishReason`                                                                                       | [models.ChatCompletionStreamChoiceFinishReason](../models/chatcompletionstreamchoicefinishreason.md) | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `logprobs`                                                                                           | [models.ChatCompletionStreamChoiceLogprobs](../models/chatcompletionstreamchoicelogprobs.md)         | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |