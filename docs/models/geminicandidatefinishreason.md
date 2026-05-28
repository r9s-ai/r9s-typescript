# GeminiCandidateFinishReason

Reason for finishing generation

## Example Usage

```typescript
import { GeminiCandidateFinishReason } from "@r9s/sdk/models";

let value: GeminiCandidateFinishReason = "MAX_TOKENS";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"STOP" | "MAX_TOKENS" | "SAFETY" | "RECITATION" | "OTHER" | Unrecognized<string>
```