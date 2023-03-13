import React from 'react'

interface ExplanationInterface {
  (props: { explanation: string }): JSX.Element
}

export const Explanation: ExplanationInterface = props => {
  const { explanation } = props

  return <div className='explanation'>{explanation}</div>
}
