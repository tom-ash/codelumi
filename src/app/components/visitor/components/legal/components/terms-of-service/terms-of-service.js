import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { languageHandler, languageObjectHandler } from '../../../../../../functions/language-handler'
import { text } from './constants/text'
import Provision from '../provision/provision'
import { pageHeaderProvider } from '../../../../../../functions/header-providers'
import { CloseButton } from '../../../../../../components/support/components/close-button/close-button'

class VisitorTermsOfService extends React.Component {
  constructor(props) {
    super(props)
    this.languageHandler = languageHandler.bind(this)
    this.languageObjectHandler = languageObjectHandler.bind(this)
    this.pageHeaderProvider = pageHeaderProvider.bind(this)
  }
  render() {
    return (
      <React.Fragment>
        <CloseButton classNames='page medium'/>
        <div
          id='visitor-terms-of-service'
          className='container medium-container shadowed'
          onClick={e => e.stopPropagation()}
        >
          {this.pageHeaderProvider('fas fa-align-justify', { pl: 'Regulamin', en: 'Terms Of Service' })}
          <div className='terms-of-service'>
          {
          text.map((provision, index) => (
            <Provision
            key={'termsOfService'+index}
            data={{
              tier: provision.tier,
              item: provision.item,
              pl: provision.pl,
              en: provision.en
            }}/>
          ))
          }
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VisitorTermsOfService)
