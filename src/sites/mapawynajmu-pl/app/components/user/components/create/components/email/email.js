import React from 'react'
import { connect } from 'react-redux'
import Inputs from './components/inputs/inputs.js'
import Consents from '../consents/consents.js'
import Submit from './components/submit/submit.js'
import Verification from './components/verify/verify.js'
import * as mappers from './constants/mappers.js'
import langHandler from '../../../../../../functions/lang-handler.js'
import Header from '../../../../../support/components/heading'

class UserCreateEmail extends React.Component {
  constructor(props) {
    super(props)
    this.langHandler = langHandler.bind(this)
  }

  render() {
    const { renderAnnouncementCreate, renderForm, renderVerification } = this.props
    const headerText = this.langHandler({ pl: 'Zarejestruj', en: 'Register' })

    return (
      <div id='user-create-email'>
        {(renderForm || renderAnnouncementCreate) && (
          <>
            {!renderAnnouncementCreate && <Header tier={1} text={headerText} />}
            <form>
              <Inputs renderAnnouncementCreate={renderAnnouncementCreate} />
              <Consents />
              {!renderAnnouncementCreate && <Submit />}
            </form>
          </>
        )}
        {renderVerification && <Verification />}
      </div>
    )
  }
}

export default connect(mappers.mapStateToProps, mappers.mapDispatchToProps)(UserCreateEmail)
