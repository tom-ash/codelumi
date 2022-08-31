import React from 'react'
import RenderNode from '../../render-node'

const Section = (props: SectionProps) => {
  const {
    appName,
    jsonBody,
    jsonMeta,
    clientUrl,
    changeRoute,
    device,
    lang,
    langHandler,
    element,
    className,
    st: style,
    pageTitle,
    coverImage
  } = props

  const body = jsonBody.map((node, index) => {
    const nodeProps = {
      key: index,
      node,
      index,
      jsonBody,
      jsonMeta,
      clientUrl,
      appName,
      device,
      lang,
      changeRoute,
      langHandler,
      sectionBody: jsonBody,
      pageTitle,
      coverImage
    }
    
    return <RenderNode {...nodeProps} />
  })

  if (!element) return (
    <>{body}</>
  )

  const section = React.createElement(
    element,
    { className, style },
    body
  )

  return section
}

export default Section
