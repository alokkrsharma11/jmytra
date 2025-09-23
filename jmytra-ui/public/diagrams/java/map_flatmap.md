```mermaid
flowchart TD
    A["Stream of Lists"] --> B["map()"] --> C["Stream of Lists (unchanged structure)"]
    A --> D["flatMap()"] --> E["Flattened Stream of Elements"]
```