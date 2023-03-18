import React from 'react'
import { enrichText } from '../../helpers/enrich-text/enrich-text'

interface DefinitionProps {
  term: string
  body: string
}

const Definition = (props: DefinitionProps) => {
  const { term, body } = props

  if (!term || !body) return null

  // TODO: Use Array appraoch!
  const __html = `<dfn>${term}</dfn> ${enrichText(body)}`

  return (
    <p
      className='definition'
      dangerouslySetInnerHTML={{ __html }}
    />
  )
}

export default Definition
