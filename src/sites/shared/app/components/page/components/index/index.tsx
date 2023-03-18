import React from 'react'
import { RecordIndexer } from '../../../support/record-indexer/record-indexer'
import { createPage } from './functions/create-page'

//@ts-ignore
const PageIndex = () => <RecordIndexer create={(args) => createPage({ ...args, imageKey: '123' })} />

export default PageIndex
