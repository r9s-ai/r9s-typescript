# AnthropicMessageResponseUsage

## Example Usage

```typescript
import { AnthropicMessageResponseUsage } from "@r9s/sdk/models";

let value: AnthropicMessageResponseUsage = {
  inputTokens: 240380,
  outputTokens: 828110,
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `inputTokens`                                                                                | *number*                                                                                     | :heavy_check_mark:                                                                           | Number of input tokens used                                                                  |
| `cacheCreationInputTokens`                                                                   | *number*                                                                                     | :heavy_minus_sign:                                                                           | Number of input tokens used to create cache entries (only present if prompt caching is used) |
| `cacheReadInputTokens`                                                                       | *number*                                                                                     | :heavy_minus_sign:                                                                           | Number of input tokens read from cache (only present if prompt caching is used)              |
| `outputTokens`                                                                               | *number*                                                                                     | :heavy_check_mark:                                                                           | Number of output tokens generated                                                            |