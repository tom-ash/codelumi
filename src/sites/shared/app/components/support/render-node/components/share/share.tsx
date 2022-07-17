import React from 'react'
import useStyles from 'isomorphic-style-loader/useStyles'
import styles from './styles/styles.scss'
import SVG from '../../../../../../../shared/app/components/support/svg/svg'

const Share = (props: ShareProps) => {
  useStyles(styles)

  const {
    href
  } = props

  return (
    <div className='share'>
      <div className='facebook'>
        {/* @ts-ignore */}
        <SVG name='facebook' />
      </div>
    </div>
  )
}

export default Share
