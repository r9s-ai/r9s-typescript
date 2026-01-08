# ResponseOutputItemSchemasType

Content type (text for messages, output_text for responses, reasoning_text for reasoning traces, refusal for safety refusals)

## Example Usage

```typescript
import { ResponseOutputItemSchemasType } from "@r9s/sdk/models";

let value: ResponseOutputItemSchemasType = "reasoning_text";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"text" | "refusal" | "output_text" | "reasoning_text" | Unrecognized<string>
```