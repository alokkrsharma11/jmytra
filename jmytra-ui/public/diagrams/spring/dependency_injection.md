```mermaid
flowchart TD
    A["Spring Container"] -->|Creates| B["Engine Bean"]
    A -->|Creates| C["Car Bean"]
    B -->|Injected into| C
```