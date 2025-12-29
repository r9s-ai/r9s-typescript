# AnthropicImageContent

## Example Usage

```typescript
import { AnthropicImageContent } from "@r9s/sdk/models";

let value: AnthropicImageContent = {
  type: "image",
  source: {
    type: "base64",
    mediaType: "image/webp",
    data: "<value>",
  },
};
```

## Fields

| Field                         | Type                          | Required                      | Description                   |
| ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- |
| `type`                        | *"image"*                     | :heavy_check_mark:            | N/A                           |
| `source`                      | *models.AnthropicImageSource* | :heavy_check_mark:            | N/A                           |