import React from 'react'
import { useStore } from '../../../../../functions/store/useStore'
import setScreenOffsetAtElement from '../../../../../functions/screen/setters/offset-at-element'
// @ts-ignore
import parameterize from 'parameterize'

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
      return body[0].Main[0].Article
    } catch {
      return []
    }
  })()

  //@ts-ignore
  const headings = (article).filter(node => {
    if (node.Section && node.Section[0] && node.Section[0].HeadingTwo) return true
    //@ts-ignore
  }).map(node => node.Section[0].HeadingTwo)

  return (
    <nav className='table-of-contents'>
      <div className='inner-container'>
        <h2>{title}</h2>
        <ul>
          {/* @ts-ignore */}
          {headings.map((heading, index) => {
            const urlifiedHeading = parameterize(heading)

            return (
              <li key={index}>
                <a
                  key={index}
                  // className={heading.t}
                  href={`#${urlifiedHeading}`}
                  onClick={e => {
                    e.preventDefault()

                    // @ts-ignore
                    history.pushState(null, null, `${window.location.pathname}#${urlifiedHeading}`)

                    const sections = document.getElementsByTagName('section')
                    let element

                    for (var i = 0; i < sections.length; i++) {
                      if (sections[i].id == urlifiedHeading) {
                        element = sections[i]
                        break
                      }
                    }

                    const translation = -80
                    setScreenOffsetAtElement({ element, translation })
                  }}
                >
                  {heading}
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