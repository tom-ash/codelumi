import React from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { Line } from '../../../../../../../support/components/line/line'
import { Link } from '../../../../../../../announcement/components/common/link/link'

export const Confirmation = () => {
  useStyles(styles)

  const listingCreateFormLinkProps = {
    track: 'announcement/create/form',
  }

  const listingIndexUserLinkProps = {
    track: 'announcement/index/user',
  }

  const rootLinkProps = {
    track: 'root',
  }

  return (
    <div id='user-create-confirmation'>
      <h1>Potwierdzenie utworzenia konta</h1>
      <Line />
      <div>Gratulacje!</div>
      <div>Twoje konto zostało utworzone!</div>
      <Link {...listingCreateFormLinkProps} />
      <Link {...listingIndexUserLinkProps} />
      <Link {...rootLinkProps} />
    </div>
  )
}
