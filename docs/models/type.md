# Type

## Example Usage

```typescript
import { Type } from "@r9s/sdk/models";

let value: Type = "text";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"text" | "image_url" | Unrecognized<string>
```