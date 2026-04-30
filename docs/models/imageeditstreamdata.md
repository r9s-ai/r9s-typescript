# ImageEditStreamData

## Example Usage

```typescript
import { ImageEditStreamData } from "@r9s/sdk/models";

let value: ImageEditStreamData = {
  index: 109625,
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `index`                               | *number*                              | :heavy_check_mark:                    | Image index in the batch              |
| `b64Json`                             | *string*                              | :heavy_minus_sign:                    | Base64-encoded partial or final image |
| `url`                                 | *string*                              | :heavy_minus_sign:                    | Image URL (alternative to b64_json)   |
| `progress`                            | *number*                              | :heavy_minus_sign:                    | Generation progress (0.0-1.0)         |
| `isFinal`                             | *boolean*                             | :heavy_minus_sign:                    | Whether this is the final image       |
| `revisedPrompt`                       | *string*                              | :heavy_minus_sign:                    | Revised prompt (if applicable)        |