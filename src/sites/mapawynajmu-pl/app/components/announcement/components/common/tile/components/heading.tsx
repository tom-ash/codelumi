import React from 'react'
import { parseCategory } from '../../../../../../../shared/functions/parsers/parse-category'
import localitiesPresenter from '../../../../functions/localities-presenter'

interface HeadingProps {
  name: string
  category: number
  lang: string
  langHandler: LangHandler
  locality: string
  sublocality: string
}

const Heading = (props: HeadingProps) => {
  const {
    name,
    category,
    locality,
    sublocality,
    lang,
    langHandler,
  } = props

  return (
    <h1>
    {name &&
    <div className='name'>
      {name}
    </div>}
    <div className='category'>
      <span>{category !== null && parseCategory({ categoryNumber: category, lang })}</span>
      &nbsp;
      {/* @ts-ignore */}
      <span className='for-lease'>{langHandler({ pl: 'na wynajem', en: 'for rent' })}</span>
    </div>
    <div className='locality-sublocality'>
      {localitiesPresenter({ locality, sublocality })}
    </div>
  </h1>
  )
}

export default Heading
