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
    'listings/show': renderShow,
    listingPromotion,
  } = render


  return (
    <>
      {(renderCreate || renderEdit) && <AnnouncementCreate />}
      {/* @ts-ignore */}
      {(renderIndex || renderShow) && <AnnouncementIndex renderShow={renderShow} />}
      {listingPromotion && <ListingPromotion />}
    </>
  )
}

export default Listing
