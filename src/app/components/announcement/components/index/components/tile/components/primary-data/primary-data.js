import React from 'react'
import DataTile from '../data-tile/data-tile'
import { categories } from '../../../../../../constants/categories'

export default function PrimaryData(props) {
  const {
    venue,
    id,
    category,
    parseCategory,
    parseDistrict,
    district,
  } = props

  return (
    <div className={`primary ${venue}`}>
      <div className='id small-shadow'>
        {id}
      </div>
      <div className='left-container'>
        <DataTile
          classNames='category'
          icon='far fa-list-alt'
          value={<strong>{parseCategory(category)}</strong>}
        />
      </div>
      <div className='right-container'>
        <DataTile
          classNames='district'
          icon='fas fa-map-marker-alt'
          value={parseDistrict(district)}
        />
      </div>
      <div className='float-clear' />
    </div>
  )
}
