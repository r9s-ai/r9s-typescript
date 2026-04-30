# Search

## Overview

### Available Operations

* [create](#create) - Create search

## create

Execute web search queries using specified search engine. Supports three search engines:Exa (AI-native search, default), Tavily (with AI summary), Google (custom search)

### Example Usage: default_engine

<!-- UsageSnippet language="typescript" operationID="createSearch" method="post" path="/search" example="default_engine" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.search.create({
    extra: {
      query: "machine learning tutorials",
      additionalProperties: {
        "num": 3,
      },
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { R9SCore } from "@r9s/sdk/core.js";
import { searchCreate } from "@r9s/sdk/funcs/searchCreate.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await searchCreate(r9S, {
    extra: {
      query: "machine learning tutorials",
      additionalProperties: {
        "num": 3,
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("searchCreate failed:", res.error);
  }
}

run();
```
### Example Usage: exa_response

<!-- UsageSnippet language="typescript" operationID="createSearch" method="post" path="/search" example="exa_response" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.search.create({
    engine: "tavily",
    extra: {
      query: "latest AI news",
      additionalProperties: {
        "max_results": 5,
        "include_answer": true,
      },
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { R9SCore } from "@r9s/sdk/core.js";
import { searchCreate } from "@r9s/sdk/funcs/searchCreate.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await searchCreate(r9S, {
    engine: "tavily",
    extra: {
      query: "latest AI news",
      additionalProperties: {
        "max_results": 5,
        "include_answer": true,
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("searchCreate failed:", res.error);
  }
}

run();
```
### Example Usage: exa_simple

<!-- UsageSnippet language="typescript" operationID="createSearch" method="post" path="/search" example="exa_simple" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.search.create({
    extra: {
      query: "What is artificial intelligence?",
      additionalProperties: {
        "num": 5,
        "contents": {
          "text": true,
        },
      },
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { R9SCore } from "@r9s/sdk/core.js";
import { searchCreate } from "@r9s/sdk/funcs/searchCreate.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await searchCreate(r9S, {
    extra: {
      query: "What is artificial intelligence?",
      additionalProperties: {
        "num": 5,
        "contents": {
          "text": true,
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("searchCreate failed:", res.error);
  }
}

run();
```
### Example Usage: exa_with_snippets

<!-- UsageSnippet language="typescript" operationID="createSearch" method="post" path="/search" example="exa_with_snippets" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.search.create({
    extra: {
      query: "LLM routing architectures",
      additionalProperties: {
        "num": 3,
        "contents": {
          "text": true,
          "highlights": true,
        },
      },
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { R9SCore } from "@r9s/sdk/core.js";
import { searchCreate } from "@r9s/sdk/funcs/searchCreate.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await searchCreate(r9S, {
    extra: {
      query: "LLM routing architectures",
      additionalProperties: {
        "num": 3,
        "contents": {
          "text": true,
          "highlights": true,
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("searchCreate failed:", res.error);
  }
}

run();
```
### Example Usage: google_response

<!-- UsageSnippet language="typescript" operationID="createSearch" method="post" path="/search" example="google_response" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.search.create({
    engine: "tavily",
    extra: {
      query: "latest AI news",
      additionalProperties: {
        "max_results": 5,
        "include_answer": true,
      },
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { R9SCore } from "@r9s/sdk/core.js";
import { searchCreate } from "@r9s/sdk/funcs/searchCreate.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await searchCreate(r9S, {
    engine: "tavily",
    extra: {
      query: "latest AI news",
      additionalProperties: {
        "max_results": 5,
        "include_answer": true,
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("searchCreate failed:", res.error);
  }
}

run();
```
### Example Usage: google_search

<!-- UsageSnippet language="typescript" operationID="createSearch" method="post" path="/search" example="google_search" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.search.create({
    engine: "google",
    extra: {
      query: "Python best practices 2024",
      additionalProperties: {
        "num": 10,
        "safe": "active",
      },
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { R9SCore } from "@r9s/sdk/core.js";
import { searchCreate } from "@r9s/sdk/funcs/searchCreate.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await searchCreate(r9S, {
    engine: "google",
    extra: {
      query: "Python best practices 2024",
      additionalProperties: {
        "num": 10,
        "safe": "active",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("searchCreate failed:", res.error);
  }
}

run();
```
### Example Usage: tavily_advanced

<!-- UsageSnippet language="typescript" operationID="createSearch" method="post" path="/search" example="tavily_advanced" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.search.create({
    engine: "tavily",
    extra: {
      query: "Latest developments in quantum computing",
      additionalProperties: {
        "max_results": 10,
        "search_depth": "advanced",
        "include_answer": true,
      },
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { R9SCore } from "@r9s/sdk/core.js";
import { searchCreate } from "@r9s/sdk/funcs/searchCreate.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await searchCreate(r9S, {
    engine: "tavily",
    extra: {
      query: "Latest developments in quantum computing",
      additionalProperties: {
        "max_results": 10,
        "search_depth": "advanced",
        "include_answer": true,
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("searchCreate failed:", res.error);
  }
}

run();
```
### Example Usage: tavily_response

<!-- UsageSnippet language="typescript" operationID="createSearch" method="post" path="/search" example="tavily_response" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.search.create({
    engine: "tavily",
    extra: {
      query: "latest AI news",
      additionalProperties: {
        "max_results": 5,
        "include_answer": true,
      },
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { R9SCore } from "@r9s/sdk/core.js";
import { searchCreate } from "@r9s/sdk/funcs/searchCreate.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await searchCreate(r9S, {
    engine: "tavily",
    extra: {
      query: "latest AI news",
      additionalProperties: {
        "max_results": 5,
        "include_answer": true,
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("searchCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.SearchRequest](../../models/searchrequest.md)                                                                                                                          | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.SearchResponse](../../models/searchresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.BadRequestError         | 400                            | application/json               |
| errors.AuthenticationError     | 401                            | application/json               |
| errors.PermissionDeniedError   | 403                            | application/json               |
| errors.InternalServerError     | 500                            | application/json               |
| errors.ServiceUnavailableError | 503                            | application/json               |
| errors.R9SDefaultError         | 4XX, 5XX                       | \*/\*                          |