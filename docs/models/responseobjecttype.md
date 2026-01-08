# ResponseObjectType

## Example Usage

```typescript
import { ResponseObjectType } from "@r9s/sdk/models";

let value: ResponseObjectType = "text";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"text" | "json_object" | "json_schema" | Unrecognized<string>
```