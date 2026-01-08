# AnthropicDocumentSourceBase64

## Example Usage

```typescript
import { AnthropicDocumentSourceBase64 } from "@r9s/sdk/models";

let value: AnthropicDocumentSourceBase64 = {
  type: "base64",
  mediaType: "text/plain",
  data: "<value>",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `type`                                                                                               | *"base64"*                                                                                           | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `mediaType`                                                                                          | [models.AnthropicDocumentSourceBase64MediaType](../models/anthropicdocumentsourcebase64mediatype.md) | :heavy_check_mark:                                                                                   | Document MIME type                                                                                   |
| `data`                                                                                               | *string*                                                                                             | :heavy_check_mark:                                                                                   | Base64-encoded document data                                                                         |