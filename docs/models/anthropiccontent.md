# AnthropicContent


## Supported Types

### `models.AnthropicTextContent`

```typescript
const value: models.AnthropicTextContent = {
  type: "text",
  text: "<value>",
};
```

### `models.AnthropicImageContent`

```typescript
const value: models.AnthropicImageContent = {
  type: "image",
  source: {
    type: "base64",
    mediaType: "image/webp",
    data: "<value>",
  },
};
```

### `models.AnthropicDocumentContent`

```typescript
const value: models.AnthropicDocumentContent = {
  type: "document",
  source: {
    type: "url",
    url: "https://separate-juggernaut.info/",
  },
};
```

### `models.AnthropicThinkingContent`

```typescript
const value: models.AnthropicThinkingContent = {
  type: "thinking",
  thinking: "<value>",
};
```

### `models.AnthropicToolContent`

```typescript
const value: models.AnthropicToolContent = {
  type: "tool_result",
  toolUseId: "<id>",
  content: "<value>",
};
```

