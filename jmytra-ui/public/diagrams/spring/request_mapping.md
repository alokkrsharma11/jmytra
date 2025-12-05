```mermaid
flowchart TD
    A["HTTP Request: /hello"] --> B["@RequestMapping('/hello')"]
    B --> C["Controller Method"]
    C --> D["Return Response: Hello, Spring MVC!"]
```