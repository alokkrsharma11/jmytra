import './styles.css'
import CodeBlock from "./CodeBlock";

const QuizContent = ({ question, technology, intro, points, code }) => {

  return (
    <div>
      <h5 className="question">Question {question.id} : {question.question}</h5>
      <h5 className="explaination">
      
      {/* Intro line */}
      {intro && (
        <p className="mt-3 font-medium text-gray-800">
          {intro}
        </p>
      )}

      {/* Bullet points */}
      {points?.length > 0 && (
        <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
          {points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      )}

      {/* Code block */}
      {code && (
        <CodeBlock language="java" code={code} />
        )}
      </h5>
      
    </div>
  );
};

export default QuizContent;