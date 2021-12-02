import { saveCookie } from '../../../../cookies/functions/save'
import { VISITOR_PRIVACY_MONIT_TRACK, VISITOR_PRIVACY_SETTINGS_TRACK } from '../../../../../../../../../../shared/constants/tracks/tracks'

export function agreeManager(props) {
  const { changeRender, changeConsents } = props
  
  return {
    classNames: { container: 'form-input button agree' },
    label: 'OK',
    onClick: () => {
      changeConsents({ statisticsConsent: true, marketingConsent: true })
      saveCookie('_pdpaf', 'true', 'oneYear')
      saveCookie('_pdpsm', 'true', 'oneYear')
      changeRender({ [VISITOR_PRIVACY_MONIT_TRACK]: false })
    }
  }
}

export function settingsManager(props) {
  const { lang, langHandler, changeRoute } = props
  const track = VISITOR_PRIVACY_SETTINGS_TRACK

  // TODO CHANGE ROUTE
  return {
    classNames: { container: 'form-input button settings' },
    label: langHandler({ pl: 'Ustawienia', en: 'Settings' }),
    // onClick: () => changeRoute({ lang, track, changeRoute })
  }
}
