# Messages

## Overview

### Available Operations

* [create](#create) - Create message (Claude native API)

## create

Create a message using Anthropic Claude's native API format, supports streaming

### Example Usage: complex_conversation

<!-- UsageSnippet language="typescript" operationID="createMessage" method="post" path="/messages" example="complex_conversation" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.messages.create({
    model: "claude-opus-4.5",
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: "Analyze this chart and tell me the trends",
          },
          {
            type: "image",
            source: {
              type: "base64",
              mediaType: "image/png",
              data: "iVBORw0KGgoAAAANS...",
            },
          },
        ],
      },
      {
        role: "assistant",
        content: [
          {
            type: "text",
            text: "I can see the chart shows a clear upward trend...",
          },
        ],
      },
      {
        role: "user",
        content: [
          {
            type: "text",
            text: "Can you fetch the latest data to compare?",
          },
        ],
      },
    ],
    system: "You are an AI assistant helping with data analysis and visualization.",
    maxTokens: 4096,
    temperature: 0.5,
    topP: 0.9,
    topK: 40,
    tools: [
      {
        name: "fetch_data",
        description: "Fetch latest dataset",
        inputSchema: {
          type: "object",
          properties: {},
          required: [
            "dataset_id",
          ],
        },
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
import { messagesCreate } from "@r9s/sdk/funcs/messagesCreate.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await messagesCreate(r9S, {
    model: "claude-opus-4.5",
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: "Analyze this chart and tell me the trends",
          },
          {
            type: "image",
            source: {
              type: "base64",
              mediaType: "image/png",
              data: "iVBORw0KGgoAAAANS...",
            },
          },
        ],
      },
      {
        role: "assistant",
        content: [
          {
            type: "text",
            text: "I can see the chart shows a clear upward trend...",
          },
        ],
      },
      {
        role: "user",
        content: [
          {
            type: "text",
            text: "Can you fetch the latest data to compare?",
          },
        ],
      },
    ],
    system: "You are an AI assistant helping with data analysis and visualization.",
    maxTokens: 4096,
    temperature: 0.5,
    topP: 0.9,
    topK: 40,
    tools: [
      {
        name: "fetch_data",
        description: "Fetch latest dataset",
        inputSchema: {
          type: "object",
          properties: {},
          required: [
            "dataset_id",
          ],
        },
      },
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("messagesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: multi_turn_with_tools

<!-- UsageSnippet language="typescript" operationID="createMessage" method="post" path="/messages" example="multi_turn_with_tools" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.messages.create({
    model: "claude-opus-4.5",
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: "Find me information about the latest SpaceX launch",
          },
        ],
      },
      {
        role: "assistant",
        content: [
          {
            type: "tool_use",
            id: "toolu_01B",
            name: "web_search",
            input: {
              "query": "latest SpaceX launch",
              "max_results": 5,
            },
          },
        ],
      },
      {
        role: "user",
        content: [
          {
            type: "tool_result",
            toolUseId: "toolu_01B",
            content: "{\"results\": [{\"title\": \"SpaceX Starship Launch\", \"date\": \"2024-12-15\", \"summary\": \"...\"}]}",
          },
        ],
      },
      {
        role: "assistant",
        content: [
          {
            type: "text",
            text: "Based on the search results, the latest SpaceX launch was...",
          },
        ],
      },
      {
        role: "user",
        content: [
          {
            type: "text",
            text: "What was the weather during that launch?",
          },
        ],
      },
    ],
    system: "You are a research assistant. Use tools when needed to provide accurate information.",
    maxTokens: 4096,
    temperature: 0.7,
    tools: [
      {
        name: "web_search",
        description: "Search the web",
        inputSchema: {
          type: "object",
          properties: {},
          required: [
            "query",
          ],
        },
      },
      {
        name: "get_weather",
        description: "Get weather information",
        inputSchema: {
          type: "object",
          properties: {},
          required: [
            "location",
          ],
        },
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
import { messagesCreate } from "@r9s/sdk/funcs/messagesCreate.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await messagesCreate(r9S, {
    model: "claude-opus-4.5",
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: "Find me information about the latest SpaceX launch",
          },
        ],
      },
      {
        role: "assistant",
        content: [
          {
            type: "tool_use",
            id: "toolu_01B",
            name: "web_search",
            input: {
              "query": "latest SpaceX launch",
              "max_results": 5,
            },
          },
        ],
      },
      {
        role: "user",
        content: [
          {
            type: "tool_result",
            toolUseId: "toolu_01B",
            content: "{\"results\": [{\"title\": \"SpaceX Starship Launch\", \"date\": \"2024-12-15\", \"summary\": \"...\"}]}",
          },
        ],
      },
      {
        role: "assistant",
        content: [
          {
            type: "text",
            text: "Based on the search results, the latest SpaceX launch was...",
          },
        ],
      },
      {
        role: "user",
        content: [
          {
            type: "text",
            text: "What was the weather during that launch?",
          },
        ],
      },
    ],
    system: "You are a research assistant. Use tools when needed to provide accurate information.",
    maxTokens: 4096,
    temperature: 0.7,
    tools: [
      {
        name: "web_search",
        description: "Search the web",
        inputSchema: {
          type: "object",
          properties: {},
          required: [
            "query",
          ],
        },
      },
      {
        name: "get_weather",
        description: "Get weather information",
        inputSchema: {
          type: "object",
          properties: {},
          required: [
            "location",
          ],
        },
      },
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("messagesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: simple

<!-- UsageSnippet language="typescript" operationID="createMessage" method="post" path="/messages" example="simple" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.messages.create({
    model: "claude-opus-4.5",
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: "Hello, Claude!",
          },
        ],
      },
    ],
    maxTokens: 1024,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { R9SCore } from "@r9s/sdk/core.js";
import { messagesCreate } from "@r9s/sdk/funcs/messagesCreate.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await messagesCreate(r9S, {
    model: "claude-opus-4.5",
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: "Hello, Claude!",
          },
        ],
      },
    ],
    maxTokens: 1024,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("messagesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: specific_tool

<!-- UsageSnippet language="typescript" operationID="createMessage" method="post" path="/messages" example="specific_tool" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.messages.create({
    model: "claude-opus-4.5",
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: "Tell me about the weather",
          },
        ],
      },
    ],
    maxTokens: 2048,
    tools: [
      {
        name: "get_weather",
        description: "Get weather information",
        inputSchema: {
          type: "object",
          properties: {},
          required: [
            "location",
          ],
        },
      },
      {
        name: "get_forecast",
        description: "Get weather forecast",
        inputSchema: {
          type: "object",
          properties: {},
          required: [
            "location",
          ],
        },
      },
    ],
    toolChoice: {
      type: "tool",
      name: "get_weather",
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
import { messagesCreate } from "@r9s/sdk/funcs/messagesCreate.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await messagesCreate(r9S, {
    model: "claude-opus-4.5",
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: "Tell me about the weather",
          },
        ],
      },
    ],
    maxTokens: 2048,
    tools: [
      {
        name: "get_weather",
        description: "Get weather information",
        inputSchema: {
          type: "object",
          properties: {},
          required: [
            "location",
          ],
        },
      },
      {
        name: "get_forecast",
        description: "Get weather forecast",
        inputSchema: {
          type: "object",
          properties: {},
          required: [
            "location",
          ],
        },
      },
    ],
    toolChoice: {
      type: "tool",
      name: "get_weather",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("messagesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: stop_sequences

<!-- UsageSnippet language="typescript" operationID="createMessage" method="post" path="/messages" example="stop_sequences" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.messages.create({
    model: "claude-sonnet-4.5",
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: "Generate a numbered list of programming tips",
          },
        ],
      },
    ],
    maxTokens: 1500,
    stopSequences: [
      "\n\n",
      "Conclusion",
    ],
    temperature: 0.8,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { R9SCore } from "@r9s/sdk/core.js";
import { messagesCreate } from "@r9s/sdk/funcs/messagesCreate.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await messagesCreate(r9S, {
    model: "claude-sonnet-4.5",
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: "Generate a numbered list of programming tips",
          },
        ],
      },
    ],
    maxTokens: 1500,
    stopSequences: [
      "\n\n",
      "Conclusion",
    ],
    temperature: 0.8,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("messagesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: streaming

<!-- UsageSnippet language="typescript" operationID="createMessage" method="post" path="/messages" example="streaming" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.messages.create({
    model: "claude-sonnet-4.5",
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: "Write a short story about a robot learning to paint",
          },
        ],
      },
    ],
    system: "You are a creative writing assistant.",
    maxTokens: 3000,
    stream: true,
    temperature: 0.9,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { R9SCore } from "@r9s/sdk/core.js";
import { messagesCreate } from "@r9s/sdk/funcs/messagesCreate.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await messagesCreate(r9S, {
    model: "claude-sonnet-4.5",
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: "Write a short story about a robot learning to paint",
          },
        ],
      },
    ],
    system: "You are a creative writing assistant.",
    maxTokens: 3000,
    stream: true,
    temperature: 0.9,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("messagesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: tool_use_response

<!-- UsageSnippet language="typescript" operationID="createMessage" method="post" path="/messages" example="tool_use_response" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.messages.create({
    model: "claude-sonnet-4.5",
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: "What's the weather in Tokyo?",
          },
        ],
      },
      {
        role: "assistant",
        content: [
          {
            type: "tool_use",
            id: "toolu_01A",
            name: "get_weather",
            input: {
              "location": "Tokyo",
              "units": "celsius",
            },
          },
        ],
      },
      {
        role: "user",
        content: [
          {
            type: "tool_result",
            toolUseId: "toolu_01A",
            content: "{\"temperature\": 22, \"condition\": \"cloudy\", \"humidity\": 70}",
          },
        ],
      },
    ],
    maxTokens: 2048,
    tools: [
      {
        name: "get_weather",
        description: "Get weather information",
        inputSchema: {
          type: "object",
          properties: {},
          required: [
            "location",
          ],
        },
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
import { messagesCreate } from "@r9s/sdk/funcs/messagesCreate.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await messagesCreate(r9S, {
    model: "claude-sonnet-4.5",
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: "What's the weather in Tokyo?",
          },
        ],
      },
      {
        role: "assistant",
        content: [
          {
            type: "tool_use",
            id: "toolu_01A",
            name: "get_weather",
            input: {
              "location": "Tokyo",
              "units": "celsius",
            },
          },
        ],
      },
      {
        role: "user",
        content: [
          {
            type: "tool_result",
            toolUseId: "toolu_01A",
            content: "{\"temperature\": 22, \"condition\": \"cloudy\", \"humidity\": 70}",
          },
        ],
      },
    ],
    maxTokens: 2048,
    tools: [
      {
        name: "get_weather",
        description: "Get weather information",
        inputSchema: {
          type: "object",
          properties: {},
          required: [
            "location",
          ],
        },
      },
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("messagesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: with_system

<!-- UsageSnippet language="typescript" operationID="createMessage" method="post" path="/messages" example="with_system" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.messages.create({
    model: "claude-sonnet-4.5",
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: "How do I write a Python function?",
          },
        ],
      },
    ],
    system: "You are a helpful coding assistant.",
    maxTokens: 2048,
    temperature: 0.7,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { R9SCore } from "@r9s/sdk/core.js";
import { messagesCreate } from "@r9s/sdk/funcs/messagesCreate.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await messagesCreate(r9S, {
    model: "claude-sonnet-4.5",
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: "How do I write a Python function?",
          },
        ],
      },
    ],
    system: "You are a helpful coding assistant.",
    maxTokens: 2048,
    temperature: 0.7,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("messagesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: with_tools

<!-- UsageSnippet language="typescript" operationID="createMessage" method="post" path="/messages" example="with_tools" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.messages.create({
    model: "claude-opus-4.5",
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: "What's the weather in Paris and what time is it there?",
          },
        ],
      },
    ],
    system: "You are a helpful assistant with access to tools.",
    maxTokens: 4096,
    tools: [
      {
        name: "get_weather",
        description: "Get current weather information for a location",
        inputSchema: {
          type: "object",
          properties: {},
          required: [
            "location",
          ],
        },
      },
      {
        name: "get_time",
        description: "Get current time for a location",
        inputSchema: {
          type: "object",
          properties: {},
          required: [
            "location",
          ],
        },
      },
    ],
    toolChoice: "auto",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { R9SCore } from "@r9s/sdk/core.js";
import { messagesCreate } from "@r9s/sdk/funcs/messagesCreate.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await messagesCreate(r9S, {
    model: "claude-opus-4.5",
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: "What's the weather in Paris and what time is it there?",
          },
        ],
      },
    ],
    system: "You are a helpful assistant with access to tools.",
    maxTokens: 4096,
    tools: [
      {
        name: "get_weather",
        description: "Get current weather information for a location",
        inputSchema: {
          type: "object",
          properties: {},
          required: [
            "location",
          ],
        },
      },
      {
        name: "get_time",
        description: "Get current time for a location",
        inputSchema: {
          type: "object",
          properties: {},
          required: [
            "location",
          ],
        },
      },
    ],
    toolChoice: "auto",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("messagesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: with_vision

<!-- UsageSnippet language="typescript" operationID="createMessage" method="post" path="/messages" example="with_vision" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.messages.create({
    model: "claude-sonnet-4.5",
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: "What do you see in this image?",
          },
          {
            type: "image",
            source: {
              type: "base64",
              mediaType: "image/jpeg",
              data: "/9j/4AAQSkZJRg...",
            },
          },
        ],
      },
    ],
    maxTokens: 2048,
    temperature: 0.5,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { R9SCore } from "@r9s/sdk/core.js";
import { messagesCreate } from "@r9s/sdk/funcs/messagesCreate.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await messagesCreate(r9S, {
    model: "claude-sonnet-4.5",
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: "What do you see in this image?",
          },
          {
            type: "image",
            source: {
              type: "base64",
              mediaType: "image/jpeg",
              data: "/9j/4AAQSkZJRg...",
            },
          },
        ],
      },
    ],
    maxTokens: 2048,
    temperature: 0.5,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("messagesCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.AnthropicMessageRequest](../../models/anthropicmessagerequest.md)                                                                                                      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.CreateMessageResponse](../../models/createmessageresponse.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.BadRequestError          | 400                             | application/json                |
| errors.AuthenticationError      | 401                             | application/json                |
| errors.PermissionDeniedError    | 403                             | application/json                |
| errors.ConflictError            | 409                             | application/json                |
| errors.UnprocessableEntityError | 422                             | application/json                |
| errors.RateLimitError           | 429                             | application/json                |
| errors.InternalServerError      | 500                             | application/json                |
| errors.ServiceUnavailableError  | 503                             | application/json                |
| errors.R9SDefaultError          | 4XX, 5XX                        | \*/\*                           |