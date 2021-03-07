import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { ManagedButton } from 'managed-inputs'
import { agreeManager, settingsManager } from './functions/manager'
import { textsProvider } from './functions/texts-provider'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'

class VisitorPrivacyMonit extends React.Component {
  constructor(props) {
    super(props)
    this.agreeManager = agreeManager.bind(this)
    this.settingsManager =  settingsManager.bind(this)
    this.textsProvider = textsProvider.bind(this)
  }

  render() {
    const { lang, langHandler } = this.props

    return (
        <div id='visitor-privacy-monit-cover' className='cover'>
          <div id='visitor-privacy-monit'>
            <div className='title'>
              {langHandler({
                pl: 'Twoja prywatność jest dla nas ważna.',
                en: 'Your privacy is important to us.'
              })}
            </div>
            <div className='text-container'>
              <div className='text-line cookies'>
                <div className='text'>
                  {langHandler(this.textsProvider('cookies'))}
                </div>
              </div>
              <div className='text-line'>
                <div className='text'>
                  {langHandler(this.textsProvider('dataProcessing'))}
                </div>
              </div>
            </div>
            <div className='buttons'>
              <ManagedButton {...this.settingsManager()} />
              <ManagedButton {...this.agreeManager()} />
              <div className='float-clear' />
            </div>
          </div>
        </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(VisitorPrivacyMonit))
