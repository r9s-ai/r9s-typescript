# ModelListResponse

## Example Usage

```typescript
import { ModelListResponse } from "@r9s/sdk/models";

let value: ModelListResponse = {
  object: "list",
  data: [
    {
      id: "<id>",
      object: "model",
      created: 994327,
      ownedBy: "<value>",
    },
  ],
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `object`                             | *"list"*                             | :heavy_check_mark:                   | N/A                                  |
| `data`                               | [models.Model](../models/model.md)[] | :heavy_check_mark:                   | N/A                                  |