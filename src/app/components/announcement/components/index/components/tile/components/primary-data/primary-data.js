import React from 'react'
import DataTile from '../data-tile/data-tile'
import { categories } from '../../../../../../constants/categories'

export default function PrimaryData(props) {
  const { venue, id, category, languageHandler, parseDistrict, district, rooms } = props

  const categoryValue = category === 0 ? languageHandler('Biuro', 'Office') : languageHandler('Lokal użytkowy', 'Usable Premises')

  return (
    <div className={`primary ${venue}`}>
      <div className='id small-shadow'>
        {id}
      </div>
      <div className='left-container'>
        <DataTile
          classNames='category'
          icon='far fa-list-alt'
          value={<strong>{categoryValue}</strong>}
        />
      </div>
      <div className='right-container'>
        <DataTile
          classNames='district'
          icon='fas fa-city'
          value={parseDistrict(district)}
        />
      </div>
      <div className='float-clear' />
    </div>
  )
}