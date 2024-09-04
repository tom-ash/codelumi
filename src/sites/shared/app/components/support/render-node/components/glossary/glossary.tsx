import React, { useMemo, useState } from 'react'
import { MainHeading } from '../../../headings/main-heading';
import { TextInput } from 'semanticize';
import { escapeRegExp } from 'lodash';

export interface GlossaryProps {
  title: string;
  entries: {
    term: string
    definition: string
  }[]
}

export const Glossary = (props: GlossaryProps) => {
  const { title, entries } = props

  const [search, setSearch] = useState('')

  const searchedEntries = useMemo(() => {
    return entries.filter((entry) => {
      const regexp = new RegExp(escapeRegExp(search?.toLowerCase()))

      return entry.term.toLowerCase().match(regexp)
    })
  }, [search])

  return (
    <div className='glossary'>
      <h1>
        {title}
      </h1>
      <div className='search'>
        <TextInput
          value={search}
          onChange={setSearch}
        />
      </div>
      <div className='entries'>
        {searchedEntries.map(entry => {
          const { term, definition } = entry

          return (
            <div>
              <dfn>{term}</dfn>
              <div>
                {definition}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Glossary
