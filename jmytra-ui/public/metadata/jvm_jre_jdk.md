# What is JDK, JVM, JRE?

**Question:** What is JDK, JVM, JRE?

**Answer:**  
- **JVM (Java Virtual Machine):** Executes Java bytecode and provides platform independence.  
- **JRE (Java Runtime Environment):** Contains JVM + standard libraries required to run Java applications.  
- **JDK (Java Development Kit):** Contains JRE + development tools (compiler, debugger) to create Java applications.

## Explanation

**Intro:**  
JDK, JRE, and JVM are core components of Java technology that work together to compile, run, and execute Java programs.

**Details:**
1. **JVM:**  
   - Converts bytecode into machine code.  
   - Provides memory management (heap, stack).  
   - Ensures platform independence.

2. **JRE:**  
   - Includes JVM and Java class libraries.  
   - Required to run Java programs but cannot compile them.

3. **JDK:**  
   - Includes JRE and development tools like `javac` (compiler), `javadoc`, `jar`, and `jdb`.  
   - Needed to develop and compile Java applications.

**Example Usage:**
```bash
# Check Java version
java -version   # JVM
javac MyProgram.java  # JDK compiler
java MyProgram        # Run using JVM via JRE