# ResponseRequestFormat

An object specifying the format that the model must output. Setting to { "type": "json_schema", "name": "...", "schema": {...} } enables Structured Outputs which ensures the model will match your supplied JSON schema.
Setting to { "type": "json_object" } enables JSON mode, which ensures the model generates valid JSON.


## Example Usage

```typescript
import { ResponseRequestFormat } from "@r9s/sdk/models";

let value: ResponseRequestFormat = {};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `type`                                                         | [models.ResponseRequestType](../models/responserequesttype.md) | :heavy_minus_sign:                                             | The type of response format                                    |
| `name`                                                         | *string*                                                       | :heavy_minus_sign:                                             | Name for the schema (required when type is json_schema)        |
| `schema`                                                       | Record<string, *any*>                                          | :heavy_minus_sign:                                             | JSON schema definition for structured outputs                  |
| `strict`                                                       | *boolean*                                                      | :heavy_minus_sign:                                             | Whether to enforce strict schema matching                      |