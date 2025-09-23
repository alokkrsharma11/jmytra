```mermaid
flowchart TD
    A["@Component Engine"] --> B["@Autowired in Car"]
    B --> C["@Component Car"]
    C --> D["Spring Container provides Engine automatically"]
```