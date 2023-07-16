import React from 'react'
import { RenderNode } from '../../render-node'

interface LinkProps {
  href:  string;
  body: RenderNodeData;
  style: React.CSSProperties
}

const Link = (props: LinkProps) => {
  const {
    href,
    body,
    style,
  } = props

  return (
    <a
      href={href}
      style={style}
      target='_blank'
    >
      <RenderNode node={body} />
    </a>
  )
}

export default Link
