# AudioTranslationResponse

## Example Usage

```typescript
import { AudioTranslationResponse } from "@r9s/sdk/models";

let value: AudioTranslationResponse = {
  text: "<value>",
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `text`                   | *string*                 | :heavy_check_mark:       | Translated English text  |
| `language`               | *string*                 | :heavy_minus_sign:       | Source language          |
| `duration`               | *number*                 | :heavy_minus_sign:       | Audio duration (seconds) |