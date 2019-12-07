import { saveCookie } from '../../../../cookies/functions/save'

export function agreeManager() {
  const { changeSettings } = this.props
  
  return {
    classNames: { container: 'form-input button agree' },
    label: 'OK',
    onClick: () => {
      changeSettings({
        additionalFunctionsConsent: true,
        statisticsAndMarketingConsent: true
      })
      saveCookie('_pdpaf', 'true', 'oneYear')
      saveCookie('_pdpsm', 'true', 'oneYear')
    }
  }
}

export function settingsManager() {
  const { changeApp } = this.props

  return {
    classNames: { container: 'form-input button settings' },
    label: this.languageHandler('Ustawienia', 'Settings'),
    onClick: () => changeApp({ showVisitorPrivacySettings: true })
  }
}