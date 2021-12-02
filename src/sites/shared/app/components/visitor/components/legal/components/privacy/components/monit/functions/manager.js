import { saveCookie } from '../../../../cookies/functions/save'

export function agreeManager(props) {
  const { changeConsents } = props
  
  return {
    classNames: { container: 'form-input button agree' },
    label: 'OK',
    onClick: () => {
      changeConsents({ statisticsConsent: true, marketingConsent: true })
      saveCookie('_pdpaf', 'true', 'oneYear')
      saveCookie('_pdpsm', 'true', 'oneYear')
    }
  }
}

export function settingsManager(props) {
  const { langHandler } = props

  // TODO CHANGE ROUTE
  return {
    classNames: { container: 'form-input button settings' },
    label: langHandler({ pl: 'Ustawienia', en: 'Settings' }),
    // onClick: () => changeRoute({ lang, track, changeRoute })
  }
}
