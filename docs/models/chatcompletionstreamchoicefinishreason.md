# ChatCompletionStreamChoiceFinishReason

## Example Usage

```typescript
import { ChatCompletionStreamChoiceFinishReason } from "@r9s/sdk/models";

let value: ChatCompletionStreamChoiceFinishReason = "content_filter";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"stop" | "length" | "tool_calls" | "content_filter" | Unrecognized<string>
```