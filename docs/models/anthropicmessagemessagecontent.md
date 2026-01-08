# AnthropicMessageMessageContent

Message content - can be array of content blocks or string


## Supported Types

### `models.AnthropicContent[]`

```typescript
const value: models.AnthropicContent[] = [
  {
    type: "image",
    source: {
      type: "base64",
      mediaType: "image/gif",
      data: "<value>",
    },
  },
];
```

### `string`

```typescript
const value: string = "<value>";
```

