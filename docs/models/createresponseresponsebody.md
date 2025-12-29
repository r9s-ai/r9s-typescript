# CreateResponseResponseBody

Successful response

## Example Usage

```typescript
import { CreateResponseResponseBody } from "@r9s/sdk/models";

let value: CreateResponseResponseBody = {
  data: {
    type: "<value>",
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `data`                                                         | [models.ResponseStreamEvent](../models/responsestreamevent.md) | :heavy_check_mark:                                             | Response stream event (data payload for SSE stream)            |
| `id`                                                           | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `event`                                                        | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `retry`                                                        | *number*                                                       | :heavy_minus_sign:                                             | N/A                                                            |