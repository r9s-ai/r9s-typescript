# GeminiPart

A single part of content that can be text, inline data, file data, or function call


## Supported Types

### `models.GeminiPart1`

```typescript
const value: models.GeminiPart1 = {
  text: "<value>",
};
```

### `models.GeminiPart2`

```typescript
const value: models.GeminiPart2 = {
  inlineData: {
    mimeType: "image/jpeg",
    data: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBD...",
  },
};
```

### `models.Three`

```typescript
const value: models.Three = {
  fileData: {
    mimeType: "image/jpeg",
    fileUri: "gs://bucket/image.jpg",
  },
};
```

### `models.Four`

```typescript
const value: models.Four = {
  functionCall: {},
};
```

### `models.Five`

```typescript
const value: models.Five = {
  functionResponse: {},
};
```

