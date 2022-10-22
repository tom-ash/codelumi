import React from 'react'

const Heading = ({ tier, text, preChildren, postChildren }) => {
  const tag = `h${tier}`
  const content = (
    <>
      {preChildren}
      <span>{text}</span>
      {postChildren}
    </>
  )
  const heading = React.createElement(tag, {}, content)

  return heading
}

export default Heading
