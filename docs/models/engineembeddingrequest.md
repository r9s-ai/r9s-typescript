# EngineEmbeddingRequest

## Example Usage

```typescript
import { EngineEmbeddingRequest } from "@r9s/sdk/models";

let value: EngineEmbeddingRequest = {
  input: "<value>",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `input`                                                                                          | *models.EngineEmbeddingRequestInput*                                                             | :heavy_check_mark:                                                                               | Input text                                                                                       |
| `encodingFormat`                                                                                 | [models.EngineEmbeddingRequestEncodingFormat](../models/engineembeddingrequestencodingformat.md) | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `dimensions`                                                                                     | *number*                                                                                         | :heavy_minus_sign:                                                                               | Output dimensions                                                                                |
| `user`                                                                                           | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |