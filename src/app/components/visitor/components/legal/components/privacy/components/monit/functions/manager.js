import { saveCookie } from '../../../../cookies/functions/save'

export function agreeManager() {
  const { changeSettings } = this.props
  
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
    }
  }
}

export function settingsManager() {
  return {
    classNames: { container: 'form-input button settings' },
    label: this.languageHandler('Ustawienia', 'Settings'),
    onClick: TODO
  }
}
