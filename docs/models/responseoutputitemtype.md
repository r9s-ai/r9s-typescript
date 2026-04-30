# ResponseOutputItemType

Output type (message for final response, function_call for tool calls, reasoning for reasoning trace)

## Example Usage

```typescript
import { ResponseOutputItemType } from "@r9s/sdk/models";

let value: ResponseOutputItemType = "reasoning";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"message" | "function_call" | "reasoning" | Unrecognized<string>
```