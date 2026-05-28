# ImageEditStreamEvent

## Example Usage

```typescript
import { ImageEditStreamEvent } from "@r9s/sdk/models";

let value: ImageEditStreamEvent = {
  id: "<id>",
  created: 19541,
  model: "Model S",
  object: "image.edit.chunk",
  data: [],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `id`                                                                         | *string*                                                                     | :heavy_check_mark:                                                           | Unique edit request identifier                                               |
| `created`                                                                    | *number*                                                                     | :heavy_check_mark:                                                           | Unix timestamp                                                               |
| `model`                                                                      | *string*                                                                     | :heavy_check_mark:                                                           | Model used for editing                                                       |
| `object`                                                                     | [models.ImageEditStreamEventObject](../models/imageeditstreameventobject.md) | :heavy_check_mark:                                                           | Object type identifier                                                       |
| `data`                                                                       | [models.ImageEditStreamData](../models/imageeditstreamdata.md)[]             | :heavy_check_mark:                                                           | Array of image data chunks                                                   |
| `usage`                                                                      | [models.ImageUsage](../models/imageusage.md)                                 | :heavy_minus_sign:                                                           | Usage information for image generation (provider-dependent)                  |