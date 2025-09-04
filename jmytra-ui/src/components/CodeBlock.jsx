import { useState } from "react";

const CodeBlock = ({ language, code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  return (
    <div style={{ position: "relative", margin: "1rem 0" }}>
      <button
        onClick={handleCopy}
        style={{
          position: "absolute",
          top: "8px",
          right: "8px",
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
      <pre className="code-block">
        <code>
            {code}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;