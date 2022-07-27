import React from 'react'
import buildAnchor from './functions/build-anchor'

const Paragraph = (props: ParagraphProps) => {
  const { content } = props
  let enrichedContent = content

  enrichedContent = enrichedContent.replace(
    /\`(.+?)\`/g,
    (_fullMatch, innerMatch) => `<code>${innerMatch}</code>`
  )

  enrichedContent = enrichedContent.replace(
    /\*\*(.+?)\*\*/g,
    (_fullMatch, innerMatch) => `<strong>${innerMatch}</strong>`
  )

  enrichedContent = enrichedContent.replace(
    /\*(.+?)\*/g,
    (_fullMatch, innerMatch) => `<em>${innerMatch}</em>`
  )

  enrichedContent = enrichedContent.replace(
    /(a)\[(.+)\]/g,
    // @ts-ignore
    (_fullMatch, tag, attributes) => {
      if (attributes.indexOf('text') === -1) return _fullMatch

      const attrs = attributes.split(/,\s(?=[^,]+:)/)

      switch (tag) {
        case 'a': return buildAnchor(attrs)
      }
    }
  )

  return <p dangerouslySetInnerHTML={{ __html: enrichedContent }} />
}

export default Paragraph
