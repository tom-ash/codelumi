import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { ManagedText } from 'managed-inputs'
import * as managers from './functions/managers'
import { save } from './functions/save'
import { langObjHandler } from '../../../../functions/lang-handler'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'

class PageCreate extends React.Component {
  constructor(props) {
    super(props)
    this.langObjHandler = langObjHandler.bind(this)
    this.nameManager = managers.nameManager.bind(this)
    this.saveManager = managers.saveManager.bind(this)
    this.save = save.bind(this)
  }

  render() {
    return (
      <div id='page-create1'>
        <form>
          <ManagedText {...this.nameManager()} />
        </form>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(PageCreate))
