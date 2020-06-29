import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { languageObjectHandler } from '../../../../../../../../functions/language-handler'
import { text } from './constants/text'
import Provision from '../../../provision/provision'

class VisitorCookiesPolicy extends React.Component {
  constructor(props) {
    super(props)
    this.languageObjectHandler = languageObjectHandler.bind(this)
  }
  render() {
    return (
      <React.Fragment>
        <div
          id='visitor-cookies-policy'
          className='container__legal'
          onClick={e => e.stopPropagation()}
        >
          <h1>
            {this.languageObjectHandler({ pl: 'Polityka Cookies', en: 'Cookies Policy' })}
          </h1>
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
