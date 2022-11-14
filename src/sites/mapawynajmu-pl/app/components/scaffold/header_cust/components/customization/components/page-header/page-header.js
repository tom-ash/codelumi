import React from 'react'
import { Heading } from '../../../../../../support/components/heading'
import { MAP_HEADER } from './constants/texts'

const PageHeader = props => {
  const { renderMap, langHandler } = props

  if (renderMap) return <Heading tier={1} text={langHandler(MAP_HEADER)} />

  return null
}

export default PageHeader
