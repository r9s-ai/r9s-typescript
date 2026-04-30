# GeminiBatchError

Error information for failed batch job

## Example Usage

```typescript
import { GeminiBatchError } from "@r9s/sdk/models";

let value: GeminiBatchError = {};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `code`             | *number*           | :heavy_minus_sign: | Error code         |
| `message`          | *string*           | :heavy_minus_sign: | Error message      |
| `status`           | *string*           | :heavy_minus_sign: | Error status       |