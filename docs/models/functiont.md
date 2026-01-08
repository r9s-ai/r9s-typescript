# FunctionT

## Example Usage

```typescript
import { FunctionT } from "@r9s/sdk/models";

let value: FunctionT = {
  name: "<value>",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `name`                                                                  | *string*                                                                | :heavy_check_mark:                                                      | Function name                                                           |
| `description`                                                           | *string*                                                                | :heavy_minus_sign:                                                      | Function description, helps model understand when to call this function |
| `parameters`                                                            | Record<string, *any*>                                                   | :heavy_minus_sign:                                                      | Function parameter definition in JSON Schema format                     |