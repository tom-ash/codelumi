import React from 'react'
import { RecordIndexer } from '../../../support/record-indexer/record-indexer'
import { createImage } from './functions/create-image'

const ImageIndex = () => <RecordIndexer create={createImage} />

export default ImageIndex
