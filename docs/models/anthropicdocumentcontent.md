# AnthropicDocumentContent

## Example Usage

```typescript
import { AnthropicDocumentContent } from "@r9s/sdk/models";

let value: AnthropicDocumentContent = {
  type: "document",
  source: {
    type: "url",
    url: "https://separate-juggernaut.info/",
  },
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `type`                                         | *"document"*                                   | :heavy_check_mark:                             | Document content type (PDFs, text files, etc.) |
| `source`                                       | *models.AnthropicDocumentSource*               | :heavy_check_mark:                             | N/A                                            |