# Gemini

## Overview

### Available Operations

* [generateContent](#generatecontent) - Generate content (non-streaming)
* [streamGenerateContent](#streamgeneratecontent) - Generate content (streaming)
* [embedContent](#embedcontent) - Generate embeddings
* [batchGenerateContent](#batchgeneratecontent) - Create async batch generation job

## generateContent

Generates a model response given an input GenerateContentRequest.
This endpoint supports multimodal inputs (text, images, audio, video, PDFs) and conversation history.


### Example Usage: audio_transcription

<!-- UsageSnippet language="typescript" operationID="generateContent" method="post" path="/v1beta/models/{model}:generateContent" example="audio_transcription" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.gemini.generateContent("models/gemini-3-flash", {
    contents: [
      {
        parts: [
          {
            text: "Transcribe this audio and summarize the main points",
          },
          {
            inlineData: {
              mimeType: "audio/mp3",
              data: "SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAA...",
            },
          },
        ],
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
import { geminiGenerateContent } from "@r9s/sdk/funcs/geminiGenerateContent.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await geminiGenerateContent(r9S, "models/gemini-3-flash", {
    contents: [
      {
        parts: [
          {
            text: "Transcribe this audio and summarize the main points",
          },
          {
            inlineData: {
              mimeType: "audio/mp3",
              data: "SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAA...",
            },
          },
        ],
      },
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("geminiGenerateContent failed:", res.error);
  }
}

run();
```
### Example Usage: chat_with_history

<!-- UsageSnippet language="typescript" operationID="generateContent" method="post" path="/v1beta/models/{model}:generateContent" example="chat_with_history" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.gemini.generateContent("models/gemini-3-flash", {
    contents: [
      {
        role: "user",
        parts: [
          {
            text: "Hello! I need help with my code.",
          },
        ],
      },
      {
        role: "model",
        parts: [
          {
            text: "Great to meet you. What would you like to know?",
          },
        ],
      },
      {
        role: "user",
        parts: [
          {
            text: "How do I reverse a string in Python?",
          },
        ],
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
import { geminiGenerateContent } from "@r9s/sdk/funcs/geminiGenerateContent.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await geminiGenerateContent(r9S, "models/gemini-3-flash", {
    contents: [
      {
        role: "user",
        parts: [
          {
            text: "Hello! I need help with my code.",
          },
        ],
      },
      {
        role: "model",
        parts: [
          {
            text: "Great to meet you. What would you like to know?",
          },
        ],
      },
      {
        role: "user",
        parts: [
          {
            text: "How do I reverse a string in Python?",
          },
        ],
      },
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("geminiGenerateContent failed:", res.error);
  }
}

run();
```
### Example Usage: file_uri_image

<!-- UsageSnippet language="typescript" operationID="generateContent" method="post" path="/v1beta/models/{model}:generateContent" example="file_uri_image" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.gemini.generateContent("models/gemini-3-flash", {
    contents: [
      {
        parts: [
          {
            text: "Analyze this image from Cloud Storage",
          },
          {
            fileData: {
              mimeType: "image/jpeg",
              fileUri: "gs://my-bucket/images/photo.jpg",
            },
          },
        ],
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
import { geminiGenerateContent } from "@r9s/sdk/funcs/geminiGenerateContent.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await geminiGenerateContent(r9S, "models/gemini-3-flash", {
    contents: [
      {
        parts: [
          {
            text: "Analyze this image from Cloud Storage",
          },
          {
            fileData: {
              mimeType: "image/jpeg",
              fileUri: "gs://my-bucket/images/photo.jpg",
            },
          },
        ],
      },
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("geminiGenerateContent failed:", res.error);
  }
}

run();
```
### Example Usage: function_call_response

<!-- UsageSnippet language="typescript" operationID="generateContent" method="post" path="/v1beta/models/{model}:generateContent" example="function_call_response" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.gemini.generateContent("models/gemini-3-flash", {
    contents: [
      {
        parts: [],
      },
    ],
    generationConfig: {
      temperature: 0.7,
      topP: 0.95,
      topK: 40,
      candidateCount: 1,
      maxOutputTokens: 8192,
      stopSequences: [
        "\n\n",
      ],
      responseMimeType: "image/png",
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
import { geminiGenerateContent } from "@r9s/sdk/funcs/geminiGenerateContent.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await geminiGenerateContent(r9S, "models/gemini-3-flash", {
    contents: [
      {
        parts: [],
      },
    ],
    generationConfig: {
      temperature: 0.7,
      topP: 0.95,
      topK: 40,
      candidateCount: 1,
      maxOutputTokens: 8192,
      stopSequences: [
        "\n\n",
      ],
      responseMimeType: "image/png",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("geminiGenerateContent failed:", res.error);
  }
}

run();
```
### Example Usage: function_calling

<!-- UsageSnippet language="typescript" operationID="generateContent" method="post" path="/v1beta/models/{model}:generateContent" example="function_calling" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.gemini.generateContent("models/gemini-3-flash", {
    contents: [
      {
        parts: [
          {
            text: "What's the weather in San Francisco?",
          },
        ],
      },
    ],
    tools: [
      {
        functionDeclarations: [
          {
            name: "get_current_weather",
            description: "Get the current weather in a given location",
            parameters: {},
          },
        ],
      },
    ],
    toolConfig: {
      functionCallingConfig: {
        mode: "AUTO",
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
import { geminiGenerateContent } from "@r9s/sdk/funcs/geminiGenerateContent.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await geminiGenerateContent(r9S, "models/gemini-3-flash", {
    contents: [
      {
        parts: [
          {
            text: "What's the weather in San Francisco?",
          },
        ],
      },
    ],
    tools: [
      {
        functionDeclarations: [
          {
            name: "get_current_weather",
            description: "Get the current weather in a given location",
            parameters: {},
          },
        ],
      },
    ],
    toolConfig: {
      functionCallingConfig: {
        mode: "AUTO",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("geminiGenerateContent failed:", res.error);
  }
}

run();
```
### Example Usage: image_analysis

<!-- UsageSnippet language="typescript" operationID="generateContent" method="post" path="/v1beta/models/{model}:generateContent" example="image_analysis" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.gemini.generateContent("models/gemini-3-flash", {
    contents: [
      {
        parts: [
          {
            text: "What's in this image?",
          },
          {
            inlineData: {
              mimeType: "image/jpeg",
              data: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAA...",
            },
          },
        ],
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
import { geminiGenerateContent } from "@r9s/sdk/funcs/geminiGenerateContent.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await geminiGenerateContent(r9S, "models/gemini-3-flash", {
    contents: [
      {
        parts: [
          {
            text: "What's in this image?",
          },
          {
            inlineData: {
              mimeType: "image/jpeg",
              data: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAA...",
            },
          },
        ],
      },
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("geminiGenerateContent failed:", res.error);
  }
}

run();
```
### Example Usage: image_generation

<!-- UsageSnippet language="typescript" operationID="generateContent" method="post" path="/v1beta/models/{model}:generateContent" example="image_generation" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.gemini.generateContent("models/gemini-3-flash", {
    contents: [
      {
        parts: [
          {
            text: "Generate a watercolor illustration of a lighthouse at sunset",
          },
        ],
      },
    ],
    generationConfig: {
      responseMimeType: "image/png",
    },
    safetySettings: [
      {
        category: "HARM_CATEGORY_HATE_SPEECH",
        threshold: "BLOCK_MEDIUM_AND_ABOVE",
      },
    ],
    systemInstruction: {
      parts: [
        {
          text: "You are an image generation assistant. Produce a single high-quality image.",
        },
      ],
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
import { geminiGenerateContent } from "@r9s/sdk/funcs/geminiGenerateContent.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await geminiGenerateContent(r9S, "models/gemini-3-flash", {
    contents: [
      {
        parts: [
          {
            text: "Generate a watercolor illustration of a lighthouse at sunset",
          },
        ],
      },
    ],
    generationConfig: {
      responseMimeType: "image/png",
    },
    safetySettings: [
      {
        category: "HARM_CATEGORY_HATE_SPEECH",
        threshold: "BLOCK_MEDIUM_AND_ABOVE",
      },
    ],
    systemInstruction: {
      parts: [
        {
          text: "You are an image generation assistant. Produce a single high-quality image.",
        },
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("geminiGenerateContent failed:", res.error);
  }
}

run();
```
### Example Usage: image_response

<!-- UsageSnippet language="typescript" operationID="generateContent" method="post" path="/v1beta/models/{model}:generateContent" example="image_response" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.gemini.generateContent("models/gemini-3-flash", {
    contents: [
      {
        parts: [],
      },
    ],
    generationConfig: {
      temperature: 0.7,
      topP: 0.95,
      topK: 40,
      candidateCount: 1,
      maxOutputTokens: 8192,
      stopSequences: [
        "\n\n",
      ],
      responseMimeType: "image/png",
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
import { geminiGenerateContent } from "@r9s/sdk/funcs/geminiGenerateContent.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await geminiGenerateContent(r9S, "models/gemini-3-flash", {
    contents: [
      {
        parts: [],
      },
    ],
    generationConfig: {
      temperature: 0.7,
      topP: 0.95,
      topK: 40,
      candidateCount: 1,
      maxOutputTokens: 8192,
      stopSequences: [
        "\n\n",
      ],
      responseMimeType: "image/png",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("geminiGenerateContent failed:", res.error);
  }
}

run();
```
### Example Usage: json_mode

<!-- UsageSnippet language="typescript" operationID="generateContent" method="post" path="/v1beta/models/{model}:generateContent" example="json_mode" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.gemini.generateContent("models/gemini-3-flash", {
    contents: [
      {
        parts: [
          {
            text: "List 5 popular cookie recipes",
          },
        ],
      },
    ],
    generationConfig: {
      responseMimeType: "application/json",
      responseSchema: {},
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
import { geminiGenerateContent } from "@r9s/sdk/funcs/geminiGenerateContent.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await geminiGenerateContent(r9S, "models/gemini-3-flash", {
    contents: [
      {
        parts: [
          {
            text: "List 5 popular cookie recipes",
          },
        ],
      },
    ],
    generationConfig: {
      responseMimeType: "application/json",
      responseSchema: {},
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("geminiGenerateContent failed:", res.error);
  }
}

run();
```
### Example Usage: json_response

<!-- UsageSnippet language="typescript" operationID="generateContent" method="post" path="/v1beta/models/{model}:generateContent" example="json_response" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.gemini.generateContent("models/gemini-3-flash", {
    contents: [
      {
        parts: [],
      },
    ],
    generationConfig: {
      temperature: 0.7,
      topP: 0.95,
      topK: 40,
      candidateCount: 1,
      maxOutputTokens: 8192,
      stopSequences: [
        "\n\n",
      ],
      responseMimeType: "image/png",
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
import { geminiGenerateContent } from "@r9s/sdk/funcs/geminiGenerateContent.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await geminiGenerateContent(r9S, "models/gemini-3-flash", {
    contents: [
      {
        parts: [],
      },
    ],
    generationConfig: {
      temperature: 0.7,
      topP: 0.95,
      topK: 40,
      candidateCount: 1,
      maxOutputTokens: 8192,
      stopSequences: [
        "\n\n",
      ],
      responseMimeType: "image/png",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("geminiGenerateContent failed:", res.error);
  }
}

run();
```
### Example Usage: pdf_analysis

<!-- UsageSnippet language="typescript" operationID="generateContent" method="post" path="/v1beta/models/{model}:generateContent" example="pdf_analysis" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.gemini.generateContent("models/gemini-3-flash", {
    contents: [
      {
        parts: [
          {
            text: "Summarize the key points from this PDF document",
          },
          {
            inlineData: {
              mimeType: "application/pdf",
              data: "JVBERi0xLjQKJeLjz9MKMSAwIG9iago8PC9UeXBlIC9DYXRhbG9nCi9QYWdlcyAy...",
            },
          },
        ],
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
import { geminiGenerateContent } from "@r9s/sdk/funcs/geminiGenerateContent.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await geminiGenerateContent(r9S, "models/gemini-3-flash", {
    contents: [
      {
        parts: [
          {
            text: "Summarize the key points from this PDF document",
          },
          {
            inlineData: {
              mimeType: "application/pdf",
              data: "JVBERi0xLjQKJeLjz9MKMSAwIG9iago8PC9UeXBlIC9DYXRhbG9nCi9QYWdlcyAy...",
            },
          },
        ],
      },
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("geminiGenerateContent failed:", res.error);
  }
}

run();
```
### Example Usage: simple_text

<!-- UsageSnippet language="typescript" operationID="generateContent" method="post" path="/v1beta/models/{model}:generateContent" example="simple_text" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.gemini.generateContent("models/gemini-3-flash", {
    contents: [
      {
        parts: [
          {
            text: "Write a story about a magic backpack.",
          },
        ],
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
import { geminiGenerateContent } from "@r9s/sdk/funcs/geminiGenerateContent.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await geminiGenerateContent(r9S, "models/gemini-3-flash", {
    contents: [
      {
        parts: [
          {
            text: "Write a story about a magic backpack.",
          },
        ],
      },
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("geminiGenerateContent failed:", res.error);
  }
}

run();
```
### Example Usage: text_response

<!-- UsageSnippet language="typescript" operationID="generateContent" method="post" path="/v1beta/models/{model}:generateContent" example="text_response" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.gemini.generateContent("models/gemini-3-flash", {
    contents: [
      {
        parts: [],
      },
    ],
    generationConfig: {
      temperature: 0.7,
      topP: 0.95,
      topK: 40,
      candidateCount: 1,
      maxOutputTokens: 8192,
      stopSequences: [
        "\n\n",
      ],
      responseMimeType: "image/png",
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
import { geminiGenerateContent } from "@r9s/sdk/funcs/geminiGenerateContent.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await geminiGenerateContent(r9S, "models/gemini-3-flash", {
    contents: [
      {
        parts: [],
      },
    ],
    generationConfig: {
      temperature: 0.7,
      topP: 0.95,
      topK: 40,
      candidateCount: 1,
      maxOutputTokens: 8192,
      stopSequences: [
        "\n\n",
      ],
      responseMimeType: "image/png",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("geminiGenerateContent failed:", res.error);
  }
}

run();
```
### Example Usage: video_analysis

<!-- UsageSnippet language="typescript" operationID="generateContent" method="post" path="/v1beta/models/{model}:generateContent" example="video_analysis" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.gemini.generateContent("models/gemini-3-flash", {
    contents: [
      {
        parts: [
          {
            text: "Describe what happens in this video",
          },
          {
            inlineData: {
              mimeType: "video/mp4",
              data: "AAAAIGZ0eXBpc29tAAACAGlzb21pc28yYXZjMW1wNDE...",
            },
          },
        ],
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
import { geminiGenerateContent } from "@r9s/sdk/funcs/geminiGenerateContent.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await geminiGenerateContent(r9S, "models/gemini-3-flash", {
    contents: [
      {
        parts: [
          {
            text: "Describe what happens in this video",
          },
          {
            inlineData: {
              mimeType: "video/mp4",
              data: "AAAAIGZ0eXBpc29tAAACAGlzb21pc28yYXZjMW1wNDE...",
            },
          },
        ],
      },
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("geminiGenerateContent failed:", res.error);
  }
}

run();
```
### Example Usage: video_response

<!-- UsageSnippet language="typescript" operationID="generateContent" method="post" path="/v1beta/models/{model}:generateContent" example="video_response" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.gemini.generateContent("models/gemini-3-flash", {
    contents: [
      {
        parts: [],
      },
    ],
    generationConfig: {
      temperature: 0.7,
      topP: 0.95,
      topK: 40,
      candidateCount: 1,
      maxOutputTokens: 8192,
      stopSequences: [
        "\n\n",
      ],
      responseMimeType: "image/png",
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
import { geminiGenerateContent } from "@r9s/sdk/funcs/geminiGenerateContent.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await geminiGenerateContent(r9S, "models/gemini-3-flash", {
    contents: [
      {
        parts: [],
      },
    ],
    generationConfig: {
      temperature: 0.7,
      topP: 0.95,
      topK: 40,
      candidateCount: 1,
      maxOutputTokens: 8192,
      stopSequences: [
        "\n\n",
      ],
      responseMimeType: "image/png",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("geminiGenerateContent failed:", res.error);
  }
}

run();
```
### Example Usage: with_system_instruction

<!-- UsageSnippet language="typescript" operationID="generateContent" method="post" path="/v1beta/models/{model}:generateContent" example="with_system_instruction" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.gemini.generateContent("models/gemini-3-flash", {
    contents: [
      {
        parts: [
          {
            text: "Explain async/await in JavaScript",
          },
        ],
      },
    ],
    generationConfig: {
      temperature: 0.7,
      topP: 0.95,
      topK: 40,
      maxOutputTokens: 2048,
    },
    systemInstruction: {
      parts: [
        {
          text: "You are a helpful coding assistant. Always provide clear explanations with code examples.",
        },
      ],
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
import { geminiGenerateContent } from "@r9s/sdk/funcs/geminiGenerateContent.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await geminiGenerateContent(r9S, "models/gemini-3-flash", {
    contents: [
      {
        parts: [
          {
            text: "Explain async/await in JavaScript",
          },
        ],
      },
    ],
    generationConfig: {
      temperature: 0.7,
      topP: 0.95,
      topK: 40,
      maxOutputTokens: 2048,
    },
    systemInstruction: {
      parts: [
        {
          text: "You are a helpful coding assistant. Always provide clear explanations with code examples.",
        },
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("geminiGenerateContent failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `model`                                                                                                                                                                        | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The model resource name in format models/{model}.<br/>Examples: models/gemini-3-flash, models/gemini-3-pro,<br/>                                                               | models/gemini-3-flash                                                                                                                                                          |
| `geminiGenerateContentRequest`                                                                                                                                                 | [models.GeminiGenerateContentRequest](../../models/geminigeneratecontentrequest.md)                                                                                            | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[models.GeminiGenerateContentResponse](../../models/geminigeneratecontentresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.BadRequestError     | 400                        | application/json           |
| errors.AuthenticationError | 401                        | application/json           |
| errors.RateLimitError      | 429                        | application/json           |
| errors.InternalServerError | 500                        | application/json           |
| errors.R9SDefaultError     | 4XX, 5XX                   | \*/\*                      |

## streamGenerateContent

Generates a streamed response from the model given an input GenerateContentRequest.
The response is returned as Server-Sent Events (SSE) for real-time streaming.


### Example Usage: simple_stream

<!-- UsageSnippet language="typescript" operationID="streamGenerateContent" method="post" path="/v1beta/models/{model}:streamGenerateContent" example="simple_stream" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.gemini.streamGenerateContent("models/gemini-3-flash", {
    contents: [
      {
        parts: [
          {
            text: "Tell me a story about a robot learning to paint.",
          },
        ],
      },
    ],
  });

  for await (const event of result) {
    console.log(event);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { R9SCore } from "@r9s/sdk/core.js";
import { geminiStreamGenerateContent } from "@r9s/sdk/funcs/geminiStreamGenerateContent.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await geminiStreamGenerateContent(r9S, "models/gemini-3-flash", {
    contents: [
      {
        parts: [
          {
            text: "Tell me a story about a robot learning to paint.",
          },
        ],
      },
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const event of result) {
    console.log(event);
  }
  } else {
    console.log("geminiStreamGenerateContent failed:", res.error);
  }
}

run();
```
### Example Usage: stream_chunks

<!-- UsageSnippet language="typescript" operationID="streamGenerateContent" method="post" path="/v1beta/models/{model}:streamGenerateContent" example="stream_chunks" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.gemini.streamGenerateContent("models/gemini-3-flash", {
    contents: [
      {
        parts: [],
      },
    ],
    generationConfig: {
      temperature: 0.7,
      topP: 0.95,
      topK: 40,
      candidateCount: 1,
      maxOutputTokens: 8192,
      stopSequences: [
        "\n\n",
      ],
      responseMimeType: "image/png",
    },
  });

  for await (const event of result) {
    console.log(event);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { R9SCore } from "@r9s/sdk/core.js";
import { geminiStreamGenerateContent } from "@r9s/sdk/funcs/geminiStreamGenerateContent.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await geminiStreamGenerateContent(r9S, "models/gemini-3-flash", {
    contents: [
      {
        parts: [],
      },
    ],
    generationConfig: {
      temperature: 0.7,
      topP: 0.95,
      topK: 40,
      candidateCount: 1,
      maxOutputTokens: 8192,
      stopSequences: [
        "\n\n",
      ],
      responseMimeType: "image/png",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const event of result) {
    console.log(event);
  }
  } else {
    console.log("geminiStreamGenerateContent failed:", res.error);
  }
}

run();
```
### Example Usage: streaming_chat

<!-- UsageSnippet language="typescript" operationID="streamGenerateContent" method="post" path="/v1beta/models/{model}:streamGenerateContent" example="streaming_chat" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.gemini.streamGenerateContent("models/gemini-3-flash", {
    contents: [
      {
        role: "user",
        parts: [
          {
            text: "Explain quantum computing",
          },
        ],
      },
    ],
    generationConfig: {
      temperature: 0.8,
      maxOutputTokens: 1024,
    },
  });

  for await (const event of result) {
    console.log(event);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { R9SCore } from "@r9s/sdk/core.js";
import { geminiStreamGenerateContent } from "@r9s/sdk/funcs/geminiStreamGenerateContent.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await geminiStreamGenerateContent(r9S, "models/gemini-3-flash", {
    contents: [
      {
        role: "user",
        parts: [
          {
            text: "Explain quantum computing",
          },
        ],
      },
    ],
    generationConfig: {
      temperature: 0.8,
      maxOutputTokens: 1024,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const event of result) {
    console.log(event);
  }
  } else {
    console.log("geminiStreamGenerateContent failed:", res.error);
  }
}

run();
```
### Example Usage: streaming_function_calling

<!-- UsageSnippet language="typescript" operationID="streamGenerateContent" method="post" path="/v1beta/models/{model}:streamGenerateContent" example="streaming_function_calling" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.gemini.streamGenerateContent("models/gemini-3-flash", {
    contents: [
      {
        parts: [
          {
            text: "Search for restaurants near me and get their ratings",
          },
        ],
      },
    ],
    tools: [
      {
        functionDeclarations: [
          {
            name: "search_nearby_places",
            description: "Search for places near a location",
            parameters: {},
          },
        ],
      },
    ],
    toolConfig: {
      functionCallingConfig: {
        mode: "ANY",
      },
    },
  });

  for await (const event of result) {
    console.log(event);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { R9SCore } from "@r9s/sdk/core.js";
import { geminiStreamGenerateContent } from "@r9s/sdk/funcs/geminiStreamGenerateContent.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await geminiStreamGenerateContent(r9S, "models/gemini-3-flash", {
    contents: [
      {
        parts: [
          {
            text: "Search for restaurants near me and get their ratings",
          },
        ],
      },
    ],
    tools: [
      {
        functionDeclarations: [
          {
            name: "search_nearby_places",
            description: "Search for places near a location",
            parameters: {},
          },
        ],
      },
    ],
    toolConfig: {
      functionCallingConfig: {
        mode: "ANY",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const event of result) {
    console.log(event);
  }
  } else {
    console.log("geminiStreamGenerateContent failed:", res.error);
  }
}

run();
```
### Example Usage: streaming_json_mode

<!-- UsageSnippet language="typescript" operationID="streamGenerateContent" method="post" path="/v1beta/models/{model}:streamGenerateContent" example="streaming_json_mode" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.gemini.streamGenerateContent("models/gemini-3-flash", {
    contents: [
      {
        parts: [
          {
            text: "Generate a product catalog with 5 items",
          },
        ],
      },
    ],
    generationConfig: {
      temperature: 0.5,
      responseMimeType: "application/json",
      responseSchema: {},
    },
  });

  for await (const event of result) {
    console.log(event);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { R9SCore } from "@r9s/sdk/core.js";
import { geminiStreamGenerateContent } from "@r9s/sdk/funcs/geminiStreamGenerateContent.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await geminiStreamGenerateContent(r9S, "models/gemini-3-flash", {
    contents: [
      {
        parts: [
          {
            text: "Generate a product catalog with 5 items",
          },
        ],
      },
    ],
    generationConfig: {
      temperature: 0.5,
      responseMimeType: "application/json",
      responseSchema: {},
    },
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const event of result) {
    console.log(event);
  }
  } else {
    console.log("geminiStreamGenerateContent failed:", res.error);
  }
}

run();
```
### Example Usage: streaming_with_images

<!-- UsageSnippet language="typescript" operationID="streamGenerateContent" method="post" path="/v1beta/models/{model}:streamGenerateContent" example="streaming_with_images" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.gemini.streamGenerateContent("models/gemini-3-flash", {
    contents: [
      {
        parts: [
          {
            text: "Describe this image in detail",
          },
          {
            inlineData: {
              mimeType: "image/jpeg",
              data: "base64_encoded_image_data...",
            },
          },
        ],
      },
    ],
  });

  for await (const event of result) {
    console.log(event);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { R9SCore } from "@r9s/sdk/core.js";
import { geminiStreamGenerateContent } from "@r9s/sdk/funcs/geminiStreamGenerateContent.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await geminiStreamGenerateContent(r9S, "models/gemini-3-flash", {
    contents: [
      {
        parts: [
          {
            text: "Describe this image in detail",
          },
          {
            inlineData: {
              mimeType: "image/jpeg",
              data: "base64_encoded_image_data...",
            },
          },
        ],
      },
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const event of result) {
    console.log(event);
  }
  } else {
    console.log("geminiStreamGenerateContent failed:", res.error);
  }
}

run();
```
### Example Usage: streaming_with_system_instruction

<!-- UsageSnippet language="typescript" operationID="streamGenerateContent" method="post" path="/v1beta/models/{model}:streamGenerateContent" example="streaming_with_system_instruction" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.gemini.streamGenerateContent("models/gemini-3-flash", {
    contents: [
      {
        parts: [
          {
            text: "Write a business email about scheduling a meeting",
          },
        ],
      },
    ],
    generationConfig: {
      temperature: 0.3,
      maxOutputTokens: 512,
    },
    systemInstruction: {
      parts: [
        {
          text: "You are a professional translator. Translate all text to French and maintain formal tone.",
        },
      ],
    },
  });

  for await (const event of result) {
    console.log(event);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { R9SCore } from "@r9s/sdk/core.js";
import { geminiStreamGenerateContent } from "@r9s/sdk/funcs/geminiStreamGenerateContent.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await geminiStreamGenerateContent(r9S, "models/gemini-3-flash", {
    contents: [
      {
        parts: [
          {
            text: "Write a business email about scheduling a meeting",
          },
        ],
      },
    ],
    generationConfig: {
      temperature: 0.3,
      maxOutputTokens: 512,
    },
    systemInstruction: {
      parts: [
        {
          text: "You are a professional translator. Translate all text to French and maintain formal tone.",
        },
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const event of result) {
    console.log(event);
  }
  } else {
    console.log("geminiStreamGenerateContent failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `model`                                                                                                                                                                        | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The model resource name in format models/{model}.<br/>Examples: models/gemini-3-flash, models/gemini-3-pro<br/>                                                                | models/gemini-3-flash                                                                                                                                                          |
| `geminiGenerateContentRequest`                                                                                                                                                 | [models.GeminiGenerateContentRequest](../../models/geminigeneratecontentrequest.md)                                                                                            | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `alt`                                                                                                                                                                          | [models.Alt](../../models/alt.md)                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                             | Data format for the response (use 'sse' for server-sent events)                                                                                                                |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[EventStream<models.StreamGenerateContentResponseBody>](../../models/.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.BadRequestError     | 400                        | application/json           |
| errors.AuthenticationError | 401                        | application/json           |
| errors.RateLimitError      | 429                        | application/json           |
| errors.InternalServerError | 500                        | application/json           |
| errors.R9SDefaultError     | 4XX, 5XX                   | \*/\*                      |

## embedContent

Generates a text embedding vector from the input content using the specified embedding model.
Supports different task types for optimized embeddings (retrieval, similarity, classification, etc.).


### Example Usage: clustering

<!-- UsageSnippet language="typescript" operationID="embedContent" method="post" path="/v1beta/models/{model}:embedContent" example="clustering" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.gemini.embedContent("models/text-embedding-005", {
    content: {
      parts: [
        {
          text: "Machine learning algorithms can be categorized into supervised, unsupervised, and reinforcement learning approaches",
        },
      ],
    },
    taskType: "CLUSTERING",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { R9SCore } from "@r9s/sdk/core.js";
import { geminiEmbedContent } from "@r9s/sdk/funcs/geminiEmbedContent.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await geminiEmbedContent(r9S, "models/text-embedding-005", {
    content: {
      parts: [
        {
          text: "Machine learning algorithms can be categorized into supervised, unsupervised, and reinforcement learning approaches",
        },
      ],
    },
    taskType: "CLUSTERING",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("geminiEmbedContent failed:", res.error);
  }
}

run();
```
### Example Usage: code_retrieval

<!-- UsageSnippet language="typescript" operationID="embedContent" method="post" path="/v1beta/models/{model}:embedContent" example="code_retrieval" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.gemini.embedContent("models/text-embedding-005", {
    content: {
      parts: [
        {
          text: "function to sort an array in javascript",
        },
      ],
    },
    taskType: "CODE_RETRIEVAL_QUERY",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { R9SCore } from "@r9s/sdk/core.js";
import { geminiEmbedContent } from "@r9s/sdk/funcs/geminiEmbedContent.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await geminiEmbedContent(r9S, "models/text-embedding-005", {
    content: {
      parts: [
        {
          text: "function to sort an array in javascript",
        },
      ],
    },
    taskType: "CODE_RETRIEVAL_QUERY",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("geminiEmbedContent failed:", res.error);
  }
}

run();
```
### Example Usage: document_embedding

<!-- UsageSnippet language="typescript" operationID="embedContent" method="post" path="/v1beta/models/{model}:embedContent" example="document_embedding" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.gemini.embedContent("models/text-embedding-005", {
    content: {
      parts: [
        {
          text: "To reset your password, go to Settings > Security > Password Reset. Click 'Reset Password' and follow the instructions sent to your email.",
        },
      ],
    },
    taskType: "RETRIEVAL_DOCUMENT",
    title: "Password Reset Guide",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { R9SCore } from "@r9s/sdk/core.js";
import { geminiEmbedContent } from "@r9s/sdk/funcs/geminiEmbedContent.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await geminiEmbedContent(r9S, "models/text-embedding-005", {
    content: {
      parts: [
        {
          text: "To reset your password, go to Settings > Security > Password Reset. Click 'Reset Password' and follow the instructions sent to your email.",
        },
      ],
    },
    taskType: "RETRIEVAL_DOCUMENT",
    title: "Password Reset Guide",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("geminiEmbedContent failed:", res.error);
  }
}

run();
```
### Example Usage: embedding_response

<!-- UsageSnippet language="typescript" operationID="embedContent" method="post" path="/v1beta/models/{model}:embedContent" example="embedding_response" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.gemini.embedContent("models/text-embedding-005", {
    content: {
      parts: [],
    },
    outputDimensionality: 256,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { R9SCore } from "@r9s/sdk/core.js";
import { geminiEmbedContent } from "@r9s/sdk/funcs/geminiEmbedContent.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await geminiEmbedContent(r9S, "models/text-embedding-005", {
    content: {
      parts: [],
    },
    outputDimensionality: 256,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("geminiEmbedContent failed:", res.error);
  }
}

run();
```
### Example Usage: fact_verification

<!-- UsageSnippet language="typescript" operationID="embedContent" method="post" path="/v1beta/models/{model}:embedContent" example="fact_verification" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.gemini.embedContent("models/text-embedding-005", {
    content: {
      parts: [
        {
          text: "The Great Wall of China is visible from space with the naked eye",
        },
      ],
    },
    taskType: "FACT_VERIFICATION",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { R9SCore } from "@r9s/sdk/core.js";
import { geminiEmbedContent } from "@r9s/sdk/funcs/geminiEmbedContent.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await geminiEmbedContent(r9S, "models/text-embedding-005", {
    content: {
      parts: [
        {
          text: "The Great Wall of China is visible from space with the naked eye",
        },
      ],
    },
    taskType: "FACT_VERIFICATION",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("geminiEmbedContent failed:", res.error);
  }
}

run();
```
### Example Usage: full_dimension_response

<!-- UsageSnippet language="typescript" operationID="embedContent" method="post" path="/v1beta/models/{model}:embedContent" example="full_dimension_response" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.gemini.embedContent("models/text-embedding-005", {
    content: {
      parts: [],
    },
    outputDimensionality: 256,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { R9SCore } from "@r9s/sdk/core.js";
import { geminiEmbedContent } from "@r9s/sdk/funcs/geminiEmbedContent.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await geminiEmbedContent(r9S, "models/text-embedding-005", {
    content: {
      parts: [],
    },
    outputDimensionality: 256,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("geminiEmbedContent failed:", res.error);
  }
}

run();
```
### Example Usage: query_embedding

<!-- UsageSnippet language="typescript" operationID="embedContent" method="post" path="/v1beta/models/{model}:embedContent" example="query_embedding" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.gemini.embedContent("models/text-embedding-005", {
    content: {
      parts: [
        {
          text: "How do I reset my password?",
        },
      ],
    },
    taskType: "RETRIEVAL_QUERY",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { R9SCore } from "@r9s/sdk/core.js";
import { geminiEmbedContent } from "@r9s/sdk/funcs/geminiEmbedContent.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await geminiEmbedContent(r9S, "models/text-embedding-005", {
    content: {
      parts: [
        {
          text: "How do I reset my password?",
        },
      ],
    },
    taskType: "RETRIEVAL_QUERY",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("geminiEmbedContent failed:", res.error);
  }
}

run();
```
### Example Usage: question_answering

<!-- UsageSnippet language="typescript" operationID="embedContent" method="post" path="/v1beta/models/{model}:embedContent" example="question_answering" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.gemini.embedContent("models/text-embedding-005", {
    content: {
      parts: [
        {
          text: "What are the health benefits of drinking green tea?",
        },
      ],
    },
    taskType: "QUESTION_ANSWERING",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { R9SCore } from "@r9s/sdk/core.js";
import { geminiEmbedContent } from "@r9s/sdk/funcs/geminiEmbedContent.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await geminiEmbedContent(r9S, "models/text-embedding-005", {
    content: {
      parts: [
        {
          text: "What are the health benefits of drinking green tea?",
        },
      ],
    },
    taskType: "QUESTION_ANSWERING",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("geminiEmbedContent failed:", res.error);
  }
}

run();
```
### Example Usage: reduced_dimensions

<!-- UsageSnippet language="typescript" operationID="embedContent" method="post" path="/v1beta/models/{model}:embedContent" example="reduced_dimensions" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.gemini.embedContent("models/text-embedding-005", {
    content: {
      parts: [
        {
          text: "Machine learning is a subset of artificial intelligence",
        },
      ],
    },
    taskType: "CLASSIFICATION",
    outputDimensionality: 256,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { R9SCore } from "@r9s/sdk/core.js";
import { geminiEmbedContent } from "@r9s/sdk/funcs/geminiEmbedContent.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await geminiEmbedContent(r9S, "models/text-embedding-005", {
    content: {
      parts: [
        {
          text: "Machine learning is a subset of artificial intelligence",
        },
      ],
    },
    taskType: "CLASSIFICATION",
    outputDimensionality: 256,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("geminiEmbedContent failed:", res.error);
  }
}

run();
```
### Example Usage: semantic_similarity

<!-- UsageSnippet language="typescript" operationID="embedContent" method="post" path="/v1beta/models/{model}:embedContent" example="semantic_similarity" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.gemini.embedContent("models/text-embedding-005", {
    content: {
      parts: [
        {
          text: "The quick brown fox jumps over the lazy dog",
        },
      ],
    },
    taskType: "SEMANTIC_SIMILARITY",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { R9SCore } from "@r9s/sdk/core.js";
import { geminiEmbedContent } from "@r9s/sdk/funcs/geminiEmbedContent.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await geminiEmbedContent(r9S, "models/text-embedding-005", {
    content: {
      parts: [
        {
          text: "The quick brown fox jumps over the lazy dog",
        },
      ],
    },
    taskType: "SEMANTIC_SIMILARITY",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("geminiEmbedContent failed:", res.error);
  }
}

run();
```
### Example Usage: simple_embedding

<!-- UsageSnippet language="typescript" operationID="embedContent" method="post" path="/v1beta/models/{model}:embedContent" example="simple_embedding" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.gemini.embedContent("models/text-embedding-005", {
    content: {
      parts: [
        {
          text: "What is the meaning of life?",
        },
      ],
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
import { geminiEmbedContent } from "@r9s/sdk/funcs/geminiEmbedContent.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await geminiEmbedContent(r9S, "models/text-embedding-005", {
    content: {
      parts: [
        {
          text: "What is the meaning of life?",
        },
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("geminiEmbedContent failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `model`                                                                                                                                                                        | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The embedding model resource name.<br/>Examples: models/text-embedding-005, models/embedding-001<br/>                                                                          | models/text-embedding-005                                                                                                                                                      |
| `geminiEmbedContentRequest`                                                                                                                                                    | [models.GeminiEmbedContentRequest](../../models/geminiembedcontentrequest.md)                                                                                                  | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[models.GeminiEmbedContentResponse](../../models/geminiembedcontentresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.BadRequestError     | 400                        | application/json           |
| errors.AuthenticationError | 401                        | application/json           |
| errors.RateLimitError      | 429                        | application/json           |
| errors.InternalServerError | 500                        | application/json           |
| errors.R9SDefaultError     | 4XX, 5XX                   | \*/\*                      |

## batchGenerateContent

Creates an asynchronous batch job to process multiple generateContent requests.
Returns a job object immediately. Results are available within 24 hours at 50% lower cost.
Use GET /v1beta/batches/{name} to poll job status and retrieve results.


### Example Usage: batch_image_analysis

<!-- UsageSnippet language="typescript" operationID="batchGenerateContent" method="post" path="/v1beta/models/{model}:batchGenerateContent" example="batch_image_analysis" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.gemini.batchGenerateContent("models/gemini-3-flash", {
    batch: {
      displayName: "batch-image-analysis",
      inputConfig: {
        requests: {
          requests: [
            {
              request: {
                contents: [
                  {
                    parts: [
                      {
                        text: "What objects are in this image?",
                      },
                      {
                        inlineData: {
                          mimeType: "image/jpeg",
                          data: "/9j/4AAQSkZJRgABAQAAAQABAAD...",
                        },
                      },
                    ],
                  },
                ],
              },
              metadata: {
                "image_id": "img_001",
              },
            },
            {
              request: {
                contents: [
                  {
                    parts: [
                      {
                        text: "Describe the colors and composition",
                      },
                      {
                        inlineData: {
                          mimeType: "image/png",
                          data: "iVBORw0KGgoAAAANSUhEUgAA...",
                        },
                      },
                    ],
                  },
                ],
              },
              metadata: {
                "image_id": "img_002",
              },
            },
          ],
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
import { geminiBatchGenerateContent } from "@r9s/sdk/funcs/geminiBatchGenerateContent.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await geminiBatchGenerateContent(r9S, "models/gemini-3-flash", {
    batch: {
      displayName: "batch-image-analysis",
      inputConfig: {
        requests: {
          requests: [
            {
              request: {
                contents: [
                  {
                    parts: [
                      {
                        text: "What objects are in this image?",
                      },
                      {
                        inlineData: {
                          mimeType: "image/jpeg",
                          data: "/9j/4AAQSkZJRgABAQAAAQABAAD...",
                        },
                      },
                    ],
                  },
                ],
              },
              metadata: {
                "image_id": "img_001",
              },
            },
            {
              request: {
                contents: [
                  {
                    parts: [
                      {
                        text: "Describe the colors and composition",
                      },
                      {
                        inlineData: {
                          mimeType: "image/png",
                          data: "iVBORw0KGgoAAAANSUhEUgAA...",
                        },
                      },
                    ],
                  },
                ],
              },
              metadata: {
                "image_id": "img_002",
              },
            },
          ],
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("geminiBatchGenerateContent failed:", res.error);
  }
}

run();
```
### Example Usage: batch_json_output

<!-- UsageSnippet language="typescript" operationID="batchGenerateContent" method="post" path="/v1beta/models/{model}:batchGenerateContent" example="batch_json_output" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.gemini.batchGenerateContent("models/gemini-3-flash", {
    batch: {
      displayName: "batch-json-extraction",
      inputConfig: {
        fileName: "files/abc123",
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
import { geminiBatchGenerateContent } from "@r9s/sdk/funcs/geminiBatchGenerateContent.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await geminiBatchGenerateContent(r9S, "models/gemini-3-flash", {
    batch: {
      displayName: "batch-json-extraction",
      inputConfig: {
        fileName: "files/abc123",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("geminiBatchGenerateContent failed:", res.error);
  }
}

run();
```
### Example Usage: batch_with_system_instruction

<!-- UsageSnippet language="typescript" operationID="batchGenerateContent" method="post" path="/v1beta/models/{model}:batchGenerateContent" example="batch_with_system_instruction" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.gemini.batchGenerateContent("models/gemini-3-flash", {
    batch: {
      displayName: "batch-translation-job",
      inputConfig: {
        requests: {
          requests: [
            {
              request: {
                contents: [
                  {
                    parts: [
                      {
                        text: "Hello, how are you today?",
                      },
                    ],
                  },
                ],
                systemInstruction: {
                  parts: [
                    {
                      text: "You are a professional translator. Translate to Spanish.",
                    },
                  ],
                },
              },
              metadata: {
                "text_id": "text_001",
              },
            },
            {
              request: {
                contents: [
                  {
                    parts: [
                      {
                        text: "Good morning, welcome to our service",
                      },
                    ],
                  },
                ],
                systemInstruction: {
                  parts: [
                    {
                      text: "You are a professional translator. Translate to French.",
                    },
                  ],
                },
              },
              metadata: {
                "text_id": "text_002",
              },
            },
          ],
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
import { geminiBatchGenerateContent } from "@r9s/sdk/funcs/geminiBatchGenerateContent.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await geminiBatchGenerateContent(r9S, "models/gemini-3-flash", {
    batch: {
      displayName: "batch-translation-job",
      inputConfig: {
        requests: {
          requests: [
            {
              request: {
                contents: [
                  {
                    parts: [
                      {
                        text: "Hello, how are you today?",
                      },
                    ],
                  },
                ],
                systemInstruction: {
                  parts: [
                    {
                      text: "You are a professional translator. Translate to Spanish.",
                    },
                  ],
                },
              },
              metadata: {
                "text_id": "text_001",
              },
            },
            {
              request: {
                contents: [
                  {
                    parts: [
                      {
                        text: "Good morning, welcome to our service",
                      },
                    ],
                  },
                ],
                systemInstruction: {
                  parts: [
                    {
                      text: "You are a professional translator. Translate to French.",
                    },
                  ],
                },
              },
              metadata: {
                "text_id": "text_002",
              },
            },
          ],
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("geminiBatchGenerateContent failed:", res.error);
  }
}

run();
```
### Example Usage: batch_with_tools

<!-- UsageSnippet language="typescript" operationID="batchGenerateContent" method="post" path="/v1beta/models/{model}:batchGenerateContent" example="batch_with_tools" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.gemini.batchGenerateContent("models/gemini-3-flash", {
    batch: {
      displayName: "batch-function-calling",
      inputConfig: {
        fileName: "files/abc123",
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
import { geminiBatchGenerateContent } from "@r9s/sdk/funcs/geminiBatchGenerateContent.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await geminiBatchGenerateContent(r9S, "models/gemini-3-flash", {
    batch: {
      displayName: "batch-function-calling",
      inputConfig: {
        fileName: "files/abc123",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("geminiBatchGenerateContent failed:", res.error);
  }
}

run();
```
### Example Usage: file_input

<!-- UsageSnippet language="typescript" operationID="batchGenerateContent" method="post" path="/v1beta/models/{model}:batchGenerateContent" example="file_input" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.gemini.batchGenerateContent("models/gemini-3-flash", {
    batch: {
      displayName: "large-batch-job",
      inputConfig: {
        fileName: "files/abc123def456",
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
import { geminiBatchGenerateContent } from "@r9s/sdk/funcs/geminiBatchGenerateContent.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await geminiBatchGenerateContent(r9S, "models/gemini-3-flash", {
    batch: {
      displayName: "large-batch-job",
      inputConfig: {
        fileName: "files/abc123def456",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("geminiBatchGenerateContent failed:", res.error);
  }
}

run();
```
### Example Usage: inline_requests

<!-- UsageSnippet language="typescript" operationID="batchGenerateContent" method="post" path="/v1beta/models/{model}:batchGenerateContent" example="inline_requests" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.gemini.batchGenerateContent("models/gemini-3-flash", {
    batch: {
      displayName: "my-batch-job",
      inputConfig: {
        requests: {
          requests: [
            {
              request: {
                contents: [
                  {
                    parts: [
                      {
                        text: "Write a haiku about the ocean",
                      },
                    ],
                  },
                ],
              },
              metadata: {
                "key": "req-1",
              },
            },
            {
              request: {
                contents: [
                  {
                    parts: [
                      {
                        text: "Explain quantum entanglement simply",
                      },
                    ],
                  },
                ],
                generationConfig: {
                  maxOutputTokens: 256,
                },
              },
              metadata: {
                "key": "req-2",
              },
            },
          ],
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
import { geminiBatchGenerateContent } from "@r9s/sdk/funcs/geminiBatchGenerateContent.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await geminiBatchGenerateContent(r9S, "models/gemini-3-flash", {
    batch: {
      displayName: "my-batch-job",
      inputConfig: {
        requests: {
          requests: [
            {
              request: {
                contents: [
                  {
                    parts: [
                      {
                        text: "Write a haiku about the ocean",
                      },
                    ],
                  },
                ],
              },
              metadata: {
                "key": "req-1",
              },
            },
            {
              request: {
                contents: [
                  {
                    parts: [
                      {
                        text: "Explain quantum entanglement simply",
                      },
                    ],
                  },
                ],
                generationConfig: {
                  maxOutputTokens: 256,
                },
              },
              metadata: {
                "key": "req-2",
              },
            },
          ],
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("geminiBatchGenerateContent failed:", res.error);
  }
}

run();
```
### Example Usage: job_created

<!-- UsageSnippet language="typescript" operationID="batchGenerateContent" method="post" path="/v1beta/models/{model}:batchGenerateContent" example="job_created" -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.gemini.batchGenerateContent("models/gemini-3-flash", {
    batch: {
      inputConfig: {
        fileName: "files/abc123",
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
import { geminiBatchGenerateContent } from "@r9s/sdk/funcs/geminiBatchGenerateContent.js";

// Use `R9SCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const r9S = new R9SCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await geminiBatchGenerateContent(r9S, "models/gemini-3-flash", {
    batch: {
      inputConfig: {
        fileName: "files/abc123",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("geminiBatchGenerateContent failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `model`                                                                                                                                                                        | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Default model for all requests in the batch                                                                                                                                    | models/gemini-3-flash                                                                                                                                                          |
| `geminiBatchGenerateContentRequest`                                                                                                                                            | [models.GeminiBatchGenerateContentRequest](../../models/geminibatchgeneratecontentrequest.md)                                                                                  | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[models.GeminiBatchGenerateContentResponse](../../models/geminibatchgeneratecontentresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.BadRequestError     | 400                        | application/json           |
| errors.AuthenticationError | 401                        | application/json           |
| errors.RateLimitError      | 429                        | application/json           |
| errors.InternalServerError | 500                        | application/json           |
| errors.R9SDefaultError     | 4XX, 5XX                   | \*/\*                      |