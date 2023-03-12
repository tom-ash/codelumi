import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import createFactory from './functions/create-factory'
import editFactory from './functions/edit-factory'
import RecordIndexer from '../../../support/record-indexer/record-indexer'

type PageIndexProps = {
  pageKeys: string[]
  pageKey: string
  setData(attrs: object): void
  apiUrl: string
  buildUrl(props: { path: string }): string
}

const PageIndex = (props: PageIndexProps) => {
  const { pageKey, pageKeys, apiUrl, setData, buildUrl } = props

  const changeKey = (pageKey: string) => setData({ pageKey })

  const createFactoryProps = {
    apiUrl,
    buildUrl,
  }
  const editFactoryProps = { buildUrl }

  const recordIndexerProps = {
    recordKey: pageKey,
    recordKeys: pageKeys,
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

export default connect(mapStateToProps, mapDispatchToProps)(PageIndex)
