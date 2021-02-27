import { categories } from '../constants/categories'
import React from 'react'

export function buildSelectCategories() {
  return [{ value: '', text: '' }].concat(categories.map(category => ({
    value: category.number,
    text: <div className='category-option'>
      <div className={`pin ${category.number === 0 ? 'office' : 'usable-premises'}`}>
        {category.icon}
      </div>
      <div className='text'>
        {this.langHandler({ pl: category.label.pl, en: category.label.en })}
      </div>
      </div>
  })))
}
