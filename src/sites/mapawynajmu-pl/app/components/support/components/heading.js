import React from 'react'

export const Heading = ({ tier, text, preChildren, postChildren }) => {
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
