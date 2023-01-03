import React from 'react'
import { enrichText } from '../../helpers/enrich-text/enrich-text'

const Paragraph = (props: ParagraphProps) => {
  const { content } = props
  const __html = enrichText(content)

  return <p dangerouslySetInnerHTML={{ __html }} />
}

export default Paragraph
