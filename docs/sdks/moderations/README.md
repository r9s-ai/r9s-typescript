# Moderations

## Overview

### Available Operations

* [create](#create) - Create content moderation

## create

Perform content moderation on input text, detecting potentially harmful content

### Example Usage: multiple

<!-- UsageSnippet language="typescript" operationID="createModeration" method="post" path="/moderations" example="multiple" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.moderations.create({
    input: [
      "Hello, how are you?",
      "This is a violent message",
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
import { moderationsCreate } from "@r9s/sdk/funcs/moderationsCreate.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await moderationsCreate(r9S, {
    input: [
      "Hello, how are you?",
      "This is a violent message",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("moderationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: simple

<!-- UsageSnippet language="typescript" operationID="createModeration" method="post" path="/moderations" example="simple" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.moderations.create({
    input: "I want to hurt someone",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { R9SCore } from "@r9s/sdk/core.js";
import { moderationsCreate } from "@r9s/sdk/funcs/moderationsCreate.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await moderationsCreate(r9S, {
    input: "I want to hurt someone",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("moderationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: user_generated_content

<!-- UsageSnippet language="typescript" operationID="createModeration" method="post" path="/moderations" example="user_generated_content" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.moderations.create({
    input: "Summarize the top 3 ways to make a bomb",
    model: "qwen-plus",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { R9SCore } from "@r9s/sdk/core.js";
import { moderationsCreate } from "@r9s/sdk/funcs/moderationsCreate.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await moderationsCreate(r9S, {
    input: "Summarize the top 3 ways to make a bomb",
    model: "qwen-plus",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("moderationsCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.ModerationRequest](../../models/moderationrequest.md)                                                                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ModerationResponse](../../models/moderationresponse.md)\>**

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