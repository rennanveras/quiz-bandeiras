import { TypeQuestion } from "../../types/typeQuestions";

type Props = {
  questions: TypeQuestion[];
  answers: number[];
}

export const Results = ({ questions, answers }: Props) => {
  return (
    <div className="p-3">
      {questions.map((item, key) => (
        <div key={key} className={`mb-3 p-1 ${item.answer === answers[key] ? 'bg-green-100' : 'bg-red-100'}`}>
          <div className="font-bold">{key + 1}. Resposta correta - {item.options[item.answer]}</div>
          <div>
            <span>({item.answer === answers[key] ? 'Acertou' : 'Errou'}) - </span>
            {item.options[item.answer]}
          </div>
        </div>
      ))}
    </div>
  )
}
