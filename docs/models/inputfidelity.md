# InputFidelity

Control how much effort the model will exert to match the style and features, especially facial features, of input images.
This parameter is only supported for gpt-image-1. Unsupported for gpt-image-1-mini.
Supports high and low. Defaults to low.


## Example Usage

```typescript
import { InputFidelity } from "@r9s/sdk/models";

let value: InputFidelity = "high";
```

## Values

```typescript
"high" | "low"
```