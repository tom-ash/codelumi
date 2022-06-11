import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import createFactory from './functions/create-factory'
import editFactory from './functions/edit-factory'
import RecordIndexer from '../../../support/record-indexer/record-indexer'

type PageIndexProps = {
  pageKeys: string[],
  pageKey: string,
  changeState(attrs: object): void,
  apiUrl: string,
  changeRoute(props: { href: string }): void,
  buildUrl(props: { path: string}): string
}

const PageIndex = (props: PageIndexProps) => {
  const {
    pageKey,
    pageKeys,
    apiUrl,
    changeState,
    buildUrl,
    changeRoute
  } = props

  const changeKey = (pageKey: string) => changeState({ pageKey })

  const createFactoryProps = {
    apiUrl,
    buildUrl,
    changeRoute
  }
  const editFactoryProps = { changeRoute, buildUrl }

  const recordIndexerProps = {
    recordKey: pageKey,
    recordKeys: pageKeys,
    changeKey,
    create: createFactory(createFactoryProps),
    edit: editFactory(editFactoryProps)
  }

  return (
    <>
      <RecordIndexer {...recordIndexerProps} />
    </>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(PageIndex)
