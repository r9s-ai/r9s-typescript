# AnthropicMessageRequestServiceTier

Service tier for request processing:
- auto: Automatically select between standard and priority capacity
- standard_only: Only use standard capacity (may have longer wait times during high load)


## Example Usage

```typescript
import { AnthropicMessageRequestServiceTier } from "@r9s/sdk/models";

let value: AnthropicMessageRequestServiceTier = "standard_only";
```

## Values

```typescript
"auto" | "standard_only"
```