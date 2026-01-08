# Payer

Who is paying for this response

## Example Usage

```typescript
import { Payer } from "@r9s/sdk/models";

let value: Payer = "developer";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"developer" | "organization" | Unrecognized<string>
```