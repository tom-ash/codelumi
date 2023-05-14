import React from 'react'
import { useStore } from '../../../../../functions/store/useStore'
import { Link } from '../../../link/link'

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
                <Link
                  href={`#${identifier}`}
                  label={headingTwo}
                  title={headingTwo}
                />
                {subsections.length > 0 && <ul>
                    {/* @ts-ignore */}
                    {subsections.map(subsection => {
                      const {
                        identifier,
                        headingThree,
                      } = subsection

                      return (
                        <li>
                          <Link
                            href={`#${identifier}`}
                            label={headingThree}
                            title={headingThree}
                          />
                        </li>
                      )
                    })}
                  </ul>}
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default TableOfContents
