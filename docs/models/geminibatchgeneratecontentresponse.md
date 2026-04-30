# GeminiBatchGenerateContentResponse

Response from batch job creation (returns job metadata)

## Example Usage

```typescript
import { GeminiBatchGenerateContentResponse } from "@r9s/sdk/models";

let value: GeminiBatchGenerateContentResponse = {
  name: "batches/123456789",
  displayName: "my-batch-job",
  inputConfig: {
    requests: {
      requests: [],
    },
  },
  outputConfig: {
    inlinedResponses: [
      {
        response: {
          candidates: [
            {
              content: {
                parts: [
                  {
                    fileData: {
                      mimeType: "image/jpeg",
                      fileUri: "gs://bucket/image.jpg",
                    },
                  },
                ],
              },
            },
          ],
          modelVersion: "gemini-2.0-flash-001",
        },
      },
    ],
    fileName: "files/output_xyz789",
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `name`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | Batch job identifier                                                                          | batches/123456789                                                                             |
| `displayName`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | User-defined label for this batch                                                             | my-batch-job                                                                                  |
| `state`                                                                                       | [models.GeminiJobState](../models/geminijobstate.md)                                          | :heavy_minus_sign:                                                                            | State of the batch job                                                                        |                                                                                               |
| `createTime`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Job creation timestamp                                                                        |                                                                                               |
| `updateTime`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Last update timestamp                                                                         |                                                                                               |
| `inputConfig`                                                                                 | *models.GeminiInputConfig*                                                                    | :heavy_minus_sign:                                                                            | Input configuration - either inline requests or file reference                                |                                                                                               |
| `outputConfig`                                                                                | [models.GeminiOutputConfig](../models/geminioutputconfig.md)                                  | :heavy_minus_sign:                                                                            | Output configuration containing results                                                       |                                                                                               |
| `error`                                                                                       | [models.GeminiBatchError](../models/geminibatcherror.md)                                      | :heavy_minus_sign:                                                                            | Error information for failed batch job                                                        |                                                                                               |
| `batchStats`                                                                                  | [models.GeminiBatchStats](../models/geminibatchstats.md)                                      | :heavy_minus_sign:                                                                            | Statistics about batch processing                                                             |                                                                                               |