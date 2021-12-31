import React from 'react'
import Header from '../../../../../../support/components/header/header.js'
import { MAP_HEADER, CATALOGUE_HEADER } from './constants/texts.js'

const PageHeader = props => {
  const { renderMap, renderCatalogue, langHandler } = props

  if (renderCatalogue) return <Header tier={1} text={langHandler(CATALOGUE_HEADER)} />
  if (renderMap) return <Header tier={1} text={langHandler(MAP_HEADER)} />

  return null
}

export default PageHeader

