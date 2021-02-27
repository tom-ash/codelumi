import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import langObjHandler from '../../../../../../../../functions/lang-handler'
import { text } from './constants/text'
import Provision from '../../../provision/provision'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'

class VisitorCookiesPolicy extends React.Component {
  constructor(props) {
    super(props)
    this.langObjHandler = langObjHandler.bind(this)
  }
  render() {
    return (
      <React.Fragment>
        <div
          id='visitor-cookies-policy'
          className='container__legal'
          onClick={e => e.stopPropagation()}
        >
          <h1 className='page-header'>
            {this.langObjHandler({ pl: 'Polityka Cookies', en: 'Cookies Policy' })}
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(VisitorCookiesPolicy))
