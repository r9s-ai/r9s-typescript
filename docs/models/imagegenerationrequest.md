# ImageGenerationRequest

## Example Usage

```typescript
import { ImageGenerationRequest } from "@r9s/sdk/models";

let value: ImageGenerationRequest = {
  prompt: "<value>",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `prompt`                                                                                         | *string*                                                                                         | :heavy_check_mark:                                                                               | Image description prompt                                                                         |
| `model`                                                                                          | *string*                                                                                         | :heavy_minus_sign:                                                                               | Model name                                                                                       |
| `n`                                                                                              | *number*                                                                                         | :heavy_minus_sign:                                                                               | Number of images to generate                                                                     |
| `quality`                                                                                        | [models.Quality](../models/quality.md)                                                           | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `responseFormat`                                                                                 | [models.ImageGenerationRequestResponseFormat](../models/imagegenerationrequestresponseformat.md) | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `size`                                                                                           | [models.Size](../models/size.md)                                                                 | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `style`                                                                                          | [models.Style](../models/style.md)                                                               | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `user`                                                                                           | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |