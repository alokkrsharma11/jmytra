import './styles.css';
import CodeBlock from "./CodeBlock";
import { useState } from 'react';
import QuizOptions from './QuizOptions';
import MermaidWrapper from './MermaidWrapper';
import MarkdownRenderer from './MarkdownRenderer'; 

const QuizContent = ({ question }) => {
  const [selected, setSelected] = useState(null);

  const handleSelect = (option) => {
    setSelected(option);
  };

  const isMCQ = question.isObjective || (question.options && question.options.length > 0);

  return (
    <div className='mb-6 p-4 border rounded-lg shadow-sm bg-white text-black relative'>
      
      {/* Question */}
      <h5 className="question mb-1">
        Question {question.key || ''} : {question.question}
        
      </h5>

      {/* Right-aligned metadata */}
      <div style={{
        position: "relative",
        top: "0.5rem",
        right: "1rem",
        textAlign: "right",
        fontSize: "0.85rem",
        color: "#555"
      }}>
        {question.difficulty && <div><b>Difficulty Level:</b> <span className="font-semibold">{question.difficulty}</span></div>}
      </div>

      {/* MCQ options */}
      {isMCQ && question.options?.length > 0 && (
        <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
          <QuizOptions 
            options={question.options}
            onSelect={handleSelect}
            selected={selected}
          />
        </ul>
      )}

      {/* Reveal answer for MCQ only after selection */}
      {isMCQ && selected && (
        <div style={{ marginTop: "1rem", fontWeight: "bold" }}>
          <p style={{ color: selected === question.answer ? "green" : "red" }}>
            You selected: {selected}
          </p>
          <p style={{ color: "blue" }}>Correct Answer: {question.answer}</p>

          {question.explanation && (
            <div style={{ marginTop: "0.5rem" }}>
              {question.explanation.intro && <p>{question.explanation.intro}</p>}
              {question.explanation.points && (
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                  {question.explanation.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              )}
              {question.explanation.code && (
                <CodeBlock language={question.explanation.language || 'javascript'} code={question.explanation.code} />
              )}
            </div>
          )}
        </div>
      )}

      {/* Non-MCQ / Interview type: show answer & explanation immediately */}
      {!isMCQ && (
        <div style={{marginTop: '2rem'}}>
          {question.answer && (
            <div>
              <p className="font-medium text-gray-800">Answer:</p>
              <p>{question.answer}</p>
            </div>
          )}
          {question.explanation && (
            <div>
              {question.explanation.intro && <p>{question.explanation.intro}</p>}
              {question.explanation.points && (
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                  {question.explanation.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              )}
              {question.explanation.code && (
                <CodeBlock language={question.explanation.language || 'javascript'} code={question.explanation.code} />
              )}
              {/* ✅ Diagram handling */}
              {question.explanation.diagramMarkdown ? (
                <MarkdownRenderer content={question.explanation.diagramMarkdown} />
              ) : question.explanation.diagram ? (
                <MermaidWrapper chart={question.explanation.diagram} />
              ) : null}
            </div>
          )}
        </div>
      )}

      {/* Differences table if present */}
      {Array.isArray(question.differences) && question.differences.length > 0 && (
        <table className="table-auto border mt-1 w-full">
          <thead>
            <tr>
              <th className="border px-4 py-2">Keyword</th>
              <th className="border px-4 py-2">ArrayList</th>
              <th className="border px-4 py-2">LinkedList</th>
            </tr>
          </thead>
          <tbody>
            {question.differences.map((d, j) => (
              <tr key={j}>
                <td className="border px-4 py-2">{d.keyword}</td>
                <td className="border px-4 py-2">{d.ArrayList}</td>
                <td className="border px-4 py-2">{d.LinkedList}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default QuizContent;