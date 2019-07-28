import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { languageHandler } from '../../../../../../functions/language-handler'
import { text } from './constants/text'
import Provision from '../provision/provision'
import './styles/styles.scss'

class VisitorTermsOfService extends React.Component {
  constructor(props) {
    super(props)
    this.languageHandler = languageHandler.bind(this)
  }
  render() {
    return (
      <div id='visitor-terms-of-service'>
        <h2>
          {this.languageHandler('Regulamin', 'Terms Of Service')}
        </h2>
        <div className='terms-of-service'>
        {
        text.map((provision, index) => (
          <Provision
          key={'termsOfService'+index}
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

export default connect(mapStateToProps, mapDispatchToProps)(VisitorTermsOfService)
