# Audio

## Overview

### Available Operations

* [speech](#speech) - Text to speech
* [transcribe](#transcribe) - Speech to text
* [translate](#translate) - Speech translation

## speech

Convert text to speech

### Example Usage: detailed

<!-- UsageSnippet language="typescript" operationID="createAudioSpeech" method="post" path="/v1/audio/speech" example="detailed" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.audio.speech({
    model: "speech-2.6-hd",
    input: "The quick brown fox jumps over the lazy dog.",
    voice: "nova",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { R9SCore } from "@r9s/sdk/core.js";
import { audioSpeech } from "@r9s/sdk/funcs/audioSpeech.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await audioSpeech(r9S, {
    model: "speech-2.6-hd",
    input: "The quick brown fox jumps over the lazy dog.",
    voice: "nova",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("audioSpeech failed:", res.error);
  }
}

run();
```
### Example Usage: fast_briefing

<!-- UsageSnippet language="typescript" operationID="createAudioSpeech" method="post" path="/v1/audio/speech" example="fast_briefing" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.audio.speech({
    model: "speech-2.6-turbo",
    input: "Daily update: traffic is clear, weather is sunny, meetings start at 10 AM.",
    voice: "echo",
    responseFormat: "opus",
    speed: 1.2,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { R9SCore } from "@r9s/sdk/core.js";
import { audioSpeech } from "@r9s/sdk/funcs/audioSpeech.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await audioSpeech(r9S, {
    model: "speech-2.6-turbo",
    input: "Daily update: traffic is clear, weather is sunny, meetings start at 10 AM.",
    voice: "echo",
    responseFormat: "opus",
    speed: 1.2,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("audioSpeech failed:", res.error);
  }
}

run();
```
### Example Usage: simple

<!-- UsageSnippet language="typescript" operationID="createAudioSpeech" method="post" path="/v1/audio/speech" example="simple" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.audio.speech({
    model: "speech-2.6-turbo",
    input: "Hello, welcome to our service!",
    voice: "alloy",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { R9SCore } from "@r9s/sdk/core.js";
import { audioSpeech } from "@r9s/sdk/funcs/audioSpeech.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await audioSpeech(r9S, {
    model: "speech-2.6-turbo",
    input: "Hello, welcome to our service!",
    voice: "alloy",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("audioSpeech failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.AudioSpeechRequest](../../models/audiospeechrequest.md)                                                                                                                | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.CreateAudioSpeechResponse](../../models/createaudiospeechresponse.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.BadRequestError          | 400                             | application/json                |
| errors.AuthenticationError      | 401                             | application/json                |
| errors.PermissionDeniedError    | 403                             | application/json                |
| errors.UnprocessableEntityError | 422                             | application/json                |
| errors.RateLimitError           | 429                             | application/json                |
| errors.InternalServerError      | 500                             | application/json                |
| errors.ServiceUnavailableError  | 503                             | application/json                |
| errors.R9SDefaultError          | 4XX, 5XX                        | \*/\*                           |

## transcribe

Transcribe speech to text. Supports multiple models and output formats.

**Supported models:**
- whisper-1: Supports json, text, srt, verbose_json, vtt formats
- gpt-4o-transcribe, gpt-4o-mini-transcribe: Only support json and text formats

**Note:** timestamp_granularities parameter only works when response_format is set to verbose_json


### Example Usage: simple

<!-- UsageSnippet language="typescript" operationID="createAudioTranscription" method="post" path="/v1/audio/transcriptions" example="simple" -->
```typescript
import { R9S } from "@r9s/sdk";
import { openAsBlob } from "node:fs";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.audio.transcribe({
    file: await openAsBlob("example.file"),
    model: "whisper-1",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { R9SCore } from "@r9s/sdk/core.js";
import { audioTranscribe } from "@r9s/sdk/funcs/audioTranscribe.js";
import { openAsBlob } from "node:fs";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await audioTranscribe(r9S, {
    file: await openAsBlob("example.file"),
    model: "whisper-1",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("audioTranscribe failed:", res.error);
  }
}

run();
```
### Example Usage: timestamps

<!-- UsageSnippet language="typescript" operationID="createAudioTranscription" method="post" path="/v1/audio/transcriptions" example="timestamps" -->
```typescript
import { R9S } from "@r9s/sdk";
import { openAsBlob } from "node:fs";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.audio.transcribe({
    file: await openAsBlob("example.file"),
    model: "gpt-4o-transcribe",
    language: "en",
    responseFormat: "verbose_json",
    timestampGranularities: [
      "word",
    ],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { R9SCore } from "@r9s/sdk/core.js";
import { audioTranscribe } from "@r9s/sdk/funcs/audioTranscribe.js";
import { openAsBlob } from "node:fs";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await audioTranscribe(r9S, {
    file: await openAsBlob("example.file"),
    model: "gpt-4o-transcribe",
    language: "en",
    responseFormat: "verbose_json",
    timestampGranularities: [
      "word",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("audioTranscribe failed:", res.error);
  }
}

run();
```
### Example Usage: with_options

<!-- UsageSnippet language="typescript" operationID="createAudioTranscription" method="post" path="/v1/audio/transcriptions" example="with_options" -->
```typescript
import { R9S } from "@r9s/sdk";
import { openAsBlob } from "node:fs";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.audio.transcribe({
    file: await openAsBlob("example.file"),
    model: "whisper-1",
    language: "en",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { R9SCore } from "@r9s/sdk/core.js";
import { audioTranscribe } from "@r9s/sdk/funcs/audioTranscribe.js";
import { openAsBlob } from "node:fs";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await audioTranscribe(r9S, {
    file: await openAsBlob("example.file"),
    model: "whisper-1",
    language: "en",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("audioTranscribe failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.AudioTranscriptionRequest](../../models/audiotranscriptionrequest.md)                                                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.CreateAudioTranscriptionResponse](../../models/createaudiotranscriptionresponse.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.BadRequestError          | 400                             | application/json                |
| errors.AuthenticationError      | 401                             | application/json                |
| errors.PermissionDeniedError    | 403                             | application/json                |
| errors.UnprocessableEntityError | 422                             | application/json                |
| errors.RateLimitError           | 429                             | application/json                |
| errors.InternalServerError      | 500                             | application/json                |
| errors.ServiceUnavailableError  | 503                             | application/json                |
| errors.R9SDefaultError          | 4XX, 5XX                        | \*/\*                           |

## translate

Translate speech from any supported language to English text.

**Important:** This endpoint only translates audio into English. The source language is automatically detected by the model.

**Supported models:** whisper-1 (primary), gpt-4o-transcribe (extended support)


### Example Usage: meeting_notes

<!-- UsageSnippet language="typescript" operationID="createAudioTranslation" method="post" path="/v1/audio/translations" example="meeting_notes" -->
```typescript
import { R9S } from "@r9s/sdk";
import { openAsBlob } from "node:fs";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.audio.translate({
    file: await openAsBlob("example.file"),
    model: "gpt-4o-transcribe",
    prompt: "Business meeting, summarize clearly",
    responseFormat: "text",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { R9SCore } from "@r9s/sdk/core.js";
import { audioTranslate } from "@r9s/sdk/funcs/audioTranslate.js";
import { openAsBlob } from "node:fs";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await audioTranslate(r9S, {
    file: await openAsBlob("example.file"),
    model: "gpt-4o-transcribe",
    prompt: "Business meeting, summarize clearly",
    responseFormat: "text",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("audioTranslate failed:", res.error);
  }
}

run();
```
### Example Usage: simple

<!-- UsageSnippet language="typescript" operationID="createAudioTranslation" method="post" path="/v1/audio/translations" example="simple" -->
```typescript
import { R9S } from "@r9s/sdk";
import { openAsBlob } from "node:fs";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.audio.translate({
    file: await openAsBlob("example.file"),
    model: "whisper-1",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { R9SCore } from "@r9s/sdk/core.js";
import { audioTranslate } from "@r9s/sdk/funcs/audioTranslate.js";
import { openAsBlob } from "node:fs";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await audioTranslate(r9S, {
    file: await openAsBlob("example.file"),
    model: "whisper-1",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("audioTranslate failed:", res.error);
  }
}

run();
```
### Example Usage: with_prompt

<!-- UsageSnippet language="typescript" operationID="createAudioTranslation" method="post" path="/v1/audio/translations" example="with_prompt" -->
```typescript
import { R9S } from "@r9s/sdk";
import { openAsBlob } from "node:fs";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.audio.translate({
    file: await openAsBlob("example.file"),
    model: "whisper-1",
    prompt: "This is about technology",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { R9SCore } from "@r9s/sdk/core.js";
import { audioTranslate } from "@r9s/sdk/funcs/audioTranslate.js";
import { openAsBlob } from "node:fs";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await audioTranslate(r9S, {
    file: await openAsBlob("example.file"),
    model: "whisper-1",
    prompt: "This is about technology",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("audioTranslate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.AudioTranslationRequest](../../models/audiotranslationrequest.md)                                                                                                      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.CreateAudioTranslationResponse](../../models/createaudiotranslationresponse.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.BadRequestError          | 400                             | application/json                |
| errors.AuthenticationError      | 401                             | application/json                |
| errors.PermissionDeniedError    | 403                             | application/json                |
| errors.UnprocessableEntityError | 422                             | application/json                |
| errors.RateLimitError           | 429                             | application/json                |
| errors.InternalServerError      | 500                             | application/json                |
| errors.ServiceUnavailableError  | 503                             | application/json                |
| errors.R9SDefaultError          | 4XX, 5XX                        | \*/\*                           |