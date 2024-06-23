import React from 'react'
import { useTexts } from '../../../functions/store/use-texts'

type InstructionsInterface = {
  (props: { name: string; isError?: boolean }): React.ReactElement
}

export const Instructions: InstructionsInterface = props => {
  const { name, isError } = props

  const texts = useTexts()
  const instructions = texts[`${name}Instructions`]

  const classNames = ['instructions']
  if (isError) {
    classNames.push('error')
  }

  return <div className={classNames.join(' ')}>{instructions}</div>
}
