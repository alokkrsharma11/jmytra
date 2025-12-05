```mermaid
flowchart TD
    A["Stream of Elements"] --> B["reduce()"]
    B --> C["Single Result"]

    A --> D["collect()"]
    D --> E["Mutable Container: List/Set/Map"]
```