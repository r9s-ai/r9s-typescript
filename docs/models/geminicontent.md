# GeminiContent

Content object containing role and parts

## Example Usage

```typescript
import { GeminiContent } from "@r9s/sdk/models";

let value: GeminiContent = {
  parts: [],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `role`                                                     | [models.GeminiContentRole](../models/geminicontentrole.md) | :heavy_minus_sign:                                         | Role of the content creator                                |
| `parts`                                                    | *models.GeminiPart*[]                                      | :heavy_check_mark:                                         | Ordered parts that make up the content                     |