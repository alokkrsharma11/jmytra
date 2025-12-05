```mermaid
flowchart TD
    A["Client HTTP Request"] --> B["@RestController Method"]
    B --> C["Spring Serializes Response to JSON/XML"]
    C --> D["Client Receives Response"]
```