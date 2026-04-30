# GeminiSafetyRating

Safety rating for a piece of content

## Example Usage

```typescript
import { GeminiSafetyRating } from "@r9s/sdk/models";

let value: GeminiSafetyRating = {};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `category`                                     | *string*                                       | :heavy_minus_sign:                             | Harm category                                  |
| `probability`                                  | [models.Probability](../models/probability.md) | :heavy_minus_sign:                             | Probability of harm                            |
| `blocked`                                      | *boolean*                                      | :heavy_minus_sign:                             | Whether content was blocked                    |