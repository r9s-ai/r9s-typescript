# ModerationResult

## Example Usage

```typescript
import { ModerationResult } from "@r9s/sdk/models";

let value: ModerationResult = {
  flagged: false,
  categories: {},
  categoryScores: {},
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `flagged`                                                                | *boolean*                                                                | :heavy_check_mark:                                                       | N/A                                                                      |
| `categories`                                                             | [models.ModerationCategories](../models/moderationcategories.md)         | :heavy_check_mark:                                                       | N/A                                                                      |
| `categoryScores`                                                         | [models.ModerationCategoryScores](../models/moderationcategoryscores.md) | :heavy_check_mark:                                                       | N/A                                                                      |