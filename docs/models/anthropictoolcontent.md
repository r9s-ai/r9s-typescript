# AnthropicToolContent


## Supported Types

### `models.AnthropicToolUseContent`

```typescript
const value: models.AnthropicToolUseContent = {
  type: "tool_use",
  id: "<id>",
  name: "<value>",
  input: {
    "key": "<value>",
    "key1": "<value>",
  },
};
```

### `models.AnthropicToolResultContent`

```typescript
const value: models.AnthropicToolResultContent = {
  type: "tool_result",
  toolUseId: "<id>",
  content: "<value>",
};
```

