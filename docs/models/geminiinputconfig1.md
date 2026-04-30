# GeminiInputConfig1

## Example Usage

```typescript
import { GeminiInputConfig1 } from "@r9s/sdk/models";

let value: GeminiInputConfig1 = {
  requests: {
    requests: [],
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `requests`                                                                 | [models.GeminiInlineRequestConfig](../models/geminiinlinerequestconfig.md) | :heavy_check_mark:                                                         | Inline requests configuration (max 20MB)                                   |