# GeminiBatchGenerateContentRequest

Request to create an async batch generation job

## Example Usage

```typescript
import { GeminiBatchGenerateContentRequest } from "@r9s/sdk/models";

let value: GeminiBatchGenerateContentRequest = {
  batch: {
    inputConfig: {
      fileName: "files/abc123",
    },
  },
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `batch`                            | [models.Batch](../models/batch.md) | :heavy_check_mark:                 | N/A                                |