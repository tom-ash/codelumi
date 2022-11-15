import React from 'react'
import { categories } from '../../../../../../constants/categories'
import { ManagedSelect } from 'managed-inputs'
import { buildUrl } from '../../../../../../../../../shared/functions/builders/url'

// @ts-ignore
export const Category = props => {
  const {
    langHandler,
    currentCategory,
    changeRoute,
    links,
  } = props

  const options = categories.map(category => ({
    value: category.value,
    text: langHandler(category.label),
    linkTrack: category.linkTrack,
  }))

  options.unshift({
    // @ts-ignore
    value: null,
    text: 'Dowolna',
  })

  const categoriesProps = {
    classNames: { container: 'filter' },
    label: currentCategory === null ? langHandler({ pl: 'Kategoria', en: 'Category' }) : '',
    value: currentCategory === null ? '' : currentCategory,
    options,
    onFocusCoverZIndex: 998,
    // @ts-ignore
    onSelect: selectedCategory => {
      const { linkTrack } = selectedCategory
      const link = links[linkTrack]
      const href = link && buildUrl(link)

      // @ts-ignore
      window.areListingsObsolete = true

      changeRoute({ href: href || '/', retainQueryParams: true })
    },
  }

  // @ts-ignore
  return <ManagedSelect {...categoriesProps} />
}
