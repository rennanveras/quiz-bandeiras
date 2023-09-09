
import { useState } from "react";
import { questions } from "./data/questions";
import { Results } from "./components/results";
import { Quiz } from "./components/quiz";
import Footer from "./components/footer";

const Page = () => {
  const [answers, setAnswers] = useState<number[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false)
  
  const loadNextQuestion = () => {
    if(questions[currentQuestion + 1]){
      setCurrentQuestion(currentQuestion + 1);
    }else{
      setShowResult(true);
    }
  }

  const handleAnswered = (answer: number) => {
    setAnswers([ ...answers, answer]);
    loadNextQuestion();
    console.log(answers)
  }

  const  handleRestartButton = () => {
    setAnswers([]);
    setCurrentQuestion(0);
    setShowResult(false)
  }

  return (
    <div className="w-screen h-screen bg-gradient-to-r from-cyan-500 to-blue-500 flex justify-center items-center flex-col shadow shadow-black">
      <section className="bg-white text-black w-full max-w-xl rounded-md mx-2">
        <div className="p-4  border-b font-bold text-xl">
          <h1>Quiz</h1>
        </div>
          {!showResult &&
            <Quiz
            question={questions[currentQuestion]}
            count={currentQuestion + 1}
            onAnswer={handleAnswered}
          />
          }
          {showResult &&
            <Results questions={questions} answers={answers} />
          }
        <div className="p-4 text-center border-t">
          {!showResult &&
            `${currentQuestion + 1} de ${questions.length} pergunta${questions.length > 1 ? 's' : ''}`
          }
          {showResult &&
            <button onClick={handleRestartButton} className="px-3 py-2 bg-blue-500 rounded-md text-white">Reiniciar Quiz</button>
          }
          
        </div>
    </section>
    <Footer />
      
    </div>
  );
}

export default Page;