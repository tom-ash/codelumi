import React from 'react'
import jsonToJsxParser from '../../functions/json_to_jsx_parser'

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
    customNodeParser,
    lang,
    langHandler,
    className
  } = props

  const section = React.createElement(
    'section',
    { className },
    jsonToJsxParser({ iSection: true, appName, jsonBody, jsonMeta, clientUrl, changeRoute, buildUrl, device, isAdmin, customNodeParser, lang, langHandler })
  )

  return section
}

export default Section
