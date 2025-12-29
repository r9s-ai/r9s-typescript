# MediaType

MIME type of the image

## Example Usage

```typescript
import { MediaType } from "@r9s/sdk/models";

let value: MediaType = "image/webp";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"image/jpeg" | "image/png" | "image/gif" | "image/webp" | Unrecognized<string>
```