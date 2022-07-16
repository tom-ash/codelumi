import React from 'react'

const Anchor = (props: AnchorProps) => {
  const {
    href,
    rel,
    target,
    style,
    content
  } = props
  
  const anchorProps = {
    href,
    rel,
    target,
    style
  }

  return (
    <a {...anchorProps}>
      {content}
    </a>
  )

  
}

export default Anchor
