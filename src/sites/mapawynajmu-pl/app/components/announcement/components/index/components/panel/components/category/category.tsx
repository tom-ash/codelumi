import React from 'react'
import { categories } from '../../../../../../constants/categories'
import { ManagedSelect } from 'managed-inputs'
import { buildUrl } from '../../../../../../../../../shared/functions/builders/url'
import { changeUrl } from '../../../../../../../../../../shared/app/functions/routes/changers/change-url'

// @ts-ignore
export const Category = props => {
  const { currentCategory, links } = props

  const options = categories.map(category => ({
    value: category.value,
    text: category.label['pl'],
    linkTrack: category.linkTrack,
  }))

  options.unshift({
    // @ts-ignore
    value: null,
    text: 'Dowolna',
  })

  const categoriesProps = {
    classNames: { container: 'filter' },
    label: currentCategory === null ? { pl: 'Kategoria', en: 'Category' }['pl'] : '',
    value: currentCategory === null ? '' : currentCategory,
    options,
    onFocusCoverZIndex: 998,
    // @ts-ignore
    onSelect: selectedCategory => {
      const { linkTrack } = selectedCategory
      const link = links[linkTrack || 'listing/index/all-categories']
      const href = link && buildUrl(link)

      // @ts-ignore
      window.areListingsObsolete = true

      changeUrl({ href: href || '/', retainQueryParams: true })
    },
  }

  // @ts-ignore
  return <ManagedSelect {...categoriesProps} />
}
