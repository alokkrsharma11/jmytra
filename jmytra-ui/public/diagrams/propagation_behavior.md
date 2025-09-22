flowchart TD;
    MainMemory[Main Memory] -->|Read/Write| Thread1Cache[Thread 1 Working Memory]
    MainMemory[Main Memory] -->|Read/Write| Thread2Cache[Thread 2 Working Memory]
    Thread1Cache --> Thread1[Thread 1]
    Thread2Cache --> Thread2[Thread 2]
    note1[Volatile/Synchronized ensures visibility between caches]:::note

    classDef note fill:#f9f,stroke:#333,stroke-width:1px;

