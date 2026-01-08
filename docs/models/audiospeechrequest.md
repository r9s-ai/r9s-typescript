# AudioSpeechRequest

## Example Usage

```typescript
import { AudioSpeechRequest } from "@r9s/sdk/models";

let value: AudioSpeechRequest = {
  model: "Malibu",
  input: "<value>",
  voice: "fable",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `model`                                                                                  | *string*                                                                                 | :heavy_check_mark:                                                                       | TTS model name                                                                           |
| `input`                                                                                  | *string*                                                                                 | :heavy_check_mark:                                                                       | Text to convert to speech                                                                |
| `voice`                                                                                  | [models.AudioSpeechRequestVoice](../models/audiospeechrequestvoice.md)                   | :heavy_check_mark:                                                                       | Voice type                                                                               |
| `responseFormat`                                                                         | [models.AudioSpeechRequestResponseFormat](../models/audiospeechrequestresponseformat.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `speed`                                                                                  | *number*                                                                                 | :heavy_minus_sign:                                                                       | Speech speed                                                                             |