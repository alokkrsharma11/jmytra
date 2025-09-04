import { useEffect, useState } from 'react'
import QuizContent from './QuizContent';
import PageLayout from './PageLayout';

const JavaTutorial = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // Simulating API call (replace with fetch from Mongo backend)
    fetch("/quizs.json")
      .then((res) => res.json())
      .then((val) => setQuestions(val))
      .catch((err) => console.error("Error loading JSON:", err));
  }, []);


  return (
    <div className='container'>
      <PageLayout title='Welcome to Java Tutorial !' />
          {questions.map((question) => (
            <QuizContent
              key={question.id}
              question={question}
              intro={question.explanation.intro}
              points={question.explanation.points}
              code={question.explanation.code}
            />
          ))}
        
      
    </div>

  );
}

export default JavaTutorial;