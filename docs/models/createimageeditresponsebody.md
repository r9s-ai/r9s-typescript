# CreateImageEditResponseBody

Successful response

## Example Usage

```typescript
import { CreateImageEditResponseBody } from "@r9s/sdk/models";

let value: CreateImageEditResponseBody = {
  data: {
    id: "<id>",
    created: 776174,
    model: "PT Cruiser",
    object: "image.edit.chunk",
    data: [
      {
        index: 167978,
      },
    ],
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `data`                                                           | [models.ImageEditStreamEvent](../models/imageeditstreamevent.md) | :heavy_check_mark:                                               | N/A                                                              |
| `id`                                                             | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `event`                                                          | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `retry`                                                          | *number*                                                         | :heavy_minus_sign:                                               | N/A                                                              |