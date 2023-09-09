import { TypeQuestion } from "../../types/typeQuestions";
import { useState } from "react";

type Props = {
  question: TypeQuestion;
  count: number;
  onAnswer: (answer: number) => void;
}

export const Quiz = ({ question, count, onAnswer }: Props) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)

  const verification = (key: number) => {
    if(selectedAnswer === null) {
      setSelectedAnswer(key);

      setTimeout(() => {
        onAnswer(key)
        setSelectedAnswer(null);
      }, 1000)
    }
  }

  return(
    <div className="p-4">
      <h2 className="mb-2 font-bold text-2xl">{count}. De onde é está bandeira ?</h2>
      <div className="flex justify-center my-4">
        <img className="w-1/3" src={`https://servidor-estaticos-ashen.vercel.app/${question.flag}`} alt={question.options[question.answer]} />
      </div>
      <ul className="flex flex-col gap-2">
        {question.options.map((item, key) => (
          
          <li 
            key={key}
            onClick={() => verification(key)}
            className={`bg-blue-200 w-full rounded-md p-2 flex border border-blue-300 cursor-pointer 
              ${selectedAnswer !== null ? `cursor-auto` : `cursor-pointer hover:opacity-60`}
              ${selectedAnswer !== null && selectedAnswer === question.answer && selectedAnswer === key && 'bg-green-100 border-green-300'}
              ${selectedAnswer !== null && selectedAnswer !== question.answer && selectedAnswer === key && 'bg-red-100 border-red-300'}
            `}
          >{item}</li>
        ))}
      </ul>
  </div>
  )
}