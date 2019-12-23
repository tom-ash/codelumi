import React from 'react'
import { categories } from '../../../../../../constants/categories'

export default function DataTile(props) {
  const { classNames, icon, value } = props

  const classes = classNames ? ` ${classNames}` : ''

  return (
    <div className={`data-tile${classes}`}>
      <div className='icon small-shadow'>
        <i className={icon} />
      </div>
      {value}
    </div>
  )
}
