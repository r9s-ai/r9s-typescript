# FinishReason

## Example Usage

```typescript
import { FinishReason } from "@r9s/sdk/models";

let value: FinishReason = "tool_calls";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"stop" | "length" | "tool_calls" | "content_filter" | Unrecognized<string>
```