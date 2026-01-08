# StopReason

## Example Usage

```typescript
import { StopReason } from "@r9s/sdk/models";

let value: StopReason = "refusal";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"end_turn" | "max_tokens" | "stop_sequence" | "tool_use" | "pause_turn" | "refusal" | Unrecognized<string>
```