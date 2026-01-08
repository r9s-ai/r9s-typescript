# EmbeddingResponse

## Example Usage

```typescript
import { EmbeddingResponse } from "@r9s/sdk/models";

let value: EmbeddingResponse = {
  object: "list",
  data: [
    {
      object: "embedding",
      embedding: [
        1883.39,
        896.41,
      ],
      index: 613295,
    },
  ],
  model: "Golf",
  usage: {
    promptTokens: 58397,
    completionTokens: 32120,
    totalTokens: 382530,
  },
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `object`                                                 | *"list"*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `data`                                                   | [models.EmbeddingObject](../models/embeddingobject.md)[] | :heavy_check_mark:                                       | N/A                                                      |
| `model`                                                  | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `usage`                                                  | [models.Usage](../models/usage.md)                       | :heavy_check_mark:                                       | N/A                                                      |