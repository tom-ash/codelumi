import React from 'react'

type InstructionsInterface = {
  (props: { text: string; isError?: boolean }): React.ReactElement
}

export const Instructions: InstructionsInterface = props => {
  const { text, isError } = props

  const classNames = ['instructions']
  if (isError) {
    classNames.push('error')
  }

  return <div className={classNames.join(' ')}>{text}</div>
}
