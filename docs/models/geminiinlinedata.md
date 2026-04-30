# GeminiInlineData

Content data inline in the request (base64 encoded)

## Example Usage

```typescript
import { GeminiInlineData } from "@r9s/sdk/models";

let value: GeminiInlineData = {
  mimeType: "image/jpeg",
  data: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBD...",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `mimeType`                                                     | *string*                                                       | :heavy_check_mark:                                             | MIME type of the data (e.g., image/jpeg, image/png, audio/mp3) | image/jpeg                                                     |
| `data`                                                         | *string*                                                       | :heavy_check_mark:                                             | Base64 encoded data                                            | /9j/4AAQSkZJRgABAQAAAQABAAD/2wBD...                            |