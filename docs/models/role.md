# Role

Message role

## Example Usage

```typescript
import { Role } from "@r9s/sdk/models";

let value: Role = "user";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"system" | "user" | "assistant" | "tool" | Unrecognized<string>
```