import React from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { useData } from '../../../../../shared/app/functions/store/use-data'
import Markdown from 'markdown-to-jsx'
import { Dispatch } from 'redux'
import { useDispatch } from 'react-redux'
import { SVG } from '../../../../../shared/app/components/support/svg/svg'
import { changeUrl } from '../../../../../shared/app/functions/routes/changers/change-url'
import API_URL from '../../../../shared/constants/urls/api'
import Breadcrumbs from '../../../../../shared/app/components/support/render-node/components/breadcrumbs/breadcrumbs'
import { FloatClear } from '../../../../../shared/app/components/support/float-clear/float-clear'

const getNewQuestion = () => {
  fetch(API_URL + '/questions')
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(href => {
      console.log(href)

      changeUrl({ href })
    })
}

enum QuestionType {
  SINGLE_CHOICE = 'singleChoice',
  MULTIPLE_CHOICE = 'multipleChoice',
}

interface Answer {
  position: number
  body: string
  isCorrect: boolean
  isSelected: boolean
  explanation: string
  hint: string;
}

interface SelectAnswer {
  (attrs: {
    type: QuestionType,
    answers: Answer[],
    selectedPosition: number,
    dispatch: Dispatch,
  }): void
}

const selectAnswer: SelectAnswer = (attrs) => {
  const {
    type,
    answers,
    selectedPosition,
    dispatch,
  } = attrs

  console.log(attrs)

  const newAnswers = answers.map(answer => {
    if (answer.position === selectedPosition) {
      const isSelected =  !answer.isSelected

      return {
        ...answer,
        isSelected,
      }
    }

    if (answer.position !== selectedPosition && type === QuestionType.SINGLE_CHOICE) {
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
    isAnsweredCorrectly,
    isSubmitted,
    isSingleChoice,
    isMultipleChoice,
    isAnyAnswerSelected,
  } = useData()
  const dispatch = useDispatch()

  return (
    <div id='questions-show'>
      <Breadcrumbs />
      <div className='container'>
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
                explanation,
                hint,
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
                <>
                <li
                  className={classNames.join(' ')}
                  {...!isSubmitted && {
                    onClick: () => selectAnswer({
                      type,
                      answers,
                      selectedPosition: answer.position,
                      dispatch,
                    })
                  }}
                >
                  <div className='body'>
                    <div className='markdown'>
                      <Markdown>
                        {body}
                      </Markdown>
                    </div>
                    {hint && <div className='hint-container'>
                      <div className='question-mark'>
                        <SVG name='questionMark' />
                        <div className='hint'>
                          <Markdown>
                            {hint}
                          </Markdown>
                        </div>
                      </div>
                    </div>}
                  </div>
                  {isAnsweredCorrectly && explanation && <div className='explanation'>
                    <Markdown>
                      {explanation}
                    </Markdown>
                  </div>}
                </li>
                </>
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
                onClick={() => getNewQuestion()}
              >
                <SVG name='dice' /> Next
              </button>
            </>
          )}
        </div>
        {!isAnsweredCorrectly && <div className='general-hint'>
          <h2>Hint</h2>
          <Markdown>
            {hint}
          </Markdown>
        </div>}
      </div>
    </div>
  )
}

export default QuestionsShow
