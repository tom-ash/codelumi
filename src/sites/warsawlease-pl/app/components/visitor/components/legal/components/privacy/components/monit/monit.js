import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { langObjHandler } from '../../../../../../../../functions/lang-handler'
import { ManagedButton } from 'managed-inputs'
import { agreeManager, settingsManager } from './functions/manager'
import { textsProvider } from './functions/texts-provider'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'
import AppContext from '../../../../../../../../constants/context.js'

class VisitorPrivacyMonit extends React.Component {
  constructor(props) {
    super(props)
    this.agreeManager = agreeManager.bind(this)
    this.settingsManager =  settingsManager.bind(this)
    this.langObjHandler = langObjHandler.bind(this)
    this.textsProvider = textsProvider.bind(this)
  }

  static contextType = AppContext

  render() {
    const {
      lang
    } = this.props

    return (
        <div id='visitor-privacy-monit-cover' className='cover'>
          <div
            id='visitor-privacy-monit' className={`container narrow-container shadowed${lang === 'pl' ? '' : ' en'}`}
            onClick={e => e.stopPropagation()}
          >
            <div className='title'>
              {this.langObjHandler({
                pl: 'Twoja prywatność jest dla nas ważna.',
                en: 'Your privacy is important to us.'
              })}
            </div>
            <div className='text-container'>
              <div className='text-line cookies'>
                <div className='text'>
                  {this.langObjHandler(this.textsProvider('cookies'))}
                </div>
              </div>
              <div className='text-line'>
                <div className='text'>
                  {this.langObjHandler(this.textsProvider('dataProcessing'))}
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
