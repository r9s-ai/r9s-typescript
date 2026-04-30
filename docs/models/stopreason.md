# StopReason

## Example Usage

```typescript
import { StopReason } from "@r9s/sdk/models";

let value: StopReason = "refusal";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"end_turn" | "max_tokens" | "stop_sequence" | "tool_use" | "pause_turn" | "refusal" | Unrecognized<string>
```