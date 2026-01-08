# CompletionStreamEvent

Completion stream event (data payload for SSE stream)

## Example Usage

```typescript
import { CompletionStreamEvent } from "@r9s/sdk/models";

let value: CompletionStreamEvent = {
  id: "<id>",
  object: "completion",
  created: 442138,
  model: "Model 3",
  choices: [],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `id`                                                                   | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `object`                                                               | *"completion"*                                                         | :heavy_check_mark:                                                     | N/A                                                                    |
| `created`                                                              | *number*                                                               | :heavy_check_mark:                                                     | Unix timestamp                                                         |
| `model`                                                                | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `choices`                                                              | [models.CompletionStreamChoice](../models/completionstreamchoice.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |
| `systemFingerprint`                                                    | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `obfuscation`                                                          | *string*                                                               | :heavy_minus_sign:                                                     | Obfuscation token (server-specific field)                              |