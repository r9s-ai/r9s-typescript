# GeminiPart2

## Example Usage

```typescript
import { GeminiPart2 } from "@r9s/sdk/models";

let value: GeminiPart2 = {
  inlineData: {
    mimeType: "image/jpeg",
    data: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBD...",
  },
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `inlineData`                                             | [models.GeminiInlineData](../models/geminiinlinedata.md) | :heavy_check_mark:                                       | Content data inline in the request (base64 encoded)      |