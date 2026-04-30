# GeminiPromptFeedback

Feedback about the prompt

## Example Usage

```typescript
import { GeminiPromptFeedback } from "@r9s/sdk/models";

let value: GeminiPromptFeedback = {};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `blockReason`                                                  | [models.BlockReason](../models/blockreason.md)                 | :heavy_minus_sign:                                             | Reason for blocking the prompt                                 |
| `safetyRatings`                                                | [models.GeminiSafetyRating](../models/geminisafetyrating.md)[] | :heavy_minus_sign:                                             | N/A                                                            |