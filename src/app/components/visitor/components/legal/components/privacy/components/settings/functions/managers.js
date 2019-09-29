import { saveCookie } from '../../../../cookies/functions/save'

export function additionalFunctionsManager() {
  return {
    name: 'additional-functions',
    classNames: { container: 'input-container radio'},
    checked: this.props.consents.personalDataProcessing.additionalFunctions,
    radios: [
      { value: 'true', label: 'Zgadzam się' },
      { value: 'false', label: 'Nie zgadzam się' }
    ],
    onClick: (value) => {
      const consents = { ...this.props.consents }
      consents.personalDataProcessing.additionalFunctions = value
      this.props.changeSettings({ consents: consents })
      saveCookie('_pdpaf', value, 'oneYear')
      location.reload()
    }
  }
}

export function statisticsAndMarketingManager() {
  return {
    name: 'statistics-marketing',
    classNames: { container: 'input-container radio'},
    checked: this.props.consents.personalDataProcessing.statisticsAndMarketing,
    radios: [
      { value: 'true', label: 'Zgadzam się' },
      { value: 'false', label: 'Nie zgadzam się' }
    ],
    onClick: (value) => {
      const consents = { ...this.props.consents }
      consents.personalDataProcessing.statisticsAndMarketing = value
      this.props.changeSettings({ consents: consents })
      saveCookie('_pdpsm', value, 'oneYear')
      location.reload()
    }
  }
}