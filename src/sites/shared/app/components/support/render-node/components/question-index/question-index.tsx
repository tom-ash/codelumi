import React from 'react'
import { FloatClear } from '../../../float-clear/float-clear'
import { Link } from '../../../link/link'
import { useData } from '../../../../../functions/store/use-data'

interface QuestionIndexInterface {
  (props: { withImages?: boolean }): React.ReactElement
}

interface Question {
  href: string
  lang: Lang
  title: string
}

const QuestionIndex: QuestionIndexInterface = props => {
  const { questions = [] } = useData() as { questions: Question[] }

  return (
    <ul className='index'>
      {questions.map(question => {
        const { href, lang, title } = question

        return (
          <li>
            <Link
              href={href}
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
