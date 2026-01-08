# ModerationRequest

## Example Usage

```typescript
import { ModerationRequest } from "@r9s/sdk/models";

let value: ModerationRequest = {
  input: "<value>",
};
```

## Fields

| Field                           | Type                            | Required                        | Description                     |
| ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- |
| `input`                         | *models.ModerationRequestInput* | :heavy_check_mark:              | Input text to moderate          |
| `model`                         | *string*                        | :heavy_minus_sign:              | Model name                      |