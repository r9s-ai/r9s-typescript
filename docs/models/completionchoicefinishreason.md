# CompletionChoiceFinishReason

## Example Usage

```typescript
import { CompletionChoiceFinishReason } from "@r9s/sdk/models";

let value: CompletionChoiceFinishReason = "length";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"stop" | "length" | "content_filter" | Unrecognized<string>
```