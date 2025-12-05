```mermaid
graph LR
    A["Application Objects"] --> B{"Garbage Collector"}
    B --> C["Heap Memory"]
    D["Leaked Objects"] -.-> C
```