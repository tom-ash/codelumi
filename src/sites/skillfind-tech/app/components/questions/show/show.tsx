import React from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { useData } from '../../../../../shared/app/functions/store/use-data'

const QuestionsShow = () => {
  useStyles(styles)

  const { title, body, hint, answers, explanation } = useData()

  return (
    <div id='questions-show'>
      <h1>{title}</h1>
      <div className='question-body'>{body}</div>
      <div className='hint'>
        <h2>Hint</h2>
        <a
          href={hint}
          target='_blank'
        >
          {hint}
        </a>
      </div>
      <div className='answers'>
        <ul>
          {answers.map((answer: string) => {
            return <li>{answer}</li>
          })}
        </ul>
      </div>
      <div className='explanation'>
        <h2>Explanation</h2>
        <div className='explanation-body'>{explanation}</div>
      </div>
    </div>
  )
}

export default QuestionsShow
