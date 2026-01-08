# Truncation

The truncation strategy to use for the model response.
- auto: If input exceeds context window, truncate by dropping items from beginning
- disabled: Request fails with 400 error if input exceeds context window (default)


## Example Usage

```typescript
import { Truncation } from "@r9s/sdk/models";

let value: Truncation = "disabled";
```

## Values

```typescript
"auto" | "disabled"
```