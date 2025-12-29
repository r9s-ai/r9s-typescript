# SchemasError

## Example Usage

```typescript
import { SchemasError } from "@r9s/sdk/errors";

let value: SchemasError = {
  message: "<value>",
  type: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `message`          | *string*           | :heavy_check_mark: | Error message      |
| `type`             | *string*           | :heavy_check_mark: | Error type         |
| `code`             | *string*           | :heavy_minus_sign: | Error code         |
| `param`            | *string*           | :heavy_minus_sign: | Related parameter  |