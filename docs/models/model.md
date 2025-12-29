# Model

## Example Usage

```typescript
import { Model } from "@r9s/sdk/models";

let value: Model = {
  id: "<id>",
  object: "model",
  created: 532190,
  ownedBy: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `id`               | *string*           | :heavy_check_mark: | Model identifier   |
| `object`           | *"model"*          | :heavy_check_mark: | N/A                |
| `created`          | *number*           | :heavy_check_mark: | Creation timestamp |
| `ownedBy`          | *string*           | :heavy_check_mark: | Model owner        |