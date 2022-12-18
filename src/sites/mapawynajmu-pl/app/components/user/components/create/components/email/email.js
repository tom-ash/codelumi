import React from 'react'
import { connect } from 'react-redux'
import Inputs from './components/inputs/inputs'
import Consents from '../consents/consents'
import Submit from './components/submit/submit'
import Verification from './components/verify/verify'
import * as mappers from './constants/mappers'
import { langHandler } from '../../../../../../functions/lang-handler'
import { Heading } from '../../../../../../../../shared/app/components/support/heading/heading'
import { Line } from '../../../../../support/components/line/line'

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
            {!renderAnnouncementCreate && <Heading rank={1} heading={headerText} />}
            {!renderAnnouncementCreate && <Line />}
            <form>
              <Inputs renderAnnouncementCreate={renderAnnouncementCreate} langHandler={this.langHandler} />
              <Consents />
              {!renderAnnouncementCreate && <Line />}
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
