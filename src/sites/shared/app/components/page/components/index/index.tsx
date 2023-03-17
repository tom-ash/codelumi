import React from 'react'
import { RecordIndexer } from '../../../support/record-indexer/record-indexer'
import { createPage } from './functions/create-page'

const PageIndex = () => {
  return <RecordIndexer create={createPage} />
}

export default PageIndex
