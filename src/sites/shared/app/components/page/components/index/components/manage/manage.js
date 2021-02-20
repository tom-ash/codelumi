import React from 'react'
import { ManagedText } from 'managed-inputs'
import * as managers from './functions/managers'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'

class PageIndexManage extends React.Component {
  constructor(props) {
    super(props)
    this.nameManager = managers.nameManager.bind(this)
  }

  render() {
    return (
      <div id='page-index-manage'>
        <ManagedText {...this.nameManager()} />
      </div>
    )
  }
}

export default withStyles(styles)(PageIndexManage)
