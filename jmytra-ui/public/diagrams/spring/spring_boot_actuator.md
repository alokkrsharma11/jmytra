```mermaid
flowchart TD
    A["Spring Boot Application"] --> B["Actuator Endpoints"]
    B --> C["Health"]
    B --> D["Metrics"]
    B --> E["Environment Info"]
    B --> F["Custom Endpoints"]
```