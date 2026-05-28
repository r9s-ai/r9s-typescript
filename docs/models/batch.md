# Batch

## Example Usage

```typescript
import { Batch } from "@r9s/sdk/models";

let value: Batch = {
  inputConfig: {
    fileName: "files/abc123",
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `displayName`                                                  | *string*                                                       | :heavy_minus_sign:                                             | Human-readable name for this batch job                         |
| `inputConfig`                                                  | *models.GeminiInputConfig*                                     | :heavy_check_mark:                                             | Input configuration - either inline requests or file reference |