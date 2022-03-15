import React from 'react'
import nodeParser from "../components/node-parser/node-parser"
import loadable from '@loadable/component'

const TitleBoard = loadable(() => import('../components/title-board/title-board.tsx'))
const Editorial = loadable(() => import('../components/editorial/editorial.js'))
const TableOfContents = loadable(() => import('../components/table-of-contents/table-of-contents.js'))
const Section = loadable(() => import('../components/section/section.js'))

const jsonToJsxParser = props => {
  const { jsonBody, appName, device, langHandler, iSection } = props

  let titleBoard = null
  let editorial = null
  let tableOfContents = null

  const main = jsonBody.map((node, index) => {
    if (index === 0 && node.t === 'tb') {
      titleBoard = <TitleBoard key={index} node={node} appName={appName} device={device} langHandler={langHandler}/>

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
