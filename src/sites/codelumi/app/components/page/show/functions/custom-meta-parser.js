import React, { useState } from 'react'
import urlify from '../../../../../../shared/shared/functions/transformers/routes/urlify.js'
import setScreenOffsetAtElement from '../../../../../../shared/app/functions/screen/setters/offset-at-element.js'

function customMetaParser({ jsonBody, jsonMeta, device }) {
  const { withNavMenu } = jsonMeta

  const headers = jsonBody.filter(node => {
    if (node.t === 'h2') return node
  })

  const [zIndex, setZIndex] = useState(0)

  if (withNavMenu && device === 'largePc') {
    return (
      <div className='table-of-contents-container' style={{ zIndex }}>
        <div
          className='table-of-contents'
          onMouseEnter={() => setZIndex(4)}
          onMouseLeave={() => setZIndex(0)}
        >
          {headers.map((header, index) => {
            const headerContent = header.c

            return (
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
                {headerContent}
              </a>
            )
          })}
        </div>
      </div>
    )
  }

  return null
}

export default customMetaParser
