# Threshold

Threshold for blocking content

## Example Usage

```typescript
import { Threshold } from "@r9s/sdk/models";

let value: Threshold = "BLOCK_NONE";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"BLOCK_NONE" | "BLOCK_ONLY_HIGH" | "BLOCK_MEDIUM_AND_ABOVE" | "BLOCK_LOW_AND_ABOVE" | Unrecognized<string>
```