# Reasoning

Configuration for reasoning models (e.g., o1, o3, gpt-5). Controls how the model uses reasoning tokens to "think" through the problem.

## Example Usage

```typescript
import { Reasoning } from "@r9s/sdk/models";

let value: Reasoning = {};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `effort`                                                                                     | [models.Effort](../models/effort.md)                                                         | :heavy_minus_sign:                                                                           | The effort level for reasoning (none/minimal=fast, low/medium=balanced, high/xhigh=thorough) |
| `summary`                                                                                    | *string*                                                                                     | :heavy_minus_sign:                                                                           | Summary of reasoning approach                                                                |