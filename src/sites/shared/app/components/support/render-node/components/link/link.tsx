import React from 'react'
import { RenderNode } from '../../render-node'

interface GtagEvent {
  name: string
  params?: object[]
}

interface LinkProps {
  href: string
  body: RenderNodeData
  style: React.CSSProperties
  event?: GtagEvent
}

const Link = (props: LinkProps) => {
  const { href, body, style, event } = props

  let onClick = undefined // TODO

  if (event) {
    onClick = () => {
      const { name: eventName, params } = event

      // @ts-ignore
      window.gtag('event', eventName, params)
    }
  }

  return (
    <a
      onClick={onClick}
      href={href}
      style={style}
      target='_blank'
    >
      <RenderNode node={body} />
    </a>
  )
}

export default Link
