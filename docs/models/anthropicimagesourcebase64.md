# AnthropicImageSourceBase64

## Example Usage

```typescript
import { AnthropicImageSourceBase64 } from "@r9s/sdk/models";

let value: AnthropicImageSourceBase64 = {
  type: "base64",
  mediaType: "image/webp",
  data: "<value>",
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `type`                                     | *"base64"*                                 | :heavy_check_mark:                         | N/A                                        |
| `mediaType`                                | [models.MediaType](../models/mediatype.md) | :heavy_check_mark:                         | MIME type of the image                     |
| `data`                                     | *string*                                   | :heavy_check_mark:                         | Base64-encoded image data                  |