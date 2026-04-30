# Embeddings

## Overview

### Available Operations

* [create](#create) - Create embeddings

## create

Create embedding vector representations for input text

### Example Usage: base64_embedding

<!-- UsageSnippet language="typescript" operationID="createEmbedding" method="post" path="/v1/embeddings" example="base64_embedding" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.embeddings.create({
    model: "gpt-4o-mini",
    input: "Convert this to an embedding.",
    encodingFormat: "base64",
    dimensions: 256,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { R9SCore } from "@r9s/sdk/core.js";
import { embeddingsCreate } from "@r9s/sdk/funcs/embeddingsCreate.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await embeddingsCreate(r9S, {
    model: "gpt-4o-mini",
    input: "Convert this to an embedding.",
    encodingFormat: "base64",
    dimensions: 256,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("embeddingsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: multiple

<!-- UsageSnippet language="typescript" operationID="createEmbedding" method="post" path="/v1/embeddings" example="multiple" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.embeddings.create({
    model: "qwen-plus",
    input: [
      "Hello world",
      "Goodbye world",
      "How are you?",
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
import { embeddingsCreate } from "@r9s/sdk/funcs/embeddingsCreate.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await embeddingsCreate(r9S, {
    model: "qwen-plus",
    input: [
      "Hello world",
      "Goodbye world",
      "How are you?",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("embeddingsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: single

<!-- UsageSnippet language="typescript" operationID="createEmbedding" method="post" path="/v1/embeddings" example="single" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.embeddings.create({
    model: "qwen-plus",
    input: "The food was delicious and the waiter was friendly.",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { R9SCore } from "@r9s/sdk/core.js";
import { embeddingsCreate } from "@r9s/sdk/funcs/embeddingsCreate.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await embeddingsCreate(r9S, {
    model: "qwen-plus",
    input: "The food was delicious and the waiter was friendly.",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("embeddingsCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.EmbeddingRequest](../../models/embeddingrequest.md)                                                                                                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.EmbeddingResponse](../../models/embeddingresponse.md)\>**

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