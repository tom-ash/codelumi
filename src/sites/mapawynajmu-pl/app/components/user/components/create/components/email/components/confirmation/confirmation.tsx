import React from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { useStore } from 'react-redux'
import { Line } from '../../../../../../../support/components/line/line'
import { Link } from '../../../../../../../announcement/components/common/link/link'
import SVG from '../../../../../../../support/components/svg/svg'

export const Confirmation = () => {
  useStyles(styles)

  const { texts } = useStore().getState()
  const h1 = texts.h1
  const congratulations = texts.congratulations
  const accountCreated = texts.accountCreated
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
      <h1>{h1}</h1>
      <Line />
      <div>
        {congratulations}
      </div>
      <div className='checkmark-circle'>
        {/* @ts-ignore */}
        <SVG name='check' />
      </div>
      <div>
        {accountCreated}
      </div>
      <div className='links'>
        <Link {...listingCreateFormLinkProps} />
        <Link {...listingIndexUserLinkProps} />
        <Link {...rootLinkProps} />
      </div>
    </div>
  )
}
