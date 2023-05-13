import React from 'react'
import { useStore } from '../../../../../functions/store/useStore'
import setScreenOffsetAtElement from '../../../../../functions/screen/setters/offset-at-element'

// TODO: Refactor the whole file.

//@ts-ignore
const TableOfContents = props => {
  const { title } = props
  const {
    state: {
      data: { body },
    },
  } = useStore()

  const article = (() => {
    try {
      return body[0].Main[0].Article
    } catch {
      return []
    }
  })()

  // @ts-ignore
  const sections = article.filter((node: RenderNode) => node.Section)

  // @ts-ignore
  const mappedSections = sections.map(section => {
    const identifier = section.identifier
    const sectionNodes = section.Section
    // @ts-ignore
    const headingTwo = sectionNodes.find(node => node.HeadingTwo)?.HeadingTwo
    // @ts-ignore
    const subsections = sectionNodes.filter(node => node.Section).map(section => {
      // @ts-ignore
      return {
        // @ts-ignore
        identifier: section.identifier,
        // @ts-ignore
        headingThree: section.Section.find(node => node.HeadingThree)?.HeadingThree,
      }
    })

    return {
      identifier,
      headingTwo,
      subsections,
    }
  })

  //@ts-ignore
  const headings = article
  //@ts-ignore
    .filter(node => {
      if (node.Section && node.Section[0] && node.Section[0].HeadingTwo) return true
      //@ts-ignore
    })
    //@ts-ignore
    .map(node => node.Section[0].HeadingTwo)

  return (
    <nav className='table-of-contents'>
      <div className='inner-container'>
        <h2>{title}</h2>
        <ul>
          {/* @ts-ignore */}
          {mappedSections.map((mappedSection, index) => {
            const {
              identifier,
              headingTwo,
              subsections,
            } = mappedSection

            return (
              <li key={index}>
                <a
                  key={index}
                  href={`#${identifier}`}
                  onClick={e => {
                    e.preventDefault()

                    // @ts-ignore
                    history.pushState(null, null, `${window.location.pathname}#${identifier}`)

                    const section = document.getElementById(identifier)
                    const translation = -80
                    // @ts-ignore
                    setScreenOffsetAtElement({ element: section, translation })
                  }}
                >
                  {headingTwo}
                </a>
                <ul>
                    {/* @ts-ignore */}
                    {subsections.map(subsection => {
                      const {
                        identifier,
                        headingThree,
                      } = subsection

                      return (
                        <li>
                          <a
                            key={index}
                            href={`#${identifier}`}
                            onClick={e => {
                              e.preventDefault()

                              // @ts-ignore
                              history.pushState(null, null, `${window.location.pathname}#${identifier}`)

                              const section = document.getElementById(identifier)
                              const translation = -80
                              // @ts-ignore
                              setScreenOffsetAtElement({ element: section, translation })
                            }}
                          >
                            {headingThree}
                          </a>
                        </li>
                      )
                    })}
                  </ul>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default TableOfContents
