import React from 'react'
import { FloatClear } from '../../../float-clear/float-clear'
import { Link } from '../../../link/link'
import { useData } from '../../../../../functions/store/use-data'

interface QuestionIndexInterface {
  (props: { withImages?: boolean }): React.ReactElement
}

interface Question {
  url: string
  lang: Lang
  title: string
}

const QuestionIndex: QuestionIndexInterface = props => {
  const { questions = [] } = useData() as { questions: Question[] }

  console.log(questions)

  return (
    <ul className='index'>
      {questions.map(question => {
        const { url, lang, title } = question

        return (
          <li>
            <Link
              href={`/javascript/questions/${url}`}
              hrefLang={lang}
              label={title}
              title={title}
            />
          </li>
        )
      })}
      <FloatClear />
    </ul>
  )
}

export default QuestionIndex
