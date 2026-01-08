# CreateChatCompletionResponse


## Supported Types

### `models.ChatCompletionResponse`

```typescript
const value: models.ChatCompletionResponse = {
  id: "<id>",
  object: "chat.completion",
  created: 213082,
  model: "Altima",
  choices: [
    {
      index: 120622,
      message: {
        role: "system",
      },
      finishReason: "content_filter",
    },
  ],
};
```

### `EventStream<models.CreateChatCompletionResponseBody>`

