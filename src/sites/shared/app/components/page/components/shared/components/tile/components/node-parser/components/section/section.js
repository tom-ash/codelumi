import React from 'react'
import Node from '../../node-parser'

const Section = props => {
  const {
    appName,
    jsonBody,
    jsonMeta,
    clientUrl,
    changeRoute,
    buildUrl,
    device,
    isAdmin,
    lang,
    langHandler,
    className,
    element
  } = props

  const body = jsonBody.map((node, index) => {
    const nodeProps = { ...props, node, index, sectionBody: jsonBody }
    
    return <Node {...nodeProps} />
  })

  if (!element) return body

  const section = React.createElement(
    element,
    { className },
    body
  )

  return section
}

export default Section
