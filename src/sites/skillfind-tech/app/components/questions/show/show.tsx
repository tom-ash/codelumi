import React from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { useData } from '../../../../../shared/app/functions/store/use-data'
import Markdown from 'markdown-to-jsx'
import { Dispatch } from 'redux'
import { useDispatch } from 'react-redux'
import { submit } from '../../posting/components/create/components/form/functions/submit'
import { SVG } from '../../../../../shared/app/components/support/svg/svg'
import { changeUrl } from '../../../../../shared/app/functions/routes/changers/change-url'

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

    if (answer.sequenceLetter !== selectedAnswerSequenceLetter && type === QuestionType.SINGLE_CHOICE) {
      return {
        ...answer,
        isSelected: false,
      }
    }

    return {
      ...answer
    }
  })

  const isAnyAnswerSelected = !!newAnswers.find(answer => answer.isSelected)

  dispatch({ type: 'data', value: { answers: newAnswers, isAnyAnswerSelected } })
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
    isSingleChoice,
    isMultipleChoice,
    isAnyAnswerSelected,
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
        {!isSubmitted && isSingleChoice && 'Select one correct answer.'}  
        {!isSubmitted && isMultipleChoice && 'Select one or more correct answers.'}
        {isSubmitted && isAnsweredCorrectly && (
          <>
            <div className='icon correct'>
              <SVG name='check' />
            </div>
            <div className='message correct'>
              Correct!
            </div>
          </>
        )}
        {isSubmitted && !isAnsweredCorrectly && (
          <>
            <div className='icon incorrect'>
              <SVG name='check' />
            </div>
            <div className='message incorrect'>
              Incorrect!
            </div>
          </>
        )}
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
            disabled={!isAnyAnswerSelected}
            className='submit'
            onClick={() => submitAnswer({ answers, dispatch })}
          >
            <SVG name='paperPlane' />
            Submit
          </button>
        )}
        {isSubmitted && (
          <>
            {isSubmitted && !isAnsweredCorrectly && (
              <button
                className='retry'
                onClick={() => changeUrl({ href: window.location.pathname })}
              >
                <SVG name='retry' /> Retry
              </button>              
            )}
            <button
              className='next'
              // onClick={() => submitAnswer({ answers, dispatch })}
            >
              <SVG name='dice' /> Next
            </button>
          </>
        )}
      </div>

      {!isAnsweredCorrectly && <div className='hint'>
        <h2>Hint</h2>
        <Markdown>
          {hint}
        </Markdown>
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
