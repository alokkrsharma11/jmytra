```mermaid
flowchart TD
    A["@Configuration Class"] --> B["@Bean Method"]
    B --> C["Spring Container"]
    C --> D["Bean Instance"]
    D --> E["Injected into Other Components"]
```