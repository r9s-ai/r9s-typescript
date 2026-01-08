# EmbeddingRequest

## Example Usage

```typescript
import { EmbeddingRequest } from "@r9s/sdk/models";

let value: EmbeddingRequest = {
  model: "Explorer",
  input: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `model`                                              | *string*                                             | :heavy_check_mark:                                   | Model name                                           |
| `input`                                              | *models.EmbeddingRequestInput*                       | :heavy_check_mark:                                   | Input text                                           |
| `encodingFormat`                                     | [models.EncodingFormat](../models/encodingformat.md) | :heavy_minus_sign:                                   | N/A                                                  |
| `dimensions`                                         | *number*                                             | :heavy_minus_sign:                                   | Output dimensions                                    |
| `user`                                               | *string*                                             | :heavy_minus_sign:                                   | N/A                                                  |