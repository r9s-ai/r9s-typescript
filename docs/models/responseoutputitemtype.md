# ResponseOutputItemType

Output type (message for final response, function_call for tool calls, reasoning for reasoning trace)

## Example Usage

```typescript
import { ResponseOutputItemType } from "@r9s/sdk/models";

let value: ResponseOutputItemType = "reasoning";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"message" | "function_call" | "reasoning" | Unrecognized<string>
```