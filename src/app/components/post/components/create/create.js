import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { ManagedText, ManagedTextarea, ManagedButton } from 'managed-inputs'
import { componentDidMount } from './functions/lifecycle'
import * as managers from './functions/managers'
import { save } from './functions/save'
import { languageObjectHandler } from '../../../../functions/language-handler'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'
import PostTile from '../shared/components/tile/tile'

class PostCreate extends React.Component {
  constructor(props) {
    super(props)
    this.componentDidMount = componentDidMount
    this.languageObjectHandler = languageObjectHandler.bind(this)
    this.nameManager = managers.nameManager.bind(this)
    this.urlManager = managers.urlManager.bind(this)
    this.titleManager = managers.titleManager.bind(this)
    this.bodyManager = managers.bodyManager.bind(this)
    this.metaManager = managers.metaManager.bind(this)
    this.saveManager = managers.saveManager.bind(this)
    this.save = save.bind(this)
  }

  render() {
    const {
      name,
      inputs
    } = this.props

    const localizedInputs = this.languageObjectHandler(inputs)
    let body
    if (localizedInputs === null) {
      body = {}
    } else {
      body = localizedInputs.body
    }

    let parsedBody
    try {
      parsedBody = JSON.parse(body)
    } catch {}

    return (
      <div className='post-create'>
        <PostTile
          name={name}
          body={parsedBody}
        />
        <form>
          <ManagedText {...this.nameManager()} />
          <ManagedText {...this.urlManager()} />
          <ManagedText {...this.titleManager()} />
          <ManagedTextarea {...this.bodyManager()} />
          <ManagedTextarea {...this.metaManager()} />
          <ManagedButton {...this.saveManager()} />
        </form>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(PostCreate))
