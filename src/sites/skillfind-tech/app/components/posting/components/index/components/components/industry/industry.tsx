import React from 'react'
import { SVG } from '../../../../../../../../../shared/app/components/support/svg/svg'

interface PostingIndexTileIndustryInterface {
  (props: { industry: string; icon: string; }): React.ReactElement
}

export const PostingIndexTileIndustry: PostingIndexTileIndustryInterface = props => {
  const { industry, icon } = props

  return (
    <div className='industry'>
      <SVG
        name={icon}
      />
      <span>{industry}</span>
    </div>
  )
}
