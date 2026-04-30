# Chat

## Overview

### Available Operations

* [create](#create) - Create chat completion

## create

Create a chat completion, supports streaming

### Example Usage: basic

<!-- UsageSnippet language="typescript" operationID="createChatCompletion" method="post" path="/v1/chat/completions" example="basic" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.chat.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "user",
        content: "Hello, how are you?",
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
import { chatCreate } from "@r9s/sdk/funcs/chatCreate.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await chatCreate(r9S, {
    model: "gpt-4o-mini",
    messages: [
      {
        role: "user",
        content: "Hello, how are you?",
      },
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("chatCreate failed:", res.error);
  }
}

run();
```
### Example Usage: forced_tool_call

<!-- UsageSnippet language="typescript" operationID="createChatCompletion" method="post" path="/v1/chat/completions" example="forced_tool_call" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.chat.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "user",
        content: "Tell me about the weather",
      },
    ],
    tools: [
      {
        type: "function",
        function: {
          name: "get_weather",
          description: "Get weather information",
          parameters: {
            "type": "object",
            "properties": {
              "location": {
                "type": "string",
              },
            },
            "required": [
              "location",
            ],
          },
        },
      },
      {
        type: "function",
        function: {
          name: "get_time",
          description: "Get current time",
          parameters: {
            "type": "object",
            "properties": {
              "timezone": {
                "type": "string",
              },
            },
          },
        },
      },
    ],
    toolChoice: {
      type: "function",
      function: {
        name: "get_weather",
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
import { chatCreate } from "@r9s/sdk/funcs/chatCreate.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await chatCreate(r9S, {
    model: "gpt-4o-mini",
    messages: [
      {
        role: "user",
        content: "Tell me about the weather",
      },
    ],
    tools: [
      {
        type: "function",
        function: {
          name: "get_weather",
          description: "Get weather information",
          parameters: {
            "type": "object",
            "properties": {
              "location": {
                "type": "string",
              },
            },
            "required": [
              "location",
            ],
          },
        },
      },
      {
        type: "function",
        function: {
          name: "get_time",
          description: "Get current time",
          parameters: {
            "type": "object",
            "properties": {
              "timezone": {
                "type": "string",
              },
            },
          },
        },
      },
    ],
    toolChoice: {
      type: "function",
      function: {
        name: "get_weather",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("chatCreate failed:", res.error);
  }
}

run();
```
### Example Usage: multi_turn

<!-- UsageSnippet language="typescript" operationID="createChatCompletion" method="post" path="/v1/chat/completions" example="multi_turn" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.chat.create({
    model: "claude-sonnet-4.5",
    messages: [
      {
        role: "system",
        content: "You are a knowledgeable programming tutor.",
      },
      {
        role: "user",
        content: "How do I create a list in Python?",
      },
      {
        role: "assistant",
        content: "In Python, you can create a list using square brackets. For example: my_list = [1, 2, 3]",
      },
      {
        role: "user",
        content: "How do I add items to it?",
      },
    ],
    maxTokens: 500,
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
import { chatCreate } from "@r9s/sdk/funcs/chatCreate.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await chatCreate(r9S, {
    model: "claude-sonnet-4.5",
    messages: [
      {
        role: "system",
        content: "You are a knowledgeable programming tutor.",
      },
      {
        role: "user",
        content: "How do I create a list in Python?",
      },
      {
        role: "assistant",
        content: "In Python, you can create a list using square brackets. For example: my_list = [1, 2, 3]",
      },
      {
        role: "user",
        content: "How do I add items to it?",
      },
    ],
    maxTokens: 500,
    temperature: 0.8,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("chatCreate failed:", res.error);
  }
}

run();
```
### Example Usage: parallel_tools

<!-- UsageSnippet language="typescript" operationID="createChatCompletion" method="post" path="/v1/chat/completions" example="parallel_tools" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.chat.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "user",
        content: "Check the weather in Tokyo, Paris, and New York simultaneously",
      },
    ],
    temperature: 0.7,
    tools: [
      {
        type: "function",
        function: {
          name: "get_weather",
          description: "Get weather information",
          parameters: {
            "type": "object",
            "properties": {
              "city": {
                "type": "string",
              },
            },
            "required": [
              "city",
            ],
          },
        },
      },
    ],
    parallelToolCalls: true,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { R9SCore } from "@r9s/sdk/core.js";
import { chatCreate } from "@r9s/sdk/funcs/chatCreate.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await chatCreate(r9S, {
    model: "gpt-4o-mini",
    messages: [
      {
        role: "user",
        content: "Check the weather in Tokyo, Paris, and New York simultaneously",
      },
    ],
    temperature: 0.7,
    tools: [
      {
        type: "function",
        function: {
          name: "get_weather",
          description: "Get weather information",
          parameters: {
            "type": "object",
            "properties": {
              "city": {
                "type": "string",
              },
            },
            "required": [
              "city",
            ],
          },
        },
      },
    ],
    parallelToolCalls: true,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("chatCreate failed:", res.error);
  }
}

run();
```
### Example Usage: streaming

<!-- UsageSnippet language="typescript" operationID="createChatCompletion" method="post" path="/v1/chat/completions" example="streaming" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.chat.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "user",
        content: "Tell me a story",
      },
    ],
    stream: true,
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
import { chatCreate } from "@r9s/sdk/funcs/chatCreate.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await chatCreate(r9S, {
    model: "gpt-4o-mini",
    messages: [
      {
        role: "user",
        content: "Tell me a story",
      },
    ],
    stream: true,
    temperature: 0.8,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("chatCreate failed:", res.error);
  }
}

run();
```
### Example Usage: tool_response

<!-- UsageSnippet language="typescript" operationID="createChatCompletion" method="post" path="/v1/chat/completions" example="tool_response" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.chat.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "user",
        content: "What's the weather in San Francisco?",
      },
      {
        role: "assistant",
        content: null,
        toolCalls: [
          {
            id: "call_abc123",
            type: "function",
            function: {
              name: "get_weather",
              arguments: "{\"location\": \"San Francisco, CA\", \"unit\": \"celsius\"}",
            },
          },
        ],
      },
      {
        role: "tool",
        content: "{\"temperature\": 18, \"condition\": \"sunny\", \"humidity\": 65}",
        toolCallId: "call_abc123",
      },
    ],
    tools: [
      {
        type: "function",
        function: {
          name: "get_weather",
          description: "Get the current weather in a given location",
          parameters: {
            "type": "object",
            "properties": {
              "location": {
                "type": "string",
              },
              "unit": {
                "type": "string",
                "enum": [
                  "celsius",
                  "fahrenheit",
                ],
              },
            },
            "required": [
              "location",
            ],
          },
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
import { chatCreate } from "@r9s/sdk/funcs/chatCreate.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await chatCreate(r9S, {
    model: "gpt-4o-mini",
    messages: [
      {
        role: "user",
        content: "What's the weather in San Francisco?",
      },
      {
        role: "assistant",
        content: null,
        toolCalls: [
          {
            id: "call_abc123",
            type: "function",
            function: {
              name: "get_weather",
              arguments: "{\"location\": \"San Francisco, CA\", \"unit\": \"celsius\"}",
            },
          },
        ],
      },
      {
        role: "tool",
        content: "{\"temperature\": 18, \"condition\": \"sunny\", \"humidity\": 65}",
        toolCallId: "call_abc123",
      },
    ],
    tools: [
      {
        type: "function",
        function: {
          name: "get_weather",
          description: "Get the current weather in a given location",
          parameters: {
            "type": "object",
            "properties": {
              "location": {
                "type": "string",
              },
              "unit": {
                "type": "string",
                "enum": [
                  "celsius",
                  "fahrenheit",
                ],
              },
            },
            "required": [
              "location",
            ],
          },
        },
      },
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("chatCreate failed:", res.error);
  }
}

run();
```
### Example Usage: with_audio_output

<!-- UsageSnippet language="typescript" operationID="createChatCompletion" method="post" path="/v1/chat/completions" example="with_audio_output" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.chat.create({
    model: "gpt-4o-mini-audio",
    messages: [
      {
        role: "user",
        content: "Tell me a short story about a robot",
      },
    ],
    maxTokens: 500,
    modalities: [
      "text",
      "audio",
    ],
    audio: {
      voice: "alloy",
      format: "mp3",
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
import { chatCreate } from "@r9s/sdk/funcs/chatCreate.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await chatCreate(r9S, {
    model: "gpt-4o-mini-audio",
    messages: [
      {
        role: "user",
        content: "Tell me a short story about a robot",
      },
    ],
    maxTokens: 500,
    modalities: [
      "text",
      "audio",
    ],
    audio: {
      voice: "alloy",
      format: "mp3",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("chatCreate failed:", res.error);
  }
}

run();
```
### Example Usage: with_json_mode

<!-- UsageSnippet language="typescript" operationID="createChatCompletion" method="post" path="/v1/chat/completions" example="with_json_mode" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.chat.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: "You are a helpful assistant that outputs in JSON format.",
      },
      {
        role: "user",
        content: "Extract the name, age, and occupation from this text: John is 30 years old and works as a software engineer.",
      },
    ],
    responseFormat: {
      type: "json_object",
    },
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
import { chatCreate } from "@r9s/sdk/funcs/chatCreate.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await chatCreate(r9S, {
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: "You are a helpful assistant that outputs in JSON format.",
      },
      {
        role: "user",
        content: "Extract the name, age, and occupation from this text: John is 30 years old and works as a software engineer.",
      },
    ],
    responseFormat: {
      type: "json_object",
    },
    temperature: 0.5,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("chatCreate failed:", res.error);
  }
}

run();
```
### Example Usage: with_json_schema

<!-- UsageSnippet language="typescript" operationID="createChatCompletion" method="post" path="/v1/chat/completions" example="with_json_schema" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.chat.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "user",
        content: "Generate a user profile for a software engineer named Alice",
      },
    ],
    responseFormat: {
      type: "json_schema",
      jsonSchema: {
        name: "user_profile",
        description: "A user profile object",
        schema: {
          "type": "object",
          "properties": {
            "name": {
              "type": "string",
            },
            "age": {
              "type": "integer",
            },
            "occupation": {
              "type": "string",
            },
            "skills": {
              "type": "array",
              "items": {
                "type": "string",
              },
            },
          },
          "required": [
            "name",
            "occupation",
          ],
        },
      },
    },
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
import { chatCreate } from "@r9s/sdk/funcs/chatCreate.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await chatCreate(r9S, {
    model: "gpt-4o-mini",
    messages: [
      {
        role: "user",
        content: "Generate a user profile for a software engineer named Alice",
      },
    ],
    responseFormat: {
      type: "json_schema",
      jsonSchema: {
        name: "user_profile",
        description: "A user profile object",
        schema: {
          "type": "object",
          "properties": {
            "name": {
              "type": "string",
            },
            "age": {
              "type": "integer",
            },
            "occupation": {
              "type": "string",
            },
            "skills": {
              "type": "array",
              "items": {
                "type": "string",
              },
            },
          },
          "required": [
            "name",
            "occupation",
          ],
        },
      },
    },
    temperature: 0.7,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("chatCreate failed:", res.error);
  }
}

run();
```
### Example Usage: with_metadata

<!-- UsageSnippet language="typescript" operationID="createChatCompletion" method="post" path="/v1/chat/completions" example="with_metadata" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.chat.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "user",
        content: "Explain quantum entanglement in simple terms",
      },
    ],
    maxTokens: 300,
    temperature: 0.8,
    user: "user_abc123",
    store: true,
    metadata: {
      "session_id": "session_xyz789",
      "conversation_id": "conv_456",
      "source": "mobile_app",
      "version": "1.2.3",
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
import { chatCreate } from "@r9s/sdk/funcs/chatCreate.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await chatCreate(r9S, {
    model: "gpt-4o-mini",
    messages: [
      {
        role: "user",
        content: "Explain quantum entanglement in simple terms",
      },
    ],
    maxTokens: 300,
    temperature: 0.8,
    user: "user_abc123",
    store: true,
    metadata: {
      "session_id": "session_xyz789",
      "conversation_id": "conv_456",
      "source": "mobile_app",
      "version": "1.2.3",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("chatCreate failed:", res.error);
  }
}

run();
```
### Example Usage: with_reasoning

<!-- UsageSnippet language="typescript" operationID="createChatCompletion" method="post" path="/v1/chat/completions" example="with_reasoning" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.chat.create({
    model: "grok-4-fast-reasoning",
    messages: [
      {
        role: "user",
        content: "Solve this math problem: If a train travels 120 km in 2 hours, then stops for 30 minutes, then travels another 90 km in 1.5 hours, what is the average speed for the entire journey?",
      },
    ],
    user: "user_12345",
    reasoningEffort: "high",
    maxCompletionTokens: 2000,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { R9SCore } from "@r9s/sdk/core.js";
import { chatCreate } from "@r9s/sdk/funcs/chatCreate.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await chatCreate(r9S, {
    model: "grok-4-fast-reasoning",
    messages: [
      {
        role: "user",
        content: "Solve this math problem: If a train travels 120 km in 2 hours, then stops for 30 minutes, then travels another 90 km in 1.5 hours, what is the average speed for the entire journey?",
      },
    ],
    user: "user_12345",
    reasoningEffort: "high",
    maxCompletionTokens: 2000,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("chatCreate failed:", res.error);
  }
}

run();
```
### Example Usage: with_system

<!-- UsageSnippet language="typescript" operationID="createChatCompletion" method="post" path="/v1/chat/completions" example="with_system" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.chat.create({
    model: "qwen-plus",
    messages: [
      {
        role: "system",
        content: "You are a helpful assistant.",
      },
      {
        role: "user",
        content: "What is the capital of France?",
      },
    ],
    maxTokens: 100,
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
import { chatCreate } from "@r9s/sdk/funcs/chatCreate.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await chatCreate(r9S, {
    model: "qwen-plus",
    messages: [
      {
        role: "system",
        content: "You are a helpful assistant.",
      },
      {
        role: "user",
        content: "What is the capital of France?",
      },
    ],
    maxTokens: 100,
    temperature: 0.7,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("chatCreate failed:", res.error);
  }
}

run();
```
### Example Usage: with_tools

<!-- UsageSnippet language="typescript" operationID="createChatCompletion" method="post" path="/v1/chat/completions" example="with_tools" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.chat.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "user",
        content: "What's the weather like in San Francisco and Tokyo?",
      },
    ],
    temperature: 0.7,
    tools: [
      {
        type: "function",
        function: {
          name: "get_weather",
          description: "Get the current weather in a given location",
          parameters: {
            "type": "object",
            "properties": {
              "location": {
                "type": "string",
                "description": "The city and state, e.g. San Francisco, CA",
              },
              "unit": {
                "type": "string",
                "enum": [
                  "celsius",
                  "fahrenheit",
                ],
                "description": "The temperature unit to use",
              },
            },
            "required": [
              "location",
            ],
          },
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
import { chatCreate } from "@r9s/sdk/funcs/chatCreate.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await chatCreate(r9S, {
    model: "gpt-4o-mini",
    messages: [
      {
        role: "user",
        content: "What's the weather like in San Francisco and Tokyo?",
      },
    ],
    temperature: 0.7,
    tools: [
      {
        type: "function",
        function: {
          name: "get_weather",
          description: "Get the current weather in a given location",
          parameters: {
            "type": "object",
            "properties": {
              "location": {
                "type": "string",
                "description": "The city and state, e.g. San Francisco, CA",
              },
              "unit": {
                "type": "string",
                "enum": [
                  "celsius",
                  "fahrenheit",
                ],
                "description": "The temperature unit to use",
              },
            },
            "required": [
              "location",
            ],
          },
        },
      },
    ],
    toolChoice: "auto",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("chatCreate failed:", res.error);
  }
}

run();
```
### Example Usage: with_vision

<!-- UsageSnippet language="typescript" operationID="createChatCompletion" method="post" path="/v1/chat/completions" example="with_vision" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.chat.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: "What's in this image?",
          },
          {
            type: "image_url",
            imageUrl: {
              url: "https://example.com/image.jpg",
              detail: "high",
            },
          },
        ],
      },
    ],
    maxTokens: 300,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { R9SCore } from "@r9s/sdk/core.js";
import { chatCreate } from "@r9s/sdk/funcs/chatCreate.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await chatCreate(r9S, {
    model: "gpt-4o-mini",
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: "What's in this image?",
          },
          {
            type: "image_url",
            imageUrl: {
              url: "https://example.com/image.jpg",
              detail: "high",
            },
          },
        ],
      },
    ],
    maxTokens: 300,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("chatCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.ChatCompletionRequest](../../models/chatcompletionrequest.md)                                                                                                          | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.CreateChatCompletionResponse](../../models/createchatcompletionresponse.md)\>**

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