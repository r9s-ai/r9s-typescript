# ResponseStreamEvent

Response stream event (data payload for SSE stream)

## Example Usage

```typescript
import { ResponseStreamEvent } from "@r9s/sdk/models";

let value: ResponseStreamEvent = {
  type: "<value>",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                   | *string*                                                                                                 | :heavy_check_mark:                                                                                       | Event type (e.g., response.created, response.output_item.added, response.text.delta, response.completed) |
| `sequenceNumber`                                                                                         | *number*                                                                                                 | :heavy_minus_sign:                                                                                       | Sequence number of the event                                                                             |
| `response`                                                                                               | [models.ResponseObject](../models/responseobject.md)                                                     | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `outputItem`                                                                                             | [models.ResponseOutputItem](../models/responseoutputitem.md)                                             | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `outputItemIndex`                                                                                        | *number*                                                                                                 | :heavy_minus_sign:                                                                                       | Index of the output item                                                                                 |
| `contentIndex`                                                                                           | *number*                                                                                                 | :heavy_minus_sign:                                                                                       | Index of the content block                                                                               |
| `delta`                                                                                                  | *models.Delta*                                                                                           | :heavy_minus_sign:                                                                                       | Delta updates (present in response.text.delta events), can be a string or object                         |