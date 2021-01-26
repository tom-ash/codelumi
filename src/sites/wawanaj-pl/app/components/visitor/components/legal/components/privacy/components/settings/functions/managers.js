import { saveCookie } from '../../../../cookies/functions/save'

export function statisticsConsentManager() {
  const { statisticsConsent } = this.props

  return {
    name: 'statistics',
    classNames: { container: 'form-input radio'},
    checked: statisticsConsent,
    radios: [
      { value: true, label: 'Zgadzam się' },
      { value: false, label: 'Nie zgadzam się' }
    ],
    onClick: value => {
      this.props.changeSettings({ statisticsConsent: value })
      saveCookie('_pdpaf', value, 'oneYear')
    }
  }
}

export function marketingConsentManager() {
  const { marketingConsent } = this.props
  
  return {
    name: 'marketing',
    classNames: { container: 'form-input radio'},
    checked: marketingConsent,
    radios: [
      { value: true, label: 'Zgadzam się' },
      { value: false, label: 'Nie zgadzam się' }
    ],
    onClick: value => {
      this.props.changeSettings({ marketingConsent: value })
      saveCookie('_pdpsm', value, 'oneYear')
    }
  }
}