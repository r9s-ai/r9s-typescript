# ResponseTool

Tool definition (flat format). Dedicated for /v1/responses endpoint.
Format: { "type": "function", "name": "...", "description": "...", "parameters": {...} }


## Example Usage

```typescript
import { ResponseTool } from "@r9s/sdk/models";

let value: ResponseTool = {
  type: "function",
  name: "<value>",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `type`                                                                  | [models.ResponseToolType](../models/responsetooltype.md)                | :heavy_check_mark:                                                      | Tool type, currently only supports function                             |
| `name`                                                                  | *string*                                                                | :heavy_check_mark:                                                      | Function name                                                           |
| `description`                                                           | *string*                                                                | :heavy_minus_sign:                                                      | Function description, helps model understand when to call this function |
| `parameters`                                                            | [models.ParametersT](../models/parameterst.md)                          | :heavy_minus_sign:                                                      | Function parameter definition in JSON Schema format                     |