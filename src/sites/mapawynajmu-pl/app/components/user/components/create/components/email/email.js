import React from 'react'
import { connect } from 'react-redux'
import { UserNewEmailForm as Form } from './components/form/form'
import Verification from './components/verify/verify'
import * as mappers from './constants/mappers'
import { langHandler } from '../../../../../../functions/lang-handler'
import { Heading } from '../../../../../../../../shared/app/components/support/heading/heading'
import { Line } from '../../../../../support/components/line/line'
import { Confirmation } from './components/confirmation/confirmation'

class UserCreateEmail extends React.Component {
  constructor(props) {
    super(props)
    this.langHandler = langHandler.bind(this)
  }

  render() {
    const { renderAnnouncementCreate, renderForm, renderVerification, renderConfirmation, links } = this.props
    const headerText = this.langHandler({ pl: 'Zarejestruj', en: 'Register' })

    const confirmationLinks = {
      links,
    }

    return (
      <div id='user-create-email'>
        {(renderForm || renderAnnouncementCreate) && (
          <>
            {!renderAnnouncementCreate && (
              <Heading
                rank={1}
                heading={headerText}
              />
            )}
            {!renderAnnouncementCreate && <Line />}
            <Form
              renderAnnouncementCreate={renderAnnouncementCreate}
              langHandler={this.langHandler}
            />
          </>
        )}
        {renderVerification && <Verification />}
        {renderConfirmation && <Confirmation {...confirmationLinks} />}
      </div>
    )
  }
}

export default connect(mappers.mapStateToProps, mappers.mapDispatchToProps)(UserCreateEmail)
