import { saveCookie } from '../../../../cookies/functions/save'

export function statisticsConsentManager() {
  const { statisticsConsent } = this.props

  return {
    name: 'additional-functions',
    classNames: { container: 'form-input radio'},
    checked: statisticsConsent,
    radios: [
      { value: true, label: 'Zgadzam się' },
      { value: false, label: 'Nie zgadzam się' }
    ],
    onClick: (value) => {
      this.props.changeSettings({ statisticsConsent: value })
      saveCookie('_pdpaf', value, 'oneYear')
      location.reload()
    }
  }
}

export function marketingConsentManager() {
  const { marketingConsent } = this.props
  
  return {
    name: 'statistics-marketing',
    classNames: { container: 'form-input radio'},
    checked: marketingConsent,
    radios: [
      { value: true, label: 'Zgadzam się' },
      { value: false, label: 'Nie zgadzam się' }
    ],
    onClick: (value) => {
      this.props.changeSettings({ marketingConsent: value })
      saveCookie('_pdpsm', value, 'oneYear')
      location.reload()
    }
  }
}