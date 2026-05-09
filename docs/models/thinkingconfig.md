# ThinkingConfig

Configuration for Gemini thinking mode

## Example Usage

```typescript
import { ThinkingConfig } from "@r9s/sdk/models";

let value: ThinkingConfig = {};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `thinkingBudget`                                  | *number*                                          | :heavy_minus_sign:                                | Token budget for thinking steps                   |
| `includeThoughts`                                 | *boolean*                                         | :heavy_minus_sign:                                | Whether to include thinking steps in the response |