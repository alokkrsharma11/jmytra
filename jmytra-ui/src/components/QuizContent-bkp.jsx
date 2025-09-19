import './styles.css'
import CodeBlock from "./CodeBlock";
import { useState } from 'react';
import QuizOptions from './QuizOptions';

const QuizContent = ({ question }) => {
const [selected, setSelected] = useState(null);

  const handleSelect = (option) => {
    setSelected(option);
  };
  
  return (
    <div className='mb-6 p-4 border rounded-lg shadow-sm bg-white text-black'>
      <h5 className="question">Question {question.key} : {question.question}</h5>
      {question.askedBy && <div><b>Asked In:</b> <span className="font-semibold">{question?.askedBy?.join(', ')}</span></div>}
      <h5 className="explaination">
      
      {/* Bullet points */}
      {question.options?.length > 0 && (
        <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
          
            <QuizOptions 
              options={question.options}
              onSelect={handleSelect}
            />
          
        </ul>
      )}
      {selected && selected === question.answer && (
        <p>
        <div style={{ marginTop: "1rem", fontWeight: "bold"}}>
          <p style={{ color: "green" }}>You selected: {selected}</p>
        
          <p style={{ color: "blue" }}>Current Answer is: {question.answer}</p>
        </div>

          </p>
      )}
      
      {selected && selected !== question.answer && (
        <>
          <div style={{ marginTop: "1rem", fontWeight: "bold" }}>
            <p style={{ color: "red" }}>You selected: {selected}</p>
            <p style={{ color: "blue" }}>Current Answer is: {question.answer}</p>
          </div>
        
        </>
      )}

      {selected !== false &&  (
      
      
      <div >
      {!question?.isObjective && (
        <div style={{ marginTop: "1rem" }} className="mt-3 font-medium text-gray-800">
          <p className="question">Answer:</p>
          {question.answer}
        </div>
      )}

      {/* Intro line */}
      {question.explanation && question.explanation.intro && 
      typeof question.explanation?.intro === "string" &&
      question.explanation.intro.includes(question.answer) && (
        <div style={{ marginTop: "1rem"}}>
        <p className="mt-3 font-medium text-gray-800">
          {question.explanation.intro}
        </p>
        </div>
        )}

      {/* Bullet points */}
      {question.explanation && question.explanation.points?.length > 0 
      && typeof question.explanation?.intro === "string" &&
      question.explanation.intro.includes(question.answer) && (
        <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
          {question.explanation.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      )}

      {/* Code block */}
      {question.explanation && question.explanation.code && 
      typeof question.explanation?.intro === "string" &&
      question.explanation.intro.includes(question.answer) && (
        <CodeBlock language="java" code={question.explanation.code} />
        )}
              </div>
      )}
      </h5>

      {Array.isArray(question?.differences) && question.differences.length > 0 && (
        <table className="table-auto border mt-3">
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