# BatchGenerateContentRequest

## Example Usage

```typescript
import { BatchGenerateContentRequest } from "@r9s/sdk/models";

let value: BatchGenerateContentRequest = {
  model: "models/gemini-3-flash",
  geminiBatchGenerateContentRequest: {
    batch: {
      inputConfig: {
        fileName: "files/abc123",
      },
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                | Example                                                                                    |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `model`                                                                                    | *string*                                                                                   | :heavy_check_mark:                                                                         | Default model for all requests in the batch                                                | models/gemini-3-flash                                                                      |
| `geminiBatchGenerateContentRequest`                                                        | [models.GeminiBatchGenerateContentRequest](../models/geminibatchgeneratecontentrequest.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |                                                                                            |