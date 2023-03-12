import React from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import RecordIndexer from '../../../support/record-indexer/record-indexer'
import createFactory from './functions/create-factory'
import editFactory from './functions/edit-factory'

type ImageIndexProps = {
  imageKeys: string[]
  imageKey: string
  setData(attrs: object): void
  apiUrl: string
  buildUrl(props: { path: string }): string
}

const ImageIndex = (props: ImageIndexProps) => {
  useStyles(styles)

  const { imageKey, imageKeys, setData, apiUrl, buildUrl } = props
  const changeKey = (imageKey: string) => setData({ imageKey })
  const createFactoryProps = { apiUrl, imageKey, buildUrl }
  const editFactoryProps = { buildUrl }
  const recordIndexerProps = {
    recordKey: imageKey,
    recordKeys: imageKeys,
    changeKey,
    create: createFactory(createFactoryProps),
    edit: editFactory(editFactoryProps),
  }

  return (
    <>
      <RecordIndexer {...recordIndexerProps} />
    </>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageIndex)
