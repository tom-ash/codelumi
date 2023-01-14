import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import withStyles from 'isomorphic-style-loader-react18/withStyles'
import styles from './styles/styles.scss'
import UserEditAccountCellDeprecated from './components/common/cell-deprecated/cell-deprecated'
import { langHandler } from '../../../../../../functions/lang-handler'
import { Heading } from '../../../../../support/components/heading'
import { HEADER_TEXT } from './constants/texts'
import { Line } from '../../../../../support/components/line/line'
import { UserEditPassword as Password } from './components/password/password'
import { UserTypes } from '../../../../types/user.types'
import { BusinessName } from './business-name/business-name'

class UserEditAccount extends React.Component {
  // @ts-ignore
  constructor(props) {
    super(props)
    // @ts-ignore
    this.langHandler = langHandler.bind(this)
  }

  render() {
    // @ts-ignore
    const { businessName, dispatch, accountType, businessNameError } = this.props
    // @ts-ignore
    const headerText = this.langHandler(HEADER_TEXT)
    const isBusinessUser = accountType === UserTypes.BUSINESS

    const businessNameProps = {
      currentValue: businessName,
      dispatch,
      error: businessNameError,
    }

    return (
      <div id='user-edit-account'>
        <div className='container'>
          {/*  @ts-ignore */}
          <Heading tier={1} text={headerText} />
          <Line />
          {isBusinessUser && (
            <>
              <BusinessName {...businessNameProps} />
              <Line />
            </>
          )}
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
