# CreateImageGenerationResponseBody

Successful response

## Example Usage

```typescript
import { CreateImageGenerationResponseBody } from "@r9s/sdk/models";

let value: CreateImageGenerationResponseBody = {
  data: {
    id: "<id>",
    created: 925405,
    model: "Element",
    object: "image.generation.chunk",
    data: [
      {
        index: 315,
      },
    ],
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `data`                                                                       | [models.ImageGenerationStreamEvent](../models/imagegenerationstreamevent.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `id`                                                                         | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `event`                                                                      | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `retry`                                                                      | *number*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |