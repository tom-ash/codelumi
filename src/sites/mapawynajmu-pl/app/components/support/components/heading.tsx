import React from 'react'

interface HeadingInterface {
  (props: {
    tier: number
    text: string
    preChildren?: React.ReactNode
    postChildren?: React.ReactNode
  }): JSX.Element
}

export const Heading: HeadingInterface = (props) => {
  const { tier, text, preChildren, postChildren } = props
  const tag = `h${tier}`
  const content = (preChildren || postChildren) ? (
    <>
      {preChildren}
      <span>{text}</span>
      {postChildren}
    </>
  ) : text

  const heading = React.createElement(tag, {}, content)

  return heading
}
