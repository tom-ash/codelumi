import React, { useEffect } from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { Spinner } from '../../../support/components/spinner/spinner'
import { useStore } from '../../../../../../shared/app/functions/store/useStore'

interface ListingPromotionInterface {
  (): React.ReactElement
}

const ListingPromotion: ListingPromotionInterface = () => {
  useStyles(styles)

  const {
    state: {
      data: { orderHref },
    },
  } = useStore()

  useEffect(() => {
    // @ts-ignore
    window.gtag('event', 'promotion_added')

    location.href = orderHref
  }, [])

  return (
    <div id='listing-promotion'>
      <Spinner spinnerClass='windmill-medium-spinner' />
    </div>
  )
}

export default ListingPromotion
