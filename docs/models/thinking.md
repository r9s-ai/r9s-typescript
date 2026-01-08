# Thinking

Configuration for extended thinking (Claude 3.7+). When enabled, the model will spend more time thinking before responding.


## Example Usage

```typescript
import { Thinking } from "@r9s/sdk/models";

let value: Thinking = {};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `type`                                                                         | [models.AnthropicMessageRequestType](../models/anthropicmessagerequesttype.md) | :heavy_minus_sign:                                                             | Whether to enable extended thinking                                            |
| `budgetTokens`                                                                 | *number*                                                                       | :heavy_minus_sign:                                                             | Maximum number of tokens to use for thinking (1000-10000)                      |