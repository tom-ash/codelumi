import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { languageHandler, languageObjectHandler } from '../../../../../../functions/language-handler'
import { text } from './constants/text'
import Provision from '../provision/provision'
import { pageHeaderProvider } from '../../../../../../functions/header-providers'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'

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
        <div
          id='visitor-terms-of-service'
          className='container__legal'
          onClick={e => e.stopPropagation()}
        >
          <h1>
            {this.languageObjectHandler({ pl: 'Regulamin', en: 'Terms Of Service' })}
          </h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(VisitorTermsOfService))
