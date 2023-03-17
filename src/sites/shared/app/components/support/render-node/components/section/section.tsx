import React from 'react'
import { RenderNode } from '../../render-node'

const Section = (props: SectionProps) => {
  const {
    //@ts-ignore
    body,
    element,
    className,
    style,
    codeLang,
    identifier,
  } = props

  //@ts-ignore
  const parsedBody = body.map((node, index) => {
    const nodeProps = {
      key: index,
      node,
      index,
      body,
      sectionBody: body,
      codeLang,
    }

    return <RenderNode {...nodeProps} />
  })

  if (!element) return <>{parsedBody}</>

  const section = React.createElement(element, { className, style, identifier }, parsedBody)

  return section
}

export default Section
