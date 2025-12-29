# AudioTranscriptionResponse

## Example Usage

```typescript
import { AudioTranscriptionResponse } from "@r9s/sdk/models";

let value: AudioTranscriptionResponse = {
  text: "<value>",
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `text`                                     | *string*                                   | :heavy_check_mark:                         | Transcribed text                           |
| `language`                                 | *string*                                   | :heavy_minus_sign:                         | Detected language                          |
| `duration`                                 | *number*                                   | :heavy_minus_sign:                         | Audio duration (seconds)                   |
| `words`                                    | [models.Words](../models/words.md)[]       | :heavy_minus_sign:                         | N/A                                        |
| `segments`                                 | [models.Segments](../models/segments.md)[] | :heavy_minus_sign:                         | N/A                                        |