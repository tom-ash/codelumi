import { managerAgent } from 'managed-inputs'
import { saveCookie } from '../../../../cookies/functions/save'

export function agreeManager(action) {
  return managerAgent(action, {
    classNames: {
      container: 'form-input button agree'
    },
    label: this.languageHandler('Zgadzam się', 'I agree'),
    onClick: () => {
      const consents = { ...this.props.consents }
      consents.personalDataProcessing.additionalFunctions = "true"
      consents.personalDataProcessing.statisticsAndMarketing = "true"
      this.props.changeSettings({ consents: consents })
      saveCookie('_pdpaf', 'true', 'oneYear')
      saveCookie('_pdpsm', 'true', 'oneYear')
    }
  })
}

export function settingsManager(action) {
  return managerAgent(action, {
    classNames: { container: 'form-input button settings' },
    label: this.languageHandler('Ustawienia', 'Settings'),
    onClick: () => this.changeRoute(null, 'privacySettings')
  })
}