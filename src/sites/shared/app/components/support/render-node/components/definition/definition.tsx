import React from 'react'

interface DefinitionProps {
  term: string
  definition: string
}

const Definition = (props: DefinitionProps) => {
  const { term, definition } = props

  return (
    <p className='definition'>
      <dfn>{term}</dfn> {definition}
    </p>
  )
}

export default Definition
