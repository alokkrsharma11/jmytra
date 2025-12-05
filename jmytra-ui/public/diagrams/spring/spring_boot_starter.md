```mermaid
flowchart TD
    A["Spring Boot Project"] --> B["Spring Boot Starter Web"]
    A --> C["Spring Boot Starter JPA"]
    A --> D["Spring Boot Starter Security"]

    B --> B1["Spring MVC + Jackson + Tomcat"]
    C --> C1["Hibernate + JPA APIs"]
    D --> D1["Spring Security + Defaults"]
```