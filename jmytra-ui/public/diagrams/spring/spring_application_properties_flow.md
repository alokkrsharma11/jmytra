```mermaid
flowchart TD
    A["application.properties / application.yml"] --> B["Spring Boot Environment Initialized"]
    B --> C["Configurations Loaded into ApplicationContext"]
    C --> D["Beans & Services Use Config Values"]
```