# CreateEngineEmbeddingRequest

## Example Usage

```typescript
import { CreateEngineEmbeddingRequest } from "@r9s/sdk/models";

let value: CreateEngineEmbeddingRequest = {
  model: "qwen-plus",
  engineEmbeddingRequest: {
    input: "<value>",
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `model`                                                              | *string*                                                             | :heavy_check_mark:                                                   | Engine model name                                                    | qwen-plus                                                            |
| `engineEmbeddingRequest`                                             | [models.EngineEmbeddingRequest](../models/engineembeddingrequest.md) | :heavy_check_mark:                                                   | N/A                                                                  |                                                                      |