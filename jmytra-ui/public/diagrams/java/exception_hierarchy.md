```mermaid
classDiagram
    Throwable <|-- Exception
    Throwable <|-- Error
    Exception <|-- RuntimeException
    RuntimeException <|-- NullPointerException
    RuntimeException <|-- ArithmeticException
```