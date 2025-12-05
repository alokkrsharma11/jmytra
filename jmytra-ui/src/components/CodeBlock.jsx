import { useState } from "react";
import axios from "axios";

const CodeBlock = ({ language, code }) => {
  const [copied, setCopied] = useState(false);
  const [output, setOutput] = useState("");
  const [running, setRunning] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  const handleRun = async () => {
    setOutput("");
    setRunning(true);

    try {
      const langMap = {
        javascript: "javascript",
        java: "java",
        python: "python3",
        c: "c",
        cpp: "cpp",
      };

      const engine = langMap[language.toLowerCase()] || "javascript";

      const payload = {
        language: engine,
        version: "*",
        files: [
          {
            name: "Main." + engine, // name file based on language
            content: code,
          },
        ],
      };

      const res = await axios.post("https://emkc.org/api/v2/piston/execute", payload);
      setOutput(res.data.run.output || "Execution completed (no output)");
    } catch (err) {
      console.error(err);
      setOutput("Error executing code: " + err.message);
    }

    setRunning(false);
  };

  return (
    <div style={{ position: "relative", margin: "1rem 0" }}>
      <div
        style={{
          position: "absolute",
          top: "8px",
          right: "8px",
          display: "flex",
          gap: "4px",
        }}
      >
        <button
          onClick={handleCopy}
          style={{
            background: "#333",
            color: "#fff",
            border: "none",
            padding: "4px 8px",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "0.8rem",
          }}
        >
          {copied ? "Copied!" : "Copy"}
        </button>
        <button
          onClick={handleRun}
          style={{
            background: "#007acc",
            color: "#fff",
            border: "none",
            padding: "4px 8px",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "0.8rem",
          }}
        >
          {running ? "Running..." : "Run"}
        </button>
      </div>

      <pre className="code-block">
        <code>{code}</code>
      </pre>

      {output && (
        <div
          style={{
            marginTop: "0.5rem",
            padding: "0.5rem",
            background: "#f4f4f4",
            color: "#000",
            borderRadius: "4px",
            fontFamily: "monospace",
            whiteSpace: "pre-wrap",
          }}
        >
          {output}
        </div>
      )}
    </div>
  );
};

export default CodeBlock;