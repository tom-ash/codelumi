import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import withStyles from 'isomorphic-style-loader-react18/withStyles'
import styles from './styles/styles.scss'
import { langHandler } from '../../../../functions/lang-handler'
import { Heading } from '../../../support/components/heading'
import { Line } from '../../../support/components/line/line'
import Email from './components/email/email'

class UserAuth extends React.Component {
  // @ts-ignore
  constructor(props) {
    super(props)
    // @ts-ignore
    this.langHandler = langHandler.bind(this)
  }

  render() {
    // @ts-ignore
    const headerText = this.langHandler({ pl: 'Zaloguj', en: 'Sign In' })

    return (
      <div id='user-authorize'>
        <Email />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(UserAuth))
