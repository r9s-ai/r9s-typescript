# AnthropicStreamEvent


## Supported Types

### `models.AnthropicMessageStart`

```typescript
const value: models.AnthropicMessageStart = {
  type: "message_start",
  message: {
    id: "<id>",
    type: "message",
    role: "assistant",
    content: [
      {},
    ],
    model: "Element",
    stopReason: "<value>",
    stopSequence: null,
    usage: {
      inputTokens: 361746,
      outputTokens: 941680,
    },
  },
};
```

### `models.AnthropicContentBlockStart`

```typescript
const value: models.AnthropicContentBlockStart = {
  type: "content_block_start",
  index: 200973,
  contentBlock: {
    type: "tool_use",
  },
};
```

### `models.AnthropicContentBlockDelta`

```typescript
const value: models.AnthropicContentBlockDelta = {
  type: "content_block_delta",
  index: 880470,
  delta: {},
};
```

### `models.AnthropicContentBlockStop`

```typescript
const value: models.AnthropicContentBlockStop = {
  type: "content_block_stop",
  index: 510551,
};
```

### `models.AnthropicMessageDelta`

```typescript
const value: models.AnthropicMessageDelta = {
  type: "message_delta",
  delta: {},
  usage: {},
};
```

### `models.AnthropicStreamMessageStop`

```typescript
const value: models.AnthropicStreamMessageStop = {
  type: "message_stop",
};
```

### `models.AnthropicPing`

```typescript
const value: models.AnthropicPing = {
  type: "ping",
};
```

