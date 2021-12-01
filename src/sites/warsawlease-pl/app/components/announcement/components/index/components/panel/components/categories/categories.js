import React from 'react'
import { categories } from '../../../../../../constants/categories'
import { ManagedLink } from 'managed-inputs'
import categoryManger from './functions/category-manager.js'

const AnnouncementIndexPanelCategories = (props) => {
  const {
    langHandler,
    currentCategory,
    changeRoute,
    lang,
    renderCatalogue,
    links
  } = props

  return (
    <div className='categories'>
      {categories.map(category => {
        const amount = props[`${category.name}Amount`]

        return (
          <ManagedLink
            key={`${category.name}${amount}${currentCategory}`}
            {...categoryManger({ links, category, renderCatalogue, lang, currentCategory, changeRoute, langHandler, amount })}
          />
        )
      })}
      <div className='float-clear' />
    </div>
  )
}

export default AnnouncementIndexPanelCategories
