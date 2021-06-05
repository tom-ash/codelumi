import React from 'react'

function customMetaParser({ meta, jsonBody }) {
  const jsonMeta = (function() {
    try {
      return typeof meta === 'object' ? meta : JSON.parse(meta)
    } catch {
      return null
    }
  })()

  if (!jsonMeta) return null

  const { withNavMenu } = jsonMeta

  const headers = jsonBody.filter(node => {
    if (node.t === 'h2') return node
  })

  if (withNavMenu) {
    return (
      <div className='table-of-contents-container'>
        <div className='table-of-contents'>
          {headers.map((header, index) => {
            return (
              <div key={index} className={header.t}>
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
