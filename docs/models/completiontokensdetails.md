# CompletionTokensDetails

Details about completion tokens

## Example Usage

```typescript
import { CompletionTokensDetails } from "@r9s/sdk/models";

let value: CompletionTokensDetails = {};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `reasoningTokens`                    | *number*                             | :heavy_minus_sign:                   | Number of reasoning tokens           |
| `audioTokens`                        | *number*                             | :heavy_minus_sign:                   | Number of audio tokens               |
| `acceptedPredictionTokens`           | *number*                             | :heavy_minus_sign:                   | Number of accepted prediction tokens |
| `rejectedPredictionTokens`           | *number*                             | :heavy_minus_sign:                   | Number of rejected prediction tokens |