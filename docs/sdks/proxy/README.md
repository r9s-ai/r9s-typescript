# Proxy

## Overview

### Available Operations

* [request](#request) - Proxy request

## request

Proxy requests to target endpoint through specified channel

### Example Usage: audio_transcription

<!-- UsageSnippet language="typescript" operationID="createProxyRequest" method="post" path="/nextrouter/proxy/{channelid}/{target}" example="audio_transcription" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.proxy.request("123", "chat/completions", {
    "model": "whisper-1",
    "file": "audio.mp3",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { R9SCore } from "@r9s/sdk/core.js";
import { proxyRequest } from "@r9s/sdk/funcs/proxyRequest.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await proxyRequest(r9S, "123", "chat/completions", {
    "model": "whisper-1",
    "file": "audio.mp3",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("proxyRequest failed:", res.error);
  }
}

run();
```
### Example Usage: chat_request

<!-- UsageSnippet language="typescript" operationID="createProxyRequest" method="post" path="/nextrouter/proxy/{channelid}/{target}" example="chat_request" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.proxy.request("123", "chat/completions", {
    "model": "gpt-4o-mini",
    "messages": [
      {
        "role": "user",
        "content": "Hello",
      },
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
import { proxyRequest } from "@r9s/sdk/funcs/proxyRequest.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await proxyRequest(r9S, "123", "chat/completions", {
    "model": "gpt-4o-mini",
    "messages": [
      {
        "role": "user",
        "content": "Hello",
      },
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("proxyRequest failed:", res.error);
  }
}

run();
```
### Example Usage: completion_request

<!-- UsageSnippet language="typescript" operationID="createProxyRequest" method="post" path="/nextrouter/proxy/{channelid}/{target}" example="completion_request" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.proxy.request("123", "chat/completions", {
    "model": "qwen-plus",
    "prompt": "Write a tagline for a cloud proxy service",
    "max_tokens": 60,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { R9SCore } from "@r9s/sdk/core.js";
import { proxyRequest } from "@r9s/sdk/funcs/proxyRequest.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await proxyRequest(r9S, "123", "chat/completions", {
    "model": "qwen-plus",
    "prompt": "Write a tagline for a cloud proxy service",
    "max_tokens": 60,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("proxyRequest failed:", res.error);
  }
}

run();
```
### Example Usage: custom_request

<!-- UsageSnippet language="typescript" operationID="createProxyRequest" method="post" path="/nextrouter/proxy/{channelid}/{target}" example="custom_request" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.proxy.request("123", "chat/completions", {
    "custom_param": "value",
    "another_param": 123,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { R9SCore } from "@r9s/sdk/core.js";
import { proxyRequest } from "@r9s/sdk/funcs/proxyRequest.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await proxyRequest(r9S, "123", "chat/completions", {
    "custom_param": "value",
    "another_param": 123,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("proxyRequest failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `channelid`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Channel ID                                                                                                                                                                     | 123                                                                                                                                                                            |
| `target`                                                                                                                                                                       | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Target path                                                                                                                                                                    | chat/completions                                                                                                                                                               |
| `requestBody`                                                                                                                                                                  | Record<string, *any*>                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[{ [k: string]: any }](../../models/.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.BadRequestError          | 400                             | application/json                |
| errors.AuthenticationError      | 401                             | application/json                |
| errors.PermissionDeniedError    | 403                             | application/json                |
| errors.NotFoundError            | 404                             | application/json                |
| errors.UnprocessableEntityError | 422                             | application/json                |
| errors.RateLimitError           | 429                             | application/json                |
| errors.InternalServerError      | 500                             | application/json                |
| errors.ServiceUnavailableError  | 503                             | application/json                |
| errors.R9SDefaultError          | 4XX, 5XX                        | \*/\*                           |