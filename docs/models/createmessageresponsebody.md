# CreateMessageResponseBody

Successful response

## Example Usage

```typescript
import { CreateMessageResponseBody } from "@r9s/sdk/models";

let value: CreateMessageResponseBody = {
  data: {
    type: "content_block_stop",
    index: 424715,
  },
};
```

## Fields

| Field                         | Type                          | Required                      | Description                   |
| ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- |
| `data`                        | *models.AnthropicStreamEvent* | :heavy_check_mark:            | N/A                           |
| `id`                          | *string*                      | :heavy_minus_sign:            | N/A                           |
| `event`                       | *string*                      | :heavy_minus_sign:            | N/A                           |
| `retry`                       | *number*                      | :heavy_minus_sign:            | N/A                           |