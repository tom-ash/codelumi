import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { ManagedLink } from 'managed-inputs'
import { logoManager } from './functions/managers'
// import langHandler from '../../../../functions/lang-handler'
import AppContext from '../../../constants/context.js'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.logoManager = logoManager.bind(this)
    // this.langManager = managers.langManager.bind(this)
    // this.langHandler = langHandler.bind(this)
  }

  static contextType = AppContext

  render() {
    const { authorized, device, changeRender, changeControl } = this.props
    const smallMobile = ['smallTablet', 'largePhone', 'smallPhone'].indexOf(device) !== -1

    return (
      <div id='header'>
        <div className='inner'>
          <ManagedLink {...this.logoManager()} />
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Header))
