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
        <div style={{ marginTop: "1rem", fontWeight: "bold"}}>
          <p style={{ color: "green" }}>You selected: {selected}</p>
        
          <p style={{ color: "blue" }}>Current Answer is: {question.answer}</p>
        </div>
      )}
      {selected && selected !== question.answer && (
        <div style={{ marginTop: "1rem", fontWeight: "bold" }}>
          <p style={{ color: "red" }}>You selected: {selected}</p>
        
          <p style={{ color: "blue" }}>Current Answer is: {question.answer}</p>
        </div>
      )}

      {/* Intro line */}
      {!question.options && question.answer && (
        <p className="mt-3 font-medium text-gray-800">
          <h5 className="question">Answer:</h5> {question.answer}
        </p>
      )}

      {/* Intro line */}
      {question.explanation.intro && (
        <p className="mt-3 font-medium text-gray-800">
          {question.explanation.intro}
        </p>
      )}

      {/* Bullet points */}
      {question.explanation.points?.length > 0 && (
        <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
          {question.explanation.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      )}

      {/* Code block */}
      {question.explanation.code && (
        <CodeBlock language="java" code={question.explanation.code} />
        )}
      </h5>
      
    </div>
  );
};

export default QuizContent;