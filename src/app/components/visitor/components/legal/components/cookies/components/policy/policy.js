import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { languageHandler } from '../../../../../../../../functions/language-handler'
import { text } from './constants/text'
import Provision from '../../../provision/provision'
import './styles/styles.scss'

class VisitorCookiesPolicy extends React.Component {
  constructor(props) {
    super(props)
    this.languageHandler = languageHandler.bind(this)
  }
  render() {
    return (
      <div id='visitor-cookies-policy'>
        <h2>
          {this.languageHandler('Polityka plików cookies i podobnych technologii',
                                'Cookies and Similar Technologies Policy')}
        </h2>
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
