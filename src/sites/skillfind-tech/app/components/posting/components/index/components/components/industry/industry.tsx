import React from 'react'
import { SVG } from '../../../../../../../../../shared/app/components/support/svg/svg'

interface PostingIndexTileIndustryInterface {
  (props: {}): React.ReactElement
}

export const PostingIndexTileIndustry: PostingIndexTileIndustryInterface = props => {
  // @ts-ignore
  const {} = props

  return (
    <div className='industry'>
      <div className='icon'>
        <SVG name='carFront' />
        <span>Motoryzacja</span>
      </div>
    </div>
  )
}
