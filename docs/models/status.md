# Status

The status of the response

## Example Usage

```typescript
import { Status } from "@r9s/sdk/models";

let value: Status = "failed";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"in_progress" | "completed" | "incomplete" | "failed" | "cancelled" | Unrecognized<string>
```