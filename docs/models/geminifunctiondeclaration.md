# GeminiFunctionDeclaration

Function declaration for tool use

## Example Usage

```typescript
import { GeminiFunctionDeclaration } from "@r9s/sdk/models";

let value: GeminiFunctionDeclaration = {
  name: "<value>",
  description:
    "grizzled dissemble giant scarcely gee brr finally frank furiously",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `name`                                                                                         | *string*                                                                                       | :heavy_check_mark:                                                                             | Function name                                                                                  |
| `description`                                                                                  | *string*                                                                                       | :heavy_check_mark:                                                                             | Function description                                                                           |
| `parameters`                                                                                   | [models.GeminiFunctionDeclarationParameters](../models/geminifunctiondeclarationparameters.md) | :heavy_minus_sign:                                                                             | OpenAPI 3.0 schema object for parameters                                                       |