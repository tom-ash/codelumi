import React from 'react'
import { Heading } from './heading'

interface HeadingTwoInterface {
  (props: { text: string }): React.ReactElement
}

export const HeadingTwo: HeadingTwoInterface = props => {
  const { text } = props

  const headingProps = {
    tier: 2,
    text,
  }

  return <Heading {...headingProps} />
}

export default Heading
