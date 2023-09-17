import React from 'react'
import loadable from '@loadable/component'
import { useSelector } from 'react-redux'
import { Store } from '../../../../shared/app/functions/root-reducer/root-reducer'
const AnnouncementCreate = loadable(() => import('./components/create/create'))
const AnnouncementIndex = loadable(() => import('./components/index/index'))
const ListingPromotion = loadable(() => import('./components/promotion/promotion'))

const Listing = () => {
  const render = useSelector((state: Store) => {
    return state.render
  })

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
