import { saveCookie } from '../../../../cookies/functions/save'

export function statisticsConsentManager(props) {
  const { statisticsConsent, changeConsents } = props

  return {
    name: 'statistics',
    classNames: { container: 'form-input radio' },
    checked: statisticsConsent,
    radios: [
      { value: true, label: 'Zgadzam się' },
      { value: false, label: 'Nie zgadzam się' },
    ],
    onClick: value => {
      changeConsents({ statisticsConsent: value })
      saveCookie('_pdpaf', value, 'oneYear')
    },
  }
}

export function marketingConsentManager(props) {
  const { marketingConsent, changeConsents } = props

  return {
    name: 'marketing',
    classNames: { container: 'form-input radio' },
    checked: marketingConsent,
    radios: [
      { value: true, label: 'Zgadzam się' },
      { value: false, label: 'Nie zgadzam się' },
    ],
    onClick: value => {
      changeConsents({ marketingConsent: value })
      saveCookie('_pdpsm', value, 'oneYear')
    },
  }
}
