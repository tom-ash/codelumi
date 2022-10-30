import React from 'react'

export const Heading = (props: HeadingProps) => {
  const { rank, heading } = props

  const objectHeading = typeof heading === 'object'
  const tag = `h${rank}`
  const headingText = objectHeading ? heading.c : heading

  return React.createElement(tag, {}, headingText)
}

export default Heading
