import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { ManagedText, ManagedTextarea, ManagedButton } from 'managed-inputs'
import * as managers from './functions/managers'
import { save } from './functions/save'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'
import PageTile from '../shared/components/tile/tile'

class PageCreate extends React.Component {
  constructor(props) {
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
    const { routeSynced, name, body } = this.props

    if (!routeSynced) return null

    const tileProps = { ...this.props, renderEdit: true, updatePage: this.save }

    return (
      <div className='page-edit'>
        <PageTile { ...tileProps } />
        <form>
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
        </form>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(PageCreate))
