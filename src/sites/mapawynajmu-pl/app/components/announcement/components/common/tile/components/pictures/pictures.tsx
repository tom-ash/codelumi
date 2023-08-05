import React from 'react'
import ManagedSlider from '../../../../../../support/components/managed-slider/managed-slider'
import { SVG } from '../../../../../../../../../shared/app/components/support/svg/svg'
import AWS_S3_URL from '../../../../../../../../shared/constants/urls/aws-s3'

interface Picture {
  database: string
}

interface ListingTilePicturesInterface {
  (props: { pictures: Picture[]; disableSLides: boolean; title: string; id: number }): React.ReactElement
}

export const ListingTilePictures: ListingTilePicturesInterface = props => {
  const { id, title, pictures, disableSLides } = props

  const pictureUrls = pictures.map(picture => ({
    database: `${AWS_S3_URL}/announcements/${id}/${picture.database}`,
  }))

  const Chevron = () => <SVG name='chevron' />

  return (
    <div className='pictures'>
      <ManagedSlider
        disableSLides={disableSLides}
        title={title}
        pictures={pictureUrls}
        chevronLeft={<Chevron />}
        chevronRight={<Chevron />}
      />
    </div>
  )
}

export default ListingTilePictures
