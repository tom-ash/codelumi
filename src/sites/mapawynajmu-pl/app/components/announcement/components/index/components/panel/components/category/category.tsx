import React from 'react'
import { categories } from '../../../../../../constants/categories'
import { ManagedSelect } from 'managed-inputs'
// import useStyles from 'isomorphic-style-loader/useStyles'
// import styles from './styles/styles.scss'
import { buildUrl } from '../../../../../../../../../shared/functions/builders/url'

// @ts-ignore
export const Category = props => {
  // useStyles(styles)

  const {
    langHandler,
    currentCategory,
    changeRoute,
    links,
    changeControl
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

  console.log(currentCategory)

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
