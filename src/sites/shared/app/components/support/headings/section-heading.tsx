import React from 'react'
import { useTexts } from '../../../functions/store/use-texts'

interface SectionHeadingInterface {
  (props: { name: string }): React.ReactElement
}

export const SectionHeading: SectionHeadingInterface = props => {
  const { name } = props
  const { [`${name}SectionHeading`]: heading } = useTexts()

  return <h2>{heading}</h2>
}
