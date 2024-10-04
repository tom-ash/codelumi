import React from 'react'
import { parseCategory } from '../../../../../../../../shared/functions/parsers/parse-category'
import localitiesPresenter from '../../../../../functions/localities-presenter'

interface HeadingProps {
  tier: number
  name?: string
  category: number
  lang: string
  locality: string
  sublocality?: string
}

export const Heading = (props: HeadingProps) => {
  const { tier, name, category, locality, sublocality, lang } = props

  return React.createElement(
    `h${tier}`,
    {},
    <>
      {name && <div className='name'>{name}</div>}
      <div className='category'>
        <span>{category !== null && parseCategory({ categoryNumber: category, lang })}</span>
        &nbsp;
        {/* TODO: LANG! */}
        <span className='for-lease'>na wynajem</span>
      </div>
      <div className='locality-sublocality'>{localitiesPresenter({ locality, sublocality })}</div>
    </>
  )
}

export default Heading
