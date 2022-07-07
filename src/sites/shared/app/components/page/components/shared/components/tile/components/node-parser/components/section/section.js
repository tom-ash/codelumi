import React from 'react'
import nodeParser from '../../node-parser'

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

  const body = jsonBody.map((node, index) => nodeParser({ ...props, node, index, sectionBody: jsonBody }))

  if (!element) return body

  const section = React.createElement(
    element,
    { className },
    body
  )

  return section
}

export default Section
