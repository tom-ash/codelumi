import React from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { useData } from '../../../../../shared/app/functions/store/use-data'
import Markdown from 'markdown-to-jsx'
import { Dispatch } from 'redux'
import { useDispatch } from 'react-redux'
import { submit } from '../../posting/components/create/components/form/functions/submit'

enum QuestionType {
  SINGLE_CHOICE = 'singleChoice',
  MULTIPLE_CHOICE = 'multipleChoice',
}

enum SequenceLetter {
  A = 'a',
  B = 'b',
  C = 'c',
  D = 'd',
  E = 'e',
  F = 'f',
  G = 'g',
  H = 'h',
}

interface Answer {
  sequenceLetter: SequenceLetter
  body: string
  isCorrect: boolean
  isSelected: boolean
}

interface SelectAnswer {
  (attrs: {
    type: QuestionType,
    answers: Answer[],
    selectedAnswerSequenceLetter: SequenceLetter,
    dispatch: Dispatch,
  }): void
}

const selectAnswer: SelectAnswer = (attrs) => {
  const {
    type,
    answers,
    selectedAnswerSequenceLetter,
    dispatch,
  } = attrs

  const newAnswers = answers.map(answer => {
    if (answer.sequenceLetter === selectedAnswerSequenceLetter) {
      const isSelected =  !answer.isSelected

      return {
        ...answer,
        isSelected,
      }
    }

    return {
      ...answer
    }
  })

  dispatch({ type: 'data', value: { answers: newAnswers } })
}

interface SubmitAnswers {
  (attrs: { answers: Answer[], dispatch: Dispatch }): void
}

const submitAnswer: SubmitAnswers = ({ answers, dispatch }) => {
  let isAnsweredCorrectly = true

  answers.map(answer => {
    if (answer.isCorrect && !answer.isSelected || !answer.isCorrect && answer.isSelected) {
      isAnsweredCorrectly = false
      // TODO: Break!
    }
  })

  dispatch({ type: 'data', value: { isSubmitted: true, isAnsweredCorrectly } })
}

const QuestionsShow = () => {
  useStyles(styles)

  const {
    type,
    title,
    body,
    hint,
    answers,
    explanation,
    isAnsweredCorrectly,
    isSubmitted,
  } = useData()
  const dispatch = useDispatch()

  return (
    <div id='questions-show'>
      <h1>{title}</h1>
      <div className='question-body'>
        <Markdown>
          {body}
        </Markdown>
      </div>
      <div className='answers'>
        <ul>
          {answers.map((answer: Answer) => {
            const {
              isSelected,
              isCorrect,
              body,
            } = answer

            const classNames = ['answer']

            if (isSelected) {
              classNames.push('selected')

              if (isAnsweredCorrectly) {
                classNames.push('correct-selected')
              }

              if (isAnsweredCorrectly === false) {
                classNames.push('incorrectly-selected')
              }

            } else {
              if (isAnsweredCorrectly) {
                classNames.push('correctly-omitted')
              }

              if (isAnsweredCorrectly === false) {
                classNames.push('incorrectly-omitted')
              }
            }

            if (isAnsweredCorrectly || isAnsweredCorrectly === false) {
              classNames.push('answered')
            }

            return (
              <li
                className={classNames.join(' ')}
                {...!isSubmitted && {
                  onClick: () => selectAnswer({
                    type,
                    answers,
                    selectedAnswerSequenceLetter: answer.sequenceLetter,
                    dispatch,
                  })
                }}
              >
                <Markdown>
                  {body}
                </Markdown>
              </li>
            )
          })}
        </ul>
      </div>

      <div className='result'>
        {!isSubmitted && 'Select at least one answer.'}
        {isSubmitted && isAnsweredCorrectly && 'Congratulations! You answered correctly!'}
        {isSubmitted && !isAnsweredCorrectly && 'Alas! You answered incorrectly'}
      </div>

      <div className='buttons'>
        {/* <button className='show-answer'>
          Show answer
        </button>
        <button>
          Forfeit & Roll Another
        </button> */}
        {!isSubmitted && (
          <button
            className='submit'
            onClick={() => submitAnswer({ answers, dispatch })}
          >
            Submit
          </button>
        )}
        {/* <button>
          Subm
        </button> */}
      </div>

      {!isAnsweredCorrectly && <div className='hint'>
        <h2>Hint</h2>
        {hint}
      </div>}

      {isAnsweredCorrectly === true && <div className='explanation'>
        <h2>Explanation</h2>
        <div className='explanation-body'>
          <Markdown>
            {explanation}
          </Markdown>
        </div>
      </div>}
    </div>
  )
}

export default QuestionsShow
