import React from 'react'

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
              <a
                key={index}
                className={header.t}
                href={`#${header.c}`}
              >
                {header.c}
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
