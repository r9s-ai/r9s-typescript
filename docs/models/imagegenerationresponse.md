# ImageGenerationResponse

## Example Usage

```typescript
import { ImageGenerationResponse } from "@r9s/sdk/models";

let value: ImageGenerationResponse = {
  created: 374698,
  data: [
    {},
  ],
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `created`                                                   | *number*                                                    | :heavy_check_mark:                                          | N/A                                                         |
| `data`                                                      | [models.ImageObject](../models/imageobject.md)[]            | :heavy_check_mark:                                          | N/A                                                         |
| `usage`                                                     | [models.ImageUsage](../models/imageusage.md)                | :heavy_minus_sign:                                          | Usage information for image generation (provider-dependent) |