// MermaidWrapper.jsx
import { useEffect, useRef } from "react";
import mermaid from "mermaid";

const MermaidWrapper = ({ chart }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      mermaid.initialize({ startOnLoad: true });
      mermaid.contentLoaded(); // re-render
    }
  }, [chart]);

  return <div ref={ref} className="mermaid">{chart}</div>;
};

export default MermaidWrapper;