import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { ManagedText, ManagedTextarea, ManagedButton } from 'managed-inputs'
import * as managers from './functions/managers'
import { save } from './functions/save'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'
import PageTile from '../shared/components/tile/tile'
import OnlineInput from './inputs/online.js'
import HeaderAutonumberingInput from './inputs/header-auto-numbering'
import UpdateStatus from './components/update-status'

interface PageCreateProps {
  routeSynced: boolean,
  online: boolean,
  headerAutonumbering: boolean,
  changeInputs(): void,
  changeData(): void,
  updated: boolean
}

class PageCreate extends React.Component<PageCreateProps> {
  nameManager: () => void
  urlManager: () => void
  bodyManager: () => void
  titleManager: () => void
  descriptionManager: () => void
  keywordsManager: () => void
  canonicalUrlManager: () => void
  pictureManager: () => void
  metaManager: () => void
  saveManager: () => void
  saveAndShowManager: () => void
  save: () => void

  constructor(props: PageCreateProps) {
    super(props)
    this.nameManager = managers.nameManager.bind(this)
    this.urlManager = managers.urlManager.bind(this)
    this.bodyManager = managers.bodyManager.bind(this)
    this.titleManager = managers.titleManager.bind(this)
    this.descriptionManager = managers.descriptionManager.bind(this)
    this.keywordsManager = managers.keywordsManager.bind(this)
    this.canonicalUrlManager = managers.canonicalUrlManager.bind(this)
    this.pictureManager = managers.pictureManager.bind(this)
    this.metaManager = managers.metaManager.bind(this)
    this.saveManager = managers.saveManager.bind(this)
    this.saveAndShowManager = managers.saveAndShowManager.bind(this)
    this.save = save.bind(this)
  }

  render() {
    const {
      routeSynced,
      online,
      headerAutonumbering,
      changeInputs,
      updated
    } = this.props

    if (!routeSynced) return null

    const tileProps = { ...this.props, renderEdit: true, updatePage: this.save }
    const updateStatusProps = { updated }

    return (
      <>
        <PageTile { ...tileProps } />
        <form>
          <OnlineInput checked={online} changeInputs={changeInputs} />
          <HeaderAutonumberingInput checked={headerAutonumbering} changeInputs={changeInputs} />
          <ManagedTextarea {...this.bodyManager()} />
          <ManagedText {...this.titleManager()} />
          <ManagedTextarea {...this.descriptionManager()} />
          <ManagedTextarea {...this.keywordsManager()} />
          <ManagedText {...this.pictureManager()} />
          <ManagedTextarea {...this.metaManager()} />
          <ManagedText {...this.urlManager()} />
          <ManagedText {...this.canonicalUrlManager()} />
          <ManagedText {...this.nameManager()} />
          <ManagedButton {...this.saveManager()} />
          <ManagedButton {...this.saveAndShowManager()} />
          <UpdateStatus {...updateStatusProps} />
        </form>
      </>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(PageCreate))
