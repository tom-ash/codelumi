import React from 'react'
import { SVG } from '../../../../../../../../../shared/app/components/support/svg/svg'

interface PostingIndexTileIndustryInterface {
  (props: { industry: string; icon: string; textColor?: string }): React.ReactElement
}

export const PostingIndexTileIndustry: PostingIndexTileIndustryInterface = props => {
  const { industry, icon, textColor } = props

  return (
    <div className='industry'>
      <SVG
        name={icon}
        fill={textColor}
      />
      <span style={{ color: textColor }}>{industry}</span>
    </div>
  )
}
