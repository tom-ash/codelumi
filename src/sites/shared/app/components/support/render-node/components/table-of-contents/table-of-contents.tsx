import React from 'react'
import { useStore } from '../../../../../functions/store/useStore'
import urlify from '../../../../../../shared/functions/transformers/routes/urlify'
import setScreenOffsetAtElement from '../../../../../functions/screen/setters/offset-at-element'

// TODO: INTERFACE

//@ts-ignore
const TableOfContents = props => {
  const { title } = props
  const { state: {
    data: {
      body,
    }
  } } = useStore()

  const article = (() => {
    try {
      return body[0].main[0].article
    } catch {
      return []
    }
  })()

  //@ts-ignore
  const headers = (article).filter(node => {
    if (node && node.h2) return node
  })

  return (
    <nav className='table-of-contents'>
      <div className='inner-container'>
        <h2>{title}</h2>
        <ul>
          {/* @ts-ignore */}
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

                    // @ts-ignore
                    history.pushState(null, null, `${window.location.pathname}#${urlify(headerContent)}`)

                    // @ts-ignore
                    const targetHeader = headers.find(headerNode => {
                      if (typeof headerNode.h2 === 'string') {
                        return urlify(headerContent) === urlify(headerNode.h2)
                      }

                      return urlify(headerContent) === urlify(headerNode.h2.c)
                    })['h2']

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
                  {headerNumber ? (
                    <>
                      <span>{headerNumber}</span>
                      <span>{headerContent}</span>
                    </>
                  ) : (
                    headerContent
                  )}
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