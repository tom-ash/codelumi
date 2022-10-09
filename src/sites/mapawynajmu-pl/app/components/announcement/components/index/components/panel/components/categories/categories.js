import React from 'react'
import { categories } from '../../../../../../constants/categories'
import { ManagedSelect } from 'managed-inputs'
import useStyles from 'isomorphic-style-loader/useStyles'
import styles from './styles/styles.scss'
import buildUrl from '../../../../../../../../../shared/functions/builders/url'

const AnnouncementIndexPanelCategories = (props) => {
  useStyles(styles)

  const {
    langHandler,
    currentCategory,
    changeRoute,
    links,
    changeControl,
  } = props

  const options = categories.map(category => ({
    value: category.value,
    text: langHandler(category.label),
    linkTrack: category.linkTrack
  }))

  options.unshift({
    value: null,
    text: 'Dowolna'
  })

  const categoriesProps = {
    classNames: { container: 'filter' },
    label: 'Kategoria',
    value: currentCategory || '',
    options,
    onFocusCoverZIndex: 998,
    onSelect: selectedCategory => {
      const { linkTrack } = selectedCategory
      const link = links[linkTrack]
      const href = link && buildUrl(link)

      changeRoute({ href: href || '/', retainQueryParams: true })
      changeControl({ reloadPins: true })

      // 
    }
  }

  return <ManagedSelect {...categoriesProps} />
}

export default AnnouncementIndexPanelCategories
