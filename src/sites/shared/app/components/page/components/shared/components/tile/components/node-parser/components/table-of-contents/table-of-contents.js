import React, { useState } from 'react'
import urlify from '../../../../../../../../../../../shared/functions/transformers/routes/urlify'
import setScreenOffsetAtElement from '../../../../../../../../../../../app/functions/screen/setters/offset-at-element.js'

const TableOfContents = (props) => {
  const { jsonBody, title } = props
  const mainNode = jsonBody.find(node => typeof node === 'object' && node.main)
  const main = mainNode ? mainNode.main : null

  const headers = (main || jsonBody).filter(node => {
    if (node && node.h2) return node
  })

  return (
    <nav className='table-of-contents'>
      <div className='inner-container'>
        <h2>
          {title}
        </h2>
        <ul>
          {headers.map((header, index) => {
            const headerContent = typeof header.h2 === 'string' ? header.h2 : header.h2.c
            const headerNumber = typeof header.h2 === 'string' ? null : header.h2.n

            return (
              <li key={index}>
                <a
                  key={index}
                  className={header.t}
                  href={`#${urlify(headerContent)}`}
                  onClick={e => {
                    e.preventDefault()

                    history.pushState(null, null, `${window.location.pathname}#${urlify(headerContent)}`)

                    const targetHeader = (headers.find(headerNode => {
                      if (typeof headerNode.h2 === 'string') {
                        return urlify(headerContent) === urlify(headerNode.h2)
                      }

                      return urlify(headerContent) === urlify(headerNode.h2.c)
                    }))['h2']

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
      </div>
    </nav>
  )
}

export default TableOfContents
