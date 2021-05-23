import React from 'react'
import { categories } from '../../../../../../constants/categories'
import { ManagedLink } from 'managed-inputs'
import categoryManger from './functions/category-manager.js'

const AnnouncementIndexPanelCategories = ({
  langHandler,
  currentCategory,
  changeRoute,
  lang,
  renderCatalogue
}) => {
  return (
    <div className='categories'>
      {categories.map((category, index) => (
        <ManagedLink key={index} {...categoryManger({ category, renderCatalogue, lang, currentCategory, changeRoute, langHandler })}/>
      ))}
      <div className='float-clear' />
    </div>
  )
}

export default AnnouncementIndexPanelCategories
