import React from 'react'
import RenderNode from '../../render-node'

const Section = (props: SectionProps) => {
  const {
    appName,
    jsonBody,
    clientUrl,
    changeRoute,
    device,
    lang,
    langHandler,
    element,
    className,
    st: style,
    pageTitle,
    coverImage,
    codeLang,
    id,
  } = props

  const body = jsonBody.map((node, index) => {
    const nodeProps = {
      key: index,
      node,
      index,
      jsonBody,
      clientUrl,
      appName,
      device,
      lang,
      changeRoute,
      langHandler,
      sectionBody: jsonBody,
      pageTitle,
      coverImage,
      codeLang,
    }

    return <RenderNode {...nodeProps} />
  })

  if (!element) return <>{body}</>

  console.log(style)

  const section = React.createElement(element, { className, style, id }, body)

  return section
}

export default Section
