import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { languageHandler, languageObjectHandler } from '../../../../../../../../functions/language-handler'
import { text } from './constants/text'
import Provision from '../../../provision/provision'
import { pageHeaderProvider } from '../../../../../../../../functions/header-providers'
import './styles/styles.scss'

class VisitorCookiesPolicy extends React.Component {
  constructor(props) {
    super(props)
    this.languageHandler = languageHandler.bind(this)
    this.languageObjectHandler = languageObjectHandler.bind(this)
    this.pageHeaderProvider = pageHeaderProvider.bind(this)
  }
  render() {
    return (
      <div id='visitor-cookies-policy' className='container medium-container shadowed'>
        {this.pageHeaderProvider('fas fa-cookie-bite', { polish: 'Polityka Plików Cookies', english: 'Cookies Policy' })}
        <div className='cookies-policy'>
        {
        text.map((provision, index) => (
          <Provision
          key={'cookiesPolicy' + index}
          data={{
            tier: provision.tier,
            item: provision.item,
            polish: provision.polish,
            english: provision.english
          }}/>
        ))
        }
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VisitorCookiesPolicy)
