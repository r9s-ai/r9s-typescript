# EmbeddingObject

## Example Usage

```typescript
import { EmbeddingObject } from "@r9s/sdk/models";

let value: EmbeddingObject = {
  object: "embedding",
  embedding: [
    7438.65,
  ],
  index: 980674,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `object`           | *"embedding"*      | :heavy_check_mark: | N/A                |
| `embedding`        | *number*[]         | :heavy_check_mark: | Embedding vector   |
| `index`            | *number*           | :heavy_check_mark: | N/A                |