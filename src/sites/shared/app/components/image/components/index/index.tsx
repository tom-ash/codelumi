import React from 'react'
import useStyles from 'isomorphic-style-loader/useStyles'
import styles from './styles/styles.scss'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import RecordCreator from '../../../support/record-creator/record-creator'
import createFactory from './functions/create-factory'
import editFactory from './functions/edit-factory'

type ImageIndexProps = {
  imageKeys: string[],
  imageKey: string,
  changeState(attrs: object): void,
  apiUrl: string,
  changeRoute(props: { href: string }): void,
  buildUrl(props: { path: string}): string
}

const ImageIndex = (props: ImageIndexProps) => {
  useStyles(styles)

  const { imageKey, imageKeys, changeState, apiUrl, changeRoute, buildUrl } = props
  const changeKey = (imageKey: string) => changeState({ imageKey })
  const createFactoryProps = { apiUrl, changeRoute, imageKey, buildUrl }
  const editFactoryProps = { changeRoute, buildUrl }
  const recordCreatorProps = { recordKey: imageKey, recordKeys: imageKeys, changeKey, create: createFactory(createFactoryProps), edit: editFactory(editFactoryProps) }

  return (
    <>
      <RecordCreator {...recordCreatorProps} />
    </>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageIndex)
