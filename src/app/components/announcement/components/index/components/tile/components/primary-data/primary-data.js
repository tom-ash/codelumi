import React from 'react'
import { categories } from '../../../../../../constants/categories'

export default function PrimaryData(props) {
  const { venue, isMobile, id, category, languageHandler, parseDistrict, district } = props

  return (
    <div className={`primary ${venue}`}>
      <div className='id'>
        {id}
      </div>
      <div className={`category-icon${category == '0' ? ' office' : ' usable-premises'}`}>
        {categories[category].icon}
      </div>
      {
      !isMobile &&
      <div className={`category ${category == '0' ? 'office' : 'usable-premises'}`}>
        {
        category == '0' ? languageHandler('Biuro', 'Office') : languageHandler('Lokal użytkowy', 'Usable Premises')
        }
      </div>
      }
      <div className='district'>
        {parseDistrict(district)}
      </div>
      <div className='float-clear' />
    </div>
  )
}