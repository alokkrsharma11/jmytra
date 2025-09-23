```mermaid
flowchart TD
    A["Application Context"] --> B["MyRepository Bean"]
    A --> C["MyService Bean"]
    C -->|"@Autowired"| B
```