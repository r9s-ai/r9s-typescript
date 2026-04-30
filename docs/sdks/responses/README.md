# Responses

## Overview

### Available Operations

* [create](#create) - Create response

## create

Create a response with streaming support. This endpoint corresponds to OpenAI's Responses API.


### Example Usage: background_response

<!-- UsageSnippet language="typescript" operationID="createResponse" method="post" path="/v1/responses" example="background_response" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.responses.create({
    model: "Taurus",
    input: [],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { R9SCore } from "@r9s/sdk/core.js";
import { responsesCreate } from "@r9s/sdk/funcs/responsesCreate.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await responsesCreate(r9S, {
    model: "Taurus",
    input: [],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("responsesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: background_task

<!-- UsageSnippet language="typescript" operationID="createResponse" method="post" path="/v1/responses" example="background_task" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.responses.create({
    model: "gpt-4o-mini",
    input: "Analyze this large dataset and provide insights: [dataset details...]",
    instructions: "You are a data analyst",
    temperature: 0.3,
    maxOutputTokens: 5000,
    background: true,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { R9SCore } from "@r9s/sdk/core.js";
import { responsesCreate } from "@r9s/sdk/funcs/responsesCreate.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await responsesCreate(r9S, {
    model: "gpt-4o-mini",
    input: "Analyze this large dataset and provide insights: [dataset details...]",
    instructions: "You are a data analyst",
    temperature: 0.3,
    maxOutputTokens: 5000,
    background: true,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("responsesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: chained_conversation

<!-- UsageSnippet language="typescript" operationID="createResponse" method="post" path="/v1/responses" example="chained_conversation" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.responses.create({
    model: "gpt-4o-mini",
    input: "Can you elaborate more on the second point?",
    instructions: "You are a helpful assistant",
    maxOutputTokens: 1000,
    previousResponseId: "resp_abc123xyz456",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { R9SCore } from "@r9s/sdk/core.js";
import { responsesCreate } from "@r9s/sdk/funcs/responsesCreate.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await responsesCreate(r9S, {
    model: "gpt-4o-mini",
    input: "Can you elaborate more on the second point?",
    instructions: "You are a helpful assistant",
    maxOutputTokens: 1000,
    previousResponseId: "resp_abc123xyz456",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("responsesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: failed_response

<!-- UsageSnippet language="typescript" operationID="createResponse" method="post" path="/v1/responses" example="failed_response" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.responses.create({
    model: "Taurus",
    input: [],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { R9SCore } from "@r9s/sdk/core.js";
import { responsesCreate } from "@r9s/sdk/funcs/responsesCreate.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await responsesCreate(r9S, {
    model: "Taurus",
    input: [],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("responsesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: incomplete_response

<!-- UsageSnippet language="typescript" operationID="createResponse" method="post" path="/v1/responses" example="incomplete_response" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.responses.create({
    model: "Taurus",
    input: [],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { R9SCore } from "@r9s/sdk/core.js";
import { responsesCreate } from "@r9s/sdk/funcs/responsesCreate.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await responsesCreate(r9S, {
    model: "Taurus",
    input: [],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("responsesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: json_mode

<!-- UsageSnippet language="typescript" operationID="createResponse" method="post" path="/v1/responses" example="json_mode" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.responses.create({
    model: "gpt-4o-mini",
    input: "Extract person information and return as JSON: John Smith is 35 years old and works as a software engineer in San Francisco",
    instructions: "Extract structured data and output in JSON format",
    maxOutputTokens: 500,
    text: {
      format: {
        type: "json_object",
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
import { responsesCreate } from "@r9s/sdk/funcs/responsesCreate.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await responsesCreate(r9S, {
    model: "gpt-4o-mini",
    input: "Extract person information and return as JSON: John Smith is 35 years old and works as a software engineer in San Francisco",
    instructions: "Extract structured data and output in JSON format",
    maxOutputTokens: 500,
    text: {
      format: {
        type: "json_object",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("responsesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: json_output_response

<!-- UsageSnippet language="typescript" operationID="createResponse" method="post" path="/v1/responses" example="json_output_response" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.responses.create({
    model: "Taurus",
    input: [],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { R9SCore } from "@r9s/sdk/core.js";
import { responsesCreate } from "@r9s/sdk/funcs/responsesCreate.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await responsesCreate(r9S, {
    model: "Taurus",
    input: [],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("responsesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: json_schema

<!-- UsageSnippet language="typescript" operationID="createResponse" method="post" path="/v1/responses" example="json_schema" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.responses.create({
    model: "gpt-4o-mini",
    input: "Generate a user profile for software developer Alice Chen in JSON format",
    instructions: "Create a detailed user profile following the schema",
    maxOutputTokens: 800,
    text: {
      format: {
        type: "json_schema",
        name: "user_profile",
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
            "location": {
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
            "age",
            "occupation",
            "location",
            "skills",
          ],
          "additionalProperties": false,
        },
        strict: true,
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
import { responsesCreate } from "@r9s/sdk/funcs/responsesCreate.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await responsesCreate(r9S, {
    model: "gpt-4o-mini",
    input: "Generate a user profile for software developer Alice Chen in JSON format",
    instructions: "Create a detailed user profile following the schema",
    maxOutputTokens: 800,
    text: {
      format: {
        type: "json_schema",
        name: "user_profile",
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
            "location": {
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
            "age",
            "occupation",
            "location",
            "skills",
          ],
          "additionalProperties": false,
        },
        strict: true,
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("responsesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: multi_tool_call

<!-- UsageSnippet language="typescript" operationID="createResponse" method="post" path="/v1/responses" example="multi_tool_call" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.responses.create({
    model: "gpt-4o-mini",
    input: [
      {
        role: "user",
        content: "Book a flight from NYC to London on Dec 25th and check the weather there",
      },
    ],
    instructions: "You are a travel assistant. Use tools to help users with travel planning.",
    maxOutputTokens: 3000,
    tools: [
      {
        type: "function",
        name: "search_flights",
        description: "Search for available flights",
        parameters: {
          type: "object",
          properties: {
            "origin": {
              "type": "string",
              "description": "Departure city",
            },
            "destination": {
              "type": "string",
              "description": "Arrival city",
            },
            "date": {
              "type": "string",
              "description": "Travel date in YYYY-MM-DD format",
            },
          },
          required: [
            "origin",
            "destination",
            "date",
          ],
        },
      },
      {
        type: "function",
        name: "get_weather",
        description: "Get weather forecast",
        parameters: {
          type: "object",
          properties: {
            "location": {
              "type": "string",
            },
            "date": {
              "type": "string",
            },
          },
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
import { responsesCreate } from "@r9s/sdk/funcs/responsesCreate.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await responsesCreate(r9S, {
    model: "gpt-4o-mini",
    input: [
      {
        role: "user",
        content: "Book a flight from NYC to London on Dec 25th and check the weather there",
      },
    ],
    instructions: "You are a travel assistant. Use tools to help users with travel planning.",
    maxOutputTokens: 3000,
    tools: [
      {
        type: "function",
        name: "search_flights",
        description: "Search for available flights",
        parameters: {
          type: "object",
          properties: {
            "origin": {
              "type": "string",
              "description": "Departure city",
            },
            "destination": {
              "type": "string",
              "description": "Arrival city",
            },
            "date": {
              "type": "string",
              "description": "Travel date in YYYY-MM-DD format",
            },
          },
          required: [
            "origin",
            "destination",
            "date",
          ],
        },
      },
      {
        type: "function",
        name: "get_weather",
        description: "Get weather forecast",
        parameters: {
          type: "object",
          properties: {
            "location": {
              "type": "string",
            },
            "date": {
              "type": "string",
            },
          },
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
    console.log("responsesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: multi_turn_conversation

<!-- UsageSnippet language="typescript" operationID="createResponse" method="post" path="/v1/responses" example="multi_turn_conversation" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.responses.create({
    model: "qwen-plus",
    input: [
      {
        role: "user",
        content: "What is artificial intelligence?",
      },
      {
        role: "assistant",
        content: "Artificial intelligence (AI) is...",
      },
      {
        role: "user",
        content: "Can you give me some examples?",
      },
    ],
    instructions: "You are a knowledgeable AI tutor",
    maxOutputTokens: 2000,
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
import { responsesCreate } from "@r9s/sdk/funcs/responsesCreate.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await responsesCreate(r9S, {
    model: "qwen-plus",
    input: [
      {
        role: "user",
        content: "What is artificial intelligence?",
      },
      {
        role: "assistant",
        content: "Artificial intelligence (AI) is...",
      },
      {
        role: "user",
        content: "Can you give me some examples?",
      },
    ],
    instructions: "You are a knowledgeable AI tutor",
    maxOutputTokens: 2000,
    stream: true,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("responsesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: reasoning_mode

<!-- UsageSnippet language="typescript" operationID="createResponse" method="post" path="/v1/responses" example="reasoning_mode" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.responses.create({
    model: "gpt-5-codex",
    input: "A farmer needs to transport a fox, a chicken, and a bag of grain across a river. The boat can only carry the farmer and one item. If left alone, the fox will eat the chicken, and the chicken will eat the grain. How can the farmer get everything across safely?",
    instructions: "Think through this step by step",
    maxOutputTokens: 3000,
    reasoning: {
      effort: "high",
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
import { responsesCreate } from "@r9s/sdk/funcs/responsesCreate.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await responsesCreate(r9S, {
    model: "gpt-5-codex",
    input: "A farmer needs to transport a fox, a chicken, and a bag of grain across a river. The boat can only carry the farmer and one item. If left alone, the fox will eat the chicken, and the chicken will eat the grain. How can the farmer get everything across safely?",
    instructions: "Think through this step by step",
    maxOutputTokens: 3000,
    reasoning: {
      effort: "high",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("responsesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: required_tool

<!-- UsageSnippet language="typescript" operationID="createResponse" method="post" path="/v1/responses" example="required_tool" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.responses.create({
    model: "gpt-4o-mini",
    input: "Search for recent news about artificial intelligence",
    instructions: "You must use the search tool to find current information",
    maxOutputTokens: 2000,
    tools: [
      {
        type: "function",
        name: "web_search",
        description: "Search the web for information",
        parameters: {
          type: "object",
          properties: {
            "query": {
              "type": "string",
            },
            "num_results": {
              "type": "integer",
            },
          },
          required: [
            "query",
          ],
        },
      },
    ],
    toolChoice: "required",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { R9SCore } from "@r9s/sdk/core.js";
import { responsesCreate } from "@r9s/sdk/funcs/responsesCreate.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await responsesCreate(r9S, {
    model: "gpt-4o-mini",
    input: "Search for recent news about artificial intelligence",
    instructions: "You must use the search tool to find current information",
    maxOutputTokens: 2000,
    tools: [
      {
        type: "function",
        name: "web_search",
        description: "Search the web for information",
        parameters: {
          type: "object",
          properties: {
            "query": {
              "type": "string",
            },
            "num_results": {
              "type": "integer",
            },
          },
          required: [
            "query",
          ],
        },
      },
    ],
    toolChoice: "required",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("responsesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: response_with_tool_calls

<!-- UsageSnippet language="typescript" operationID="createResponse" method="post" path="/v1/responses" example="response_with_tool_calls" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.responses.create({
    model: "Taurus",
    input: [],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { R9SCore } from "@r9s/sdk/core.js";
import { responsesCreate } from "@r9s/sdk/funcs/responsesCreate.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await responsesCreate(r9S, {
    model: "Taurus",
    input: [],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("responsesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: simple_streaming

<!-- UsageSnippet language="typescript" operationID="createResponse" method="post" path="/v1/responses" example="simple_streaming" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.responses.create({
    model: "gpt-4o-mini",
    input: "Write a short poem about the ocean",
    instructions: "You are a creative poet",
    temperature: 0.9,
    maxOutputTokens: 500,
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
import { responsesCreate } from "@r9s/sdk/funcs/responsesCreate.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await responsesCreate(r9S, {
    model: "gpt-4o-mini",
    input: "Write a short poem about the ocean",
    instructions: "You are a creative poet",
    temperature: 0.9,
    maxOutputTokens: 500,
    stream: true,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("responsesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: simple_string

<!-- UsageSnippet language="typescript" operationID="createResponse" method="post" path="/v1/responses" example="simple_string" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.responses.create({
    model: "gpt-4o-mini",
    input: "Tell me a joke about programming",
    instructions: "You are a funny assistant",
    temperature: 0.7,
    maxOutputTokens: 500,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { R9SCore } from "@r9s/sdk/core.js";
import { responsesCreate } from "@r9s/sdk/funcs/responsesCreate.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await responsesCreate(r9S, {
    model: "gpt-4o-mini",
    input: "Tell me a joke about programming",
    instructions: "You are a funny assistant",
    temperature: 0.7,
    maxOutputTokens: 500,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("responsesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: simple_text_response

<!-- UsageSnippet language="typescript" operationID="createResponse" method="post" path="/v1/responses" example="simple_text_response" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.responses.create({
    model: "Taurus",
    input: [],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { R9SCore } from "@r9s/sdk/core.js";
import { responsesCreate } from "@r9s/sdk/funcs/responsesCreate.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await responsesCreate(r9S, {
    model: "Taurus",
    input: [],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("responsesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: streaming_with_tools

<!-- UsageSnippet language="typescript" operationID="createResponse" method="post" path="/v1/responses" example="streaming_with_tools" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.responses.create({
    model: "gpt-4o-mini",
    input: [
      {
        role: "user",
        content: "Calculate 15% tip on a $85.50 bill and tell me the total",
      },
    ],
    instructions: "You are a helpful calculator assistant",
    maxOutputTokens: 1000,
    stream: true,
    tools: [
      {
        type: "function",
        name: "calculate",
        description: "Perform mathematical calculations",
        parameters: {
          type: "object",
          properties: {
            "expression": {
              "type": "string",
              "description": "Mathematical expression to evaluate",
            },
          },
          required: [
            "expression",
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
import { responsesCreate } from "@r9s/sdk/funcs/responsesCreate.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await responsesCreate(r9S, {
    model: "gpt-4o-mini",
    input: [
      {
        role: "user",
        content: "Calculate 15% tip on a $85.50 bill and tell me the total",
      },
    ],
    instructions: "You are a helpful calculator assistant",
    maxOutputTokens: 1000,
    stream: true,
    tools: [
      {
        type: "function",
        name: "calculate",
        description: "Perform mathematical calculations",
        parameters: {
          type: "object",
          properties: {
            "expression": {
              "type": "string",
              "description": "Mathematical expression to evaluate",
            },
          },
          required: [
            "expression",
          ],
        },
      },
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("responsesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: tool_result_flow

<!-- UsageSnippet language="typescript" operationID="createResponse" method="post" path="/v1/responses" example="tool_result_flow" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.responses.create({
    model: "gpt-4o-mini",
    input: [
      {
        role: "user",
        content: "What's the weather in Tokyo?",
      },
      {
        role: "assistant",
        content: "I'll check the weather for you.",
      },
      {
        role: "user",
        content: "The weather tool returned: temperature 22°C, condition sunny, humidity 60%",
      },
    ],
    instructions: "You are a helpful assistant. Synthesize tool results naturally.",
    maxOutputTokens: 500,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { R9SCore } from "@r9s/sdk/core.js";
import { responsesCreate } from "@r9s/sdk/funcs/responsesCreate.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await responsesCreate(r9S, {
    model: "gpt-4o-mini",
    input: [
      {
        role: "user",
        content: "What's the weather in Tokyo?",
      },
      {
        role: "assistant",
        content: "I'll check the weather for you.",
      },
      {
        role: "user",
        content: "The weather tool returned: temperature 22°C, condition sunny, humidity 60%",
      },
    ],
    instructions: "You are a helpful assistant. Synthesize tool results naturally.",
    maxOutputTokens: 500,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("responsesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: with_messages

<!-- UsageSnippet language="typescript" operationID="createResponse" method="post" path="/v1/responses" example="with_messages" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.responses.create({
    model: "gpt-4o-mini",
    input: [
      {
        role: "user",
        content: "Hello, how are you?",
      },
    ],
    instructions: "You are a helpful assistant",
    maxOutputTokens: 1000,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { R9SCore } from "@r9s/sdk/core.js";
import { responsesCreate } from "@r9s/sdk/funcs/responsesCreate.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await responsesCreate(r9S, {
    model: "gpt-4o-mini",
    input: [
      {
        role: "user",
        content: "Hello, how are you?",
      },
    ],
    instructions: "You are a helpful assistant",
    maxOutputTokens: 1000,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("responsesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: with_metadata

<!-- UsageSnippet language="typescript" operationID="createResponse" method="post" path="/v1/responses" example="with_metadata" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.responses.create({
    model: "gpt-4o-mini",
    input: "Summarize the key points from our discussion",
    instructions: "You are a meeting assistant",
    temperature: 0.5,
    topP: 0.9,
    maxOutputTokens: 1500,
    metadata: {
      "user_id": "user_12345",
      "session_id": "session_abc",
      "conversation_id": "conv_xyz",
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
import { responsesCreate } from "@r9s/sdk/funcs/responsesCreate.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await responsesCreate(r9S, {
    model: "gpt-4o-mini",
    input: "Summarize the key points from our discussion",
    instructions: "You are a meeting assistant",
    temperature: 0.5,
    topP: 0.9,
    maxOutputTokens: 1500,
    metadata: {
      "user_id": "user_12345",
      "session_id": "session_abc",
      "conversation_id": "conv_xyz",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("responsesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: with_tools

<!-- UsageSnippet language="typescript" operationID="createResponse" method="post" path="/v1/responses" example="with_tools" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.responses.create({
    model: "gpt-4o-mini",
    input: [
      {
        role: "user",
        content: "What's the weather like in San Francisco?",
      },
    ],
    instructions: "You are a helpful assistant with access to tools",
    temperature: 0.7,
    maxOutputTokens: 2000,
    modalities: [
      "text",
    ],
    tools: [
      {
        type: "function",
        name: "get_weather",
        description: "Get the current weather in a location",
        parameters: {
          type: "object",
          properties: {
            "location": {
              "type": "string",
            },
          },
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
import { responsesCreate } from "@r9s/sdk/funcs/responsesCreate.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await responsesCreate(r9S, {
    model: "gpt-4o-mini",
    input: [
      {
        role: "user",
        content: "What's the weather like in San Francisco?",
      },
    ],
    instructions: "You are a helpful assistant with access to tools",
    temperature: 0.7,
    maxOutputTokens: 2000,
    modalities: [
      "text",
    ],
    tools: [
      {
        type: "function",
        name: "get_weather",
        description: "Get the current weather in a location",
        parameters: {
          type: "object",
          properties: {
            "location": {
              "type": "string",
            },
          },
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
    console.log("responsesCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.ResponseRequest](../../models/responserequest.md)                                                                                                                      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.CreateResponseResponse](../../models/createresponseresponse.md)\>**

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