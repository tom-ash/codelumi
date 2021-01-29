import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { langHandler, langObjHandler } from '../../../../../../../../functions/lang-handler'
import { text } from './constants/text'
import Provision from '../../../provision/provision'
import { pageHeaderProvider } from '../../../../../../../../functions/header-providers'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'

class VisitorPrivacyPolicy extends React.Component {
  constructor(props) {
    super(props)
    this.langHandler = langHandler.bind(this)
    this.langObjHandler = langObjHandler.bind(this)
    this.pageHeaderProvider = pageHeaderProvider.bind(this)
  }
  render() {
    return (
      <React.Fragment>
        <div
          id='visitor-privacy-policy'
          className='container__legal'
          onClick={e => e.stopPropagation()}
        >
          <h1 className='page-header'>
            {this.langObjHandler({ pl: 'Polityka Prywatności', en: 'Privacy Policy' })}
          </h1>
          <div className='privacy-policy'>
            {
            text.map((provision, index) => (
              <Provision
              key={'privacyPolicy' + index}
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(VisitorPrivacyPolicy))
