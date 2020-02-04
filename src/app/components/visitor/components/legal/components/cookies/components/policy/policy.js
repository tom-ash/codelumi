import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { languageHandler, languageObjectHandler } from '../../../../../../../../functions/language-handler'
import { text } from './constants/text'
import Provision from '../../../provision/provision'
import { pageHeaderProvider } from '../../../../../../../../functions/header-providers'
import { CloseButton } from '../../../../../../../../components/support/components/close-button/close-button'

class VisitorCookiesPolicy extends React.Component {
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
          id='visitor-cookies-policy'
          className='container medium-container shadowed'
          onClick={e => e.stopPropagation()}
        >
          {this.pageHeaderProvider('fas fa-cookie-bite', { pl: 'Polityka Cookies', en: 'Cookies Policy' })}
          <div className='cookies-policy'>
          {
          text.map((provision, index) => (
            <Provision
            key={'cookiesPolicy' + index}
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

export default connect(mapStateToProps, mapDispatchToProps)(VisitorCookiesPolicy)
