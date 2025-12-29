# Detail

## Example Usage

```typescript
import { Detail } from "@r9s/sdk/models";

let value: Detail = "low";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"auto" | "low" | "high" | Unrecognized<string>
```