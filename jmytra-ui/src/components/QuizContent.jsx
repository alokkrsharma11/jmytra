import './styles.css'
import CodeBlock from "./CodeBlock";

const QuizContent = ({ question }) => {

  return (
    <div className='mb-6 p-4 border rounded-lg shadow-sm bg-white text-black'>
      <h5 className="question">Question {question.id} : {question.question}</h5>
      <h5 className="explaination">
      
      {/* Intro line */}
      {question.answer && (
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