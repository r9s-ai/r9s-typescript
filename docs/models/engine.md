# Engine

Search engine name (optional, defaults to exa)
- exa: AI-native search engine, suitable for semantic search
- tavily: AI search API, supports deep search and summary answers
- google: Google custom search, most comprehensive index


## Example Usage

```typescript
import { Engine } from "@r9s/sdk/models";

let value: Engine = "google";
```

## Values

```typescript
"exa" | "tavily" | "google"
```