# AudioTranscriptionRequestResponseFormat

Output format. Model support varies:
- whisper-1: Supports all formats (json, text, srt, verbose_json, vtt)
- gpt-4o-transcribe, gpt-4o-mini-transcribe: Only json and text


## Example Usage

```typescript
import { AudioTranscriptionRequestResponseFormat } from "@r9s/sdk/models";

let value: AudioTranscriptionRequestResponseFormat = "verbose_json";
```

## Values

```typescript
"json" | "text" | "srt" | "verbose_json" | "vtt"
```