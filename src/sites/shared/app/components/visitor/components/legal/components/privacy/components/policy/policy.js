import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import Provision from '../../../provision/provision'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'

class VisitorPrivacyPolicy extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { langHandler } = this.props

    return (
      <React.Fragment>
        <div
          id='visitor-privacy-policy'
          className='container__legal'
          onClick={e => e.stopPropagation()}
        >
          <h1 className='page-header'>
            {langHandler({ pl: 'Polityka Prywatności', en: 'Privacy Policy' })}
          </h1>
          <div className='privacy-policy'>
            {
            ([]).map((provision, index) => (
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
