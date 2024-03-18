import React from 'react'
import { SVG } from '../../../../../../../../../shared/app/components/support/svg/svg'

interface PostingIndexTileIndustryInterface {
  (props: { industry: string }): React.ReactElement
}

export const PostingIndexTileIndustry: PostingIndexTileIndustryInterface = props => {
  const { industry } = props

  return (
    <div className='industry'>
      <div className='icon'>
        <SVG name='carFront' />
        <span>{industry}</span>
      </div>
    </div>
  )
}
