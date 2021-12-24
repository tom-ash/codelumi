import React from 'react'
import buildAnchor from './functions/build-anchor'

const RichText = props => {
  const { content, element } = props
  const enrichedContent = content.replace(/\[([^\[]+)\]/g, (fullMatch, innerMatch) => {
    const matchArray = innerMatch.split(', ')
    const matchTag = matchArray.shift()

    switch (matchTag) {
      case 'a': return buildAnchor(matchArray)
    }
  })

  const DomTag = element || 'p'

  return <DomTag dangerouslySetInnerHTML={{ __html: enrichedContent }} />
}

export default RichText
