import { saveCookie } from '../../../../cookies/functions/save'

export function agreeManager() {
  const { consents: propConsents, changeSettings } = this.props
  return {
    classNames: { container: 'form-input button agree' },
    label: this.languageHandler('Zgadzam się', 'I agree'),
    onClick: () => {
      const consents = { ...propConsents }
      // TODO: DEEP CLONE
      consents.personalDataProcessing.additionalFunctions = 'true'
      consents.personalDataProcessing.statisticsAndMarketing = 'true'
      changeSettings({ consents })
      saveCookie('_pdpaf', 'true', 'oneYear')
      saveCookie('_pdpsm', 'true', 'oneYear')
    }
  }
}

export function settingsManager() {
  return {
    classNames: { container: 'form-input button settings' },
    label: this.languageHandler('Ustawienia', 'Settings'),
    onClick: () => this.changeRoute(null, 'privacySettings')
  }
}