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
  const { links, langHandler, changeRoute, buildUrl } = props
  const classNames = { container: 'form-input button settings' }
  const label = langHandler({ pl: 'Ustawienia', en: 'Settings' })
  const linkData = links['visitor/privacy-settings']
  const href = linkData && buildUrl({ path: linkData.path })
  const onClick = () => changeRoute({ href })

  return { classNames, label, onClick }
}
