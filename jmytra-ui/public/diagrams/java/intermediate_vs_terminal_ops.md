```mermaid
flowchart TD
    A[Stream] --> B["Intermediate Operations (filter, map)"]
    B --> C["Terminal Operation (collect, forEach)"]
    C --> D["Result Produced"]
```