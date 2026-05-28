# GeminiFileData

URI-based data reference

## Example Usage

```typescript
import { GeminiFileData } from "@r9s/sdk/models";

let value: GeminiFileData = {
  mimeType: "image/jpeg",
  fileUri: "gs://bucket/image.jpg",
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               | Example                                   |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `mimeType`                                | *string*                                  | :heavy_check_mark:                        | MIME type of the file                     | image/jpeg                                |
| `fileUri`                                 | *string*                                  | :heavy_check_mark:                        | URI of the file (e.g., gs:// or https://) | gs://bucket/image.jpg                     |