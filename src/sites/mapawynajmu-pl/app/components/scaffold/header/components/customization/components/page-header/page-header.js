import React from 'react'
import Header from '../../../../../../support/components/heading'
import { MAP_HEADER } from './constants/texts.js'

const PageHeader = props => {
  const { renderMap, langHandler } = props

  if (renderMap) return <Header tier={1} text={langHandler(MAP_HEADER)} />

  return null
}

export default PageHeader
