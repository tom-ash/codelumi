import React from 'react'
import scrollToElement from '../../../../../../shared/app/functions/screen/scrollers/to-element.js'

function customMetaParser({ jsonBody, jsonMeta }) {

  const { withNavMenu } = jsonMeta

  const headers = jsonBody.filter(node => {
    if (node.t === 'h2') return node
  })

  if (withNavMenu) {
    return (
      <div className='table-of-contents-container'>
        <div className='table-of-contents'>
          <div className='title'>
            Table of Contents
          </div>
          {headers.map((header, index) => {
            return (
              <div
                key={index}
                className={header.t}
                onClick={() => {
                  const nodes = document.querySelectorAll(header.t)

                  for (let i = 0; i < nodes.length; i++) {
                    if (nodes[i].textContent === header.c) {
                      scrollToElement(nodes[i], 30, -92)
                      break
                    }
                  }
                }}
              >
                {header.c}
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  return null
}

export default customMetaParser
