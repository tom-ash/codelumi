import React from 'react'
import buildAnchor from './functions/build-anchor'

const Paragraph = props => {
  const { content, element } = props
  let enrichedContent = content

  enrichedContent = enrichedContent.replace(/\`(.+?)\`/g, (_fullMatch, innerMatch) => `<code>${innerMatch}</code>`)
  enrichedContent = enrichedContent.replace(/\*\*(.+?)\*\*/g, (_fullMatch, innerMatch) => `<strong>${innerMatch}</strong>`)
  enrichedContent = enrichedContent.replace(/\*(.+?)\*/g, (_fullMatch, innerMatch) => `<em>${innerMatch}</em>`)

  enrichedContent = enrichedContent.replace(/\[([^\[]+)\]/g, (_fullMatch, innerMatch) => {
    const matchArray = innerMatch.split(', ')
    const matchTag = matchArray.shift()

    switch (matchTag) {
      case 'a': return buildAnchor(matchArray)
    }
  })

  const DomTag = element || 'p'

  return <DomTag dangerouslySetInnerHTML={{ __html: enrichedContent }} />
}

export default Paragraph
