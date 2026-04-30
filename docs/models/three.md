# Three

## Example Usage

```typescript
import { Three } from "@r9s/sdk/models";

let value: Three = {
  fileData: {
    mimeType: "image/jpeg",
    fileUri: "gs://bucket/image.jpg",
  },
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `fileData`                                           | [models.GeminiFileData](../models/geminifiledata.md) | :heavy_check_mark:                                   | URI-based data reference                             |