const links_data = [
  { name: 'contactManager', urls_key: 'VISITOR_CONTACT_URLS', titles_key: 'VISITOR_CONTACT_TITLES' },
  { name: 'termsOfServiceManager', urls_key: 'VISITOR_TERMS_OF_SERVICE_URLS', titles_key: 'VISITOR_TERMS_OF_SERVICE_TITLES' },
  { name: 'cookiesPolicyManager', urls_key: 'VISITOR_COOKIES_POLICY_URLS', titles_key: 'VISITOR_COOKIES_POLICY_TITLES' },
  { name: 'privacySettingsManager', urls_key: 'VISITOR_PRIVACY_SETTINGS_URLS', titles_key: 'VISITOR_PRIVACY_SETTINGS_TITLES' },
  { name: 'privacyPolicyManager', urls_key: 'VISITOR_PRIVACY_POLICY_URLS', titles_key: 'VISITOR_PRIVACY_POLICY_TITLES' },
  { name: 'addPageManager', urls_key: 'PAGE_CREATE_URLS', titles_key: 'PAGE_CREATE_TITLES' } 
]

const managers = {}

links_data.map(({ name, urls_key, titles_key }) => {
  managers[name] = props => {
    const { langs, urls, titles, clientUrl, changeRoute, langHandler } = props
    const classNames = { container: 'link' }
    const hrefLang = langHandler(langs)
    const href = `${clientUrl}/${langHandler(urls[urls_key])}`
    const title = langHandler(titles[titles_key])
    const label = title
    const onClick = () => changeRoute({ href })
    
    return { classNames, href, hrefLang, title, label, onClick }
  }
})

export default managers
