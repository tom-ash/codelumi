import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import withStyles from 'isomorphic-style-loader-react18/withStyles'
import styles from './styles/styles.scss'
import UserEditAccountCellDeprecated from './components/cell-deprecated/cell-deprecated'
import { langHandler } from '../../../../../../functions/lang-handler'
import { Heading } from '../../../../../support/components/heading'
import { HEADER_TEXT } from './constants/texts'
import { Line } from '../../../../../support/components/line/line'
import { UserEditPassword as Password } from './components/password/password'

class UserEditAccount extends React.Component {
  constructor(props) {
    super(props)
    this.langHandler = langHandler.bind(this)
  }

  render() {
    // const { accountType } = this.props
    const headerText = this.langHandler(HEADER_TEXT)

    return (
      <div id='user-edit-account'>
        <div className='container'>
          <Heading tier={1} text={headerText} />
          <Line />
          <div className='country-code-phone-number-container'>
            <UserEditAccountCellDeprecated item='phone' />
          </div>
          <Line />
          <UserEditAccountCellDeprecated item='email' />
          <Line />
          <Password />
          <Line />
          <UserEditAccountCellDeprecated item='destroy' />
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(UserEditAccount))
