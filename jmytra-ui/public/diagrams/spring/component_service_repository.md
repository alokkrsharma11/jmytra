```mermaid
flowchart TD
    A["@Component"] --> B["Generic Bean"]
    A --> C["@Service - Business Logic Layer"]
    A --> D["@Repository - DAO Layer with Exception Translation"]
```