# EditRequest

## Example Usage

```typescript
import { EditRequest } from "@r9s/sdk/models";

let value: EditRequest = {
  model: "Colorado",
  instruction: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `model`            | *string*           | :heavy_check_mark: | Model name         |
| `input`            | *string*           | :heavy_minus_sign: | Input text to edit |
| `instruction`      | *string*           | :heavy_check_mark: | Edit instruction   |
| `n`                | *number*           | :heavy_minus_sign: | N/A                |
| `temperature`      | *number*           | :heavy_minus_sign: | N/A                |
| `topP`             | *number*           | :heavy_minus_sign: | N/A                |