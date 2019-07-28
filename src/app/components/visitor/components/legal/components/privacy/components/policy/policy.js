import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { languageHandler } from '../../../../../../../../functions/language-handler'
import { text } from './constants/text'
import Provision from '../../../provision/provision'
import './styles/styles.scss'

class VisitorPrivacyPolicy extends React.Component {
  constructor(props) {
    super(props)
    this.languageHandler = languageHandler.bind(this)
  }
  render() {
    return (
      <div id='visitor-privacy-policy'>
        <h2>
          {this.languageHandler('Polityka Prywatności', 'Privacy Policy')}
        </h2>
        <div className='privacy-policy'>
        {
        text.map((provision, index) => (
          <Provision
          key={'privacyPolicy' + index}
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

export default connect(mapStateToProps, mapDispatchToProps)(VisitorPrivacyPolicy)
