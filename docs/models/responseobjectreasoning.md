# ResponseObjectReasoning

Reasoning configuration

## Example Usage

```typescript
import { ResponseObjectReasoning } from "@r9s/sdk/models";

let value: ResponseObjectReasoning = {};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `effort`                                                                                         | [models.ResponseObjectEffort](../models/responseobjecteffort.md)                                 | :heavy_minus_sign:                                                                               | Reasoning effort level (none/minimal for fast, low/medium for balanced, high/xhigh for thorough) |
| `summary`                                                                                        | *string*                                                                                         | :heavy_minus_sign:                                                                               | Summary of reasoning                                                                             |