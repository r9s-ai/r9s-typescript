# ConflictError

Resource conflict error. Reserved for future use cases:
- Duplicate resource creation
- Concurrent modification conflicts
- State conflicts in background tasks


## Example Usage

```typescript
import { ConflictError } from "@r9s/sdk/errors";

// No examples available for this model
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `error`                                                                      | [errors.SchemasConflictErrorError](../errors/schemasconflicterrorerror.md)   | :heavy_check_mark:                                                           | N/A                                                                          |
| `status`                                                                     | [errors.SchemasConflictErrorStatus](../errors/schemasconflicterrorstatus.md) | :heavy_minus_sign:                                                           | N/A                                                                          |