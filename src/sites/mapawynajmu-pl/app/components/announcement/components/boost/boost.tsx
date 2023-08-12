import React from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { Spinner } from '../../../support/components/spinner/spinner'

interface ListingBoostInterface {
  (): React.ReactElement
}

const ListingBoost: ListingBoostInterface = () => {
  useStyles(styles)

  return (
    <div id='listing-boost'>
      <Spinner spinnerClass='windmill-medium-spinner' />
    </div>
  )
}

export default ListingBoost
