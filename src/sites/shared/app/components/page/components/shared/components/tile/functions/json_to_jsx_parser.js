import React from 'react'
import nodeParser from "../components/node-parser/node-parser"
import loadable from '@loadable/component'

const TitleBoard = loadable(() => import('../components/title-board/title-board.tsx'))
const TableOfContents = loadable(() => import('../components/table-of-contents/table-of-contents.js'))

const jsonToJsxParser = props => {
  const { jsonBody } = props

  const titleBoard = null
  const tableOfContents = null
  const main = []
  
  main = jsonBody.map((node, index) => {
    if (index === 0 && node.t === 'tb') {
      titleBoard = <TitleBoard key={index} node={node} />

      return null
    }
    if (node.t === 'toc') {
      tableOfContents = <TableOfContents key={index} jsonBody={jsonBody} node={node} />

      return null
    }
    
    return nodeParser({ ...props, node, index })
  })

  return (
    <>
      {titleBoard}
      {tableOfContents}
      <main>
        {main}
      </main>
    </>
  )
}

export default jsonToJsxParser
