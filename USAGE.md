<!-- Start SDK Example Usage [usage] -->
```typescript
import { R9S } from "@r9s/sdk";

const r9S = new R9S({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await r9S.models.list();

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->