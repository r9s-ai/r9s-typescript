# ImageGenerationStreamEvent

## Example Usage

```typescript
import { ImageGenerationStreamEvent } from "@r9s/sdk/models";

let value: ImageGenerationStreamEvent = {
  id: "<id>",
  created: 199168,
  model: "Roadster",
  object: "image.generation.chunk",
  data: [
    {
      index: 315,
    },
  ],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `id`                                                                         | *string*                                                                     | :heavy_check_mark:                                                           | Unique generation request identifier                                         |
| `created`                                                                    | *number*                                                                     | :heavy_check_mark:                                                           | Unix timestamp                                                               |
| `model`                                                                      | *string*                                                                     | :heavy_check_mark:                                                           | Model used for generation                                                    |
| `object`                                                                     | [models.ObjectT](../models/objectt.md)                                       | :heavy_check_mark:                                                           | Object type identifier                                                       |
| `data`                                                                       | [models.ImageGenerationStreamData](../models/imagegenerationstreamdata.md)[] | :heavy_check_mark:                                                           | Array of image data chunks                                                   |
| `usage`                                                                      | [models.ImageUsage](../models/imageusage.md)                                 | :heavy_minus_sign:                                                           | Usage information for image generation (provider-dependent)                  |