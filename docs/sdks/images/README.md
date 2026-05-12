# Images

## Overview

### Available Operations

* [create](#create) - Create image
* [createEdit](#createedit) - Edit image

## create

Generate images from text prompts

### Example Usage: base64_output

<!-- UsageSnippet language="typescript" operationID="createImageGeneration" method="post" path="/images/generations" example="base64_output" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.images.create({
    prompt: "Minimalist logo of a cloud with a lightning bolt",
    model: "gpt-4o-mini",
    n: 1,
    responseFormat: "b64_json",
    size: "512x512",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { R9SCore } from "@r9s/sdk/core.js";
import { imagesCreate } from "@r9s/sdk/funcs/imagesCreate.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await imagesCreate(r9S, {
    prompt: "Minimalist logo of a cloud with a lightning bolt",
    model: "gpt-4o-mini",
    n: 1,
    responseFormat: "b64_json",
    size: "512x512",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("imagesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: detailed

<!-- UsageSnippet language="typescript" operationID="createImageGeneration" method="post" path="/images/generations" example="detailed" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.images.create({
    prompt: "A futuristic city with flying cars at sunset",
    model: "gpt-4o-mini",
    n: 1,
    quality: "hd",
    size: "1792x1024",
    style: "vivid",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { R9SCore } from "@r9s/sdk/core.js";
import { imagesCreate } from "@r9s/sdk/funcs/imagesCreate.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await imagesCreate(r9S, {
    prompt: "A futuristic city with flying cars at sunset",
    model: "gpt-4o-mini",
    n: 1,
    quality: "hd",
    size: "1792x1024",
    style: "vivid",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("imagesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: simple

<!-- UsageSnippet language="typescript" operationID="createImageGeneration" method="post" path="/images/generations" example="simple" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.images.create({
    prompt: "A cute cat sitting on a windowsill",
    model: "gpt-4o-mini",
    n: 1,
    size: "1024x1024",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { R9SCore } from "@r9s/sdk/core.js";
import { imagesCreate } from "@r9s/sdk/funcs/imagesCreate.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await imagesCreate(r9S, {
    prompt: "A cute cat sitting on a windowsill",
    model: "gpt-4o-mini",
    n: 1,
    size: "1024x1024",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("imagesCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.ImageGenerationRequest](../../models/imagegenerationrequest.md)                                                                                                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.CreateImageGenerationResponse](../../models/createimagegenerationresponse.md)\>**

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

## createEdit

Create an edited or extended image given an original and prompt

### Example Usage: gpt_image_edit

<!-- UsageSnippet language="typescript" operationID="createImageEdit" method="post" path="/images/edits" example="gpt_image_edit" -->
```typescript
import { R9S } from "@r9s/sdk";
import { openAsBlob } from "node:fs";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.images.createEdit({
    image: [
      await openAsBlob("example.file"),
    ],
    prompt: "Make the background transparent and add autumn colors",
    background: "transparent",
    inputFidelity: "high",
    model: "gpt-image-1",
    n: 2,
    outputFormat: "png",
    quality: "high",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { R9SCore } from "@r9s/sdk/core.js";
import { imagesCreateEdit } from "@r9s/sdk/funcs/imagesCreateEdit.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await imagesCreateEdit(r9S, {
    image: [],
    prompt: "Make the background transparent and add autumn colors",
    background: "transparent",
    inputFidelity: "high",
    model: "gpt-image-1",
    n: 2,
    outputFormat: "png",
    quality: "high",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("imagesCreateEdit failed:", res.error);
  }
}

run();
```
### Example Usage: gpt_image_streaming

<!-- UsageSnippet language="typescript" operationID="createImageEdit" method="post" path="/images/edits" example="gpt_image_streaming" -->
```typescript
import { R9S } from "@r9s/sdk";
import { openAsBlob } from "node:fs";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.images.createEdit({
    image: [
      await openAsBlob("example.file"),
    ],
    prompt: "Convert to watercolor painting style",
    model: "gpt-image-1.5",
    outputCompression: 85,
    outputFormat: "webp",
    partialImages: 2,
    stream: true,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { R9SCore } from "@r9s/sdk/core.js";
import { imagesCreateEdit } from "@r9s/sdk/funcs/imagesCreateEdit.js";
import { openAsBlob } from "node:fs";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await imagesCreateEdit(r9S, {
    image: await openAsBlob("example.file"),
    prompt: "Convert to watercolor painting style",
    model: "gpt-image-1.5",
    outputCompression: 85,
    outputFormat: "webp",
    partialImages: 2,
    stream: true,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("imagesCreateEdit failed:", res.error);
  }
}

run();
```
### Example Usage: multiple_images_edit

<!-- UsageSnippet language="typescript" operationID="createImageEdit" method="post" path="/images/edits" example="multiple_images_edit" -->
```typescript
import { R9S } from "@r9s/sdk";
import { openAsBlob } from "node:fs";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.images.createEdit({
    image: await openAsBlob("example.file"),
    prompt: "Apply vintage filter to all images",
    model: "gpt-image-1",
    n: 1,
    size: "1536x1024",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { R9SCore } from "@r9s/sdk/core.js";
import { imagesCreateEdit } from "@r9s/sdk/funcs/imagesCreateEdit.js";
import { openAsBlob } from "node:fs";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await imagesCreateEdit(r9S, {
    image: await openAsBlob("example.file"),
    prompt: "Apply vintage filter to all images",
    model: "gpt-image-1",
    n: 1,
    size: "1536x1024",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("imagesCreateEdit failed:", res.error);
  }
}

run();
```
### Example Usage: simple_edit_dalle2

<!-- UsageSnippet language="typescript" operationID="createImageEdit" method="post" path="/images/edits" example="simple_edit_dalle2" -->
```typescript
import { R9S } from "@r9s/sdk";
import { openAsBlob } from "node:fs";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.images.createEdit({
    image: await openAsBlob("example.file"),
    prompt: "Add a red bow tie to the cat",
    model: "dall-e-2",
    n: 1,
    responseFormat: "url",
    size: "1024x1024",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { R9SCore } from "@r9s/sdk/core.js";
import { imagesCreateEdit } from "@r9s/sdk/funcs/imagesCreateEdit.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await imagesCreateEdit(r9S, {
    image: [],
    prompt: "Add a red bow tie to the cat",
    model: "dall-e-2",
    n: 1,
    responseFormat: "url",
    size: "1024x1024",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("imagesCreateEdit failed:", res.error);
  }
}

run();
```
### Example Usage: with_mask_dalle2

<!-- UsageSnippet language="typescript" operationID="createImageEdit" method="post" path="/images/edits" example="with_mask_dalle2" -->
```typescript
import { R9S } from "@r9s/sdk";
import { openAsBlob } from "node:fs";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.images.createEdit({
    image: [
      await openAsBlob("example.file"),
    ],
    prompt: "Replace the sky with a sunset",
    mask: await openAsBlob("example.file"),
    model: "dall-e-2",
    size: "512x512",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { R9SCore } from "@r9s/sdk/core.js";
import { imagesCreateEdit } from "@r9s/sdk/funcs/imagesCreateEdit.js";
import { openAsBlob } from "node:fs";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await imagesCreateEdit(r9S, {
    image: [
      await openAsBlob("example.file"),
    ],
    prompt: "Replace the sky with a sunset",
    mask: await openAsBlob("example.file"),
    model: "dall-e-2",
    size: "512x512",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("imagesCreateEdit failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.ImageEditRequest](../../models/imageeditrequest.md)                                                                                                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.CreateImageEditResponse](../../models/createimageeditresponse.md)\>**

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