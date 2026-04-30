# GeminiSafetySetting

Safety setting for a specific harm category

## Example Usage

```typescript
import { GeminiSafetySetting } from "@r9s/sdk/models";

let value: GeminiSafetySetting = {
  category: "HARM_CATEGORY_HARASSMENT",
  threshold: "BLOCK_NONE",
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `category`                                 | [models.Category](../models/category.md)   | :heavy_check_mark:                         | Harm category to configure                 |
| `threshold`                                | [models.Threshold](../models/threshold.md) | :heavy_check_mark:                         | Threshold for blocking content             |