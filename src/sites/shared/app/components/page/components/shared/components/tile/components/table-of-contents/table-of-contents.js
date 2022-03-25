import React, { useState } from 'react'
import urlify from '../../../../../../../../../shared/functions/transformers/routes/urlify'
import setScreenOffsetAtElement from '../../../../../../../../../app/functions/screen/setters/offset-at-element.js'

const TableOfContents = (props) => {
  const { jsonBody, node: { c: nodeContent } } = props
  const headers = jsonBody.filter(node => {
    if (node.t === 'h2') return node
  })

  return (
    <nav className='table-of-contents'>
      <h2>
        {nodeContent}
      </h2>
      <ul>
        {headers.map((header, index) => {
          const headerContent = header.c
          const headerNumber = header.n

          return (
            <li key={index}>
              <a
                key={index}
                className={header.t}
                href={`#${urlify(headerContent)}`}
                onClick={e => {
                  e.preventDefault()

                  history.pushState(null, null, `${window.location.pathname}#${urlify(headerContent)}`)

                  const targetHeader = headers.find(headerNode => urlify(headerContent) === urlify(headerNode.c))
                  const domHeaders = document.getElementsByTagName('h2')
                  let element

                  for (var i = 0; i < domHeaders.length; i++) {
                    if (domHeaders[i].textContent == targetHeader.c) {
                      element = domHeaders[i]
                      break
                    }
                  }

                  const translation = -80
                  setScreenOffsetAtElement({ element, translation })
                }}
              >
                {headerNumber ?
                <><span>{headerNumber}</span><span>{headerContent}</span></>
                : headerContent}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default TableOfContents
