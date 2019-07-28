import { categories } from '../constants/categories'
import React from 'react'

export function buildSelectCategories() {
  return [{ value: '', text: '' }].concat(categories.map(category => ({
    value: category.number,
    text: <span>{category.icon} {this.languageHandler(category.label.polish, category.label.english)}</span>
  })))
}
