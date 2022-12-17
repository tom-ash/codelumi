import React from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import SVG from '../../../../../../../shared/app/components/support/svg/svg'
import { shareOnFacebook } from '../../../../../../../mapawynajmu-pl/app/components/announcement/functions/share-on-facebook'

const Share = (props: ShareProps) => {
  useStyles(styles)

  const { href } = props

  return (
    <div className='share'>
      <div className='facebook' onClick={() => shareOnFacebook(href, false)}>
        {/* @ts-ignore */}
        <SVG name='facebook' />
      </div>
    </div>
  )
}

export default Share
