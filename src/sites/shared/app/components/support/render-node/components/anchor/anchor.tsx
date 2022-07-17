import React from 'react'

const Anchor = (props: AnchorProps) => {
  const {
    href,
    rel,
    target,
    style,
    content,
    className
  } = props

  console.log(className)
  
  const anchorProps = {
    href,
    rel,
    target,
    style,
    className
  }

  return (
    <a {...anchorProps}>
      {content}
    </a>
  )
}

export default Anchor
