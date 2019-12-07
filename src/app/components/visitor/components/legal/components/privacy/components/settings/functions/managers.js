import { saveCookie } from '../../../../cookies/functions/save'

export function additionalFunctionsConsentManager() {
  const { additionalFunctionsConsent } = this.props

  return {
    name: 'additional-functions',
    classNames: { container: 'form-input radio'},
    checked: additionalFunctionsConsent,
    radios: [
      { value: 'true', label: 'Zgadzam się' },
      { value: 'false', label: 'Nie zgadzam się' }
    ],
    onClick: (value) => {
      this.props.changeSettings({ additionalFunctionsConsent: value })
      saveCookie('_pdpaf', value, 'oneYear')
      location.reload()
    }
  }
}

export function statisticsAndMarketingConsentManager() {
  const { statisticsAndMarketingConsent } = this.props
  
  return {
    name: 'statistics-marketing',
    classNames: { container: 'form-input radio'},
    checked: statisticsAndMarketingConsent,
    radios: [
      { value: 'true', label: 'Zgadzam się' },
      { value: 'false', label: 'Nie zgadzam się' }
    ],
    onClick: (value) => {
      this.props.changeSettings({ statisticsAndMarketingConsent: value })
      saveCookie('_pdpsm', value, 'oneYear')
      location.reload()
    }
  }
}