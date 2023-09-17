import React from 'react'
import loadable from '@loadable/component'
import { useRender } from '../../../../shared/app/functions/store/use-render'
const AnnouncementCreate = loadable(() => import('./components/create/create'))
const AnnouncementIndex = loadable(() => import('./components/index/index'))
const ListingPromotion = loadable(() => import('./components/promotion/promotion'))

const Listing = () => {
  const render = useRender()

  const {
    'announcement/create': renderCreate,
    'announcement/edit': renderEdit,
    'announcement/index': renderIndex,
    listingPromotion,
  } = render


  return (
    <>
      {(renderCreate || renderEdit) && <AnnouncementCreate />}
      {renderIndex && <AnnouncementIndex />}
      {listingPromotion && <ListingPromotion />}
    </>
  )
}

export default Listing
