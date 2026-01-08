# CreateProxyRequestRequest

## Example Usage

```typescript
import { CreateProxyRequestRequest } from "@r9s/sdk/models";

let value: CreateProxyRequestRequest = {
  channelid: "123",
  target: "chat/completions",
};
```

## Fields

| Field                 | Type                  | Required              | Description           | Example               |
| --------------------- | --------------------- | --------------------- | --------------------- | --------------------- |
| `channelid`           | *string*              | :heavy_check_mark:    | Channel ID            | 123                   |
| `target`              | *string*              | :heavy_check_mark:    | Target path           | chat/completions      |
| `requestBody`         | Record<string, *any*> | :heavy_minus_sign:    | N/A                   |                       |