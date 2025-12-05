```mermaid
graph LR
    A["Thread A writes variable X"] -->|happens-before| B["Thread B reads variable X"]
```