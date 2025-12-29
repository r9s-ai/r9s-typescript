# CreateCompletionResponseBody

Successful response

## Example Usage

```typescript
import { CreateCompletionResponseBody } from "@r9s/sdk/models";

let value: CreateCompletionResponseBody = {
  data: {
    id: "<id>",
    object: "completion",
    created: 762095,
    model: "Volt",
    choices: [
      {
        text: "<value>",
        index: 687867,
      },
    ],
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `data`                                                             | [models.CompletionStreamEvent](../models/completionstreamevent.md) | :heavy_check_mark:                                                 | Completion stream event (data payload for SSE stream)              |
| `id`                                                               | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `event`                                                            | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `retry`                                                            | *number*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |