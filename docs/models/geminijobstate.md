# GeminiJobState

State of the batch job

## Example Usage

```typescript
import { GeminiJobState } from "@r9s/sdk/models";

let value: GeminiJobState = "JOB_STATE_FAILED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"JOB_STATE_UNSPECIFIED" | "JOB_STATE_PENDING" | "JOB_STATE_RUNNING" | "JOB_STATE_SUCCEEDED" | "JOB_STATE_FAILED" | "JOB_STATE_CANCELLED" | "JOB_STATE_EXPIRED" | Unrecognized<string>
```