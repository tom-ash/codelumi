import React from 'react'
import nodeParser from "../components/node-parser/node-parser"
import loadable from '@loadable/component'

const TitleBoard = loadable(() => import('../components/title-board/title-board'))
const Editorial = loadable(() => import('../components/editorial/editorial'))
const TableOfContents = loadable(() => import('../components/table-of-contents/table-of-contents'))
const Section = loadable(() => import('../components/section/section'))

const jsonToJsxParser = props => {
  const { jsonBody, appName, device, langHandler, iSection, isAdmin, publishedOn, modifiedOn, lang } = props

  let titleBoard = null
  let editorial = null
  let tableOfContents = null

  const main = jsonBody.map((node, index) => {
    if (!node) return null

    if (node.t === 'tb') {
      const titleBoardProps = { key: index, node, appName, device, langHandler, publishedOn, modifiedOn, lang }

      titleBoard = <TitleBoard {...titleBoardProps} />

      return null
    }
    if (node.t === 'e') {
      editorial = <Editorial node={node} key={index}/>

      return null
    }
    if (node.t === 'toc') {
      tableOfContents = <TableOfContents key={index} jsonBody={jsonBody} node={node} />

      return null
    }

    if (node.t === 'section') {
      return <Section key={index} {...{ ...props, className: node.cn, jsonBody: node.c }} />
    }
    
    return nodeParser({ ...props, node, index })
  })

  const mainNode = iSection ? main : <main>{main}</main>

  return (
    <>
      {titleBoard}
      {editorial}
      {tableOfContents}
      {mainNode}
    </>
  )
}

export default jsonToJsxParser
