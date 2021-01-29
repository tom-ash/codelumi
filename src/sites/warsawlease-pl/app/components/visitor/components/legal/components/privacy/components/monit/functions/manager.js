import { saveCookie } from '../../../../cookies/functions/save'
import {
  VISITOR_PRIVACY_MONIT_TRACK,
  VISITOR_PRIVACY_SETTINGS_TRACK
} from '../../../../../../../../../../shared/constants/tracks/tracks'

export function agreeManager() {
  const {
    changeSettings,
    changeRender
  } = this.props
  
  return {
    classNames: { container: 'form-input button agree' },
    label: 'OK',
    onClick: () => {
      changeSettings({
        statisticsConsent: true,
        marketingConsent: true
      })
      saveCookie('_pdpaf', 'true', 'oneYear')
      saveCookie('_pdpsm', 'true', 'oneYear')
      changeRender({ [VISITOR_PRIVACY_MONIT_TRACK]: false })
    }
  }
}

export function settingsManager() {
  return {
    classNames: { container: 'form-input button settings' },
    label: this.langHandler('Ustawienia', 'Settings'),
    onClick: () => this.changeRoute(VISITOR_PRIVACY_SETTINGS_TRACK)
  }
}
