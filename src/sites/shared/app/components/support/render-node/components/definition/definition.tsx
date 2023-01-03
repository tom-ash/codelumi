import React from 'react'
import { enrichText } from '../../helpers/enrich-text/enrich-text'

interface DefinitionProps {
  term: string
  definition: string
}

const Definition = (props: DefinitionProps) => {
  const { term, definition } = props
  const __html = `<dfn>${term}</dfn> ${enrichText(definition)}`

  return (
    <p
      className='definition'
      dangerouslySetInnerHTML={{ __html }}
    />
  )
}

export default Definition
