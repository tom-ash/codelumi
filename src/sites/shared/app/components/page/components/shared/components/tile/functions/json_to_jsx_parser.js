import React from 'react'
import nodeParser from "../components/node-parser/node-parser"
import loadable from '@loadable/component'

const Section = loadable(() => import('../components/section/section'))

const jsonToJsxParser = props => {
  const { jsonBody, appName, device, langHandler, iSection, isAdmin, publishedOn, modifiedOn, lang } = props

  const main = jsonBody.map((node, index) => {
    if (!node) return null

    if (node.t === 'section') {
      return <Section key={index} {...{ ...props, className: node.cn, jsonBody: node.c }} />
    }
    
    return nodeParser({ ...props, node, index })
  })

  return main
}

export default jsonToJsxParser
