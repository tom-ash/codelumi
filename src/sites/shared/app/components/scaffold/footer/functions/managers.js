export function contactManager(props) {
  const { langs, urls, titles, clientUrl, changeRoute, langHandler } = props
  const classNames = { container: 'link' }
  const hrefLang = langHandler(langs)
  const href = `${clientUrl}/${langHandler(urls.VISITOR_CONTACT_URLS)}`
  const title = langHandler(titles.VISITOR_CONTACT_TITLES)
  const label = title
  const onClick = () => changeRoute({ href })
  
  return { classNames, href, hrefLang, title, label, onClick }
}

export function termsOfServiceManager(props) {
  const { langs, urls, titles, clientUrl, changeRoute, langHandler } = props
  const classNames = { container: 'link' }
  const hrefLang = langHandler(langs)
  const href = `${clientUrl}/${langHandler(urls.VISITOR_TERMS_OF_SERVICE_URLS)}`
  const title = langHandler(titles.VISITOR_TERMS_OF_SERVICE_TITLES)
  const label = title
  const onClick = () => changeRoute({ href })
  
  return { classNames, href, hrefLang, title, label, onClick }
}

export function cookiesPolicyManager(props) {
  const { langs, urls, titles, clientUrl, changeRoute, langHandler } = props
  const classNames = { container: 'link' }
  const hrefLang = langHandler(langs)
  const href = `${clientUrl}/${langHandler(urls.VISITOR_COOKIES_POLICY_URLS)}`
  const title = langHandler(titles.VISITOR_COOKIES_POLICY_TITLES)
  const label = title
  const onClick = () => changeRoute({ href })
  
  return { classNames, href, hrefLang, title, label, onClick }
}

export function privacySettingsManager(props) {
  const { langs, urls, titles, clientUrl, changeRoute, langHandler } = props
  const classNames = { container: 'link' }
  const hrefLang = langHandler(langs)
  const href = `${clientUrl}/${langHandler(urls.VISITOR_PRIVACY_SETTINGS_URLS)}`
  const title = langHandler(titles.VISITOR_PRIVACY_SETTINGS_TITLES)
  const label = title
  const onClick = () => changeRoute({ href })
  
  return { classNames, href, hrefLang, title, label, onClick }
}

export function privacyPolicyManager(props) {
  const { langs, urls, titles, clientUrl, changeRoute, langHandler } = props
  const classNames = { container: 'link' }
  const hrefLang = langHandler(langs)
  const href = `${clientUrl}/${langHandler(urls.VISITOR_PRIVACY_POLICY_URLS)}`
  const title = langHandler(titles.VISITOR_PRIVACY_POLICY_TITLES)
  const label = title
  const onClick = () => changeRoute({ href })
  
  return { classNames, href, hrefLang, title, label, onClick }
}

export function addPageManager(props) {
  const { langs, urls, titles, clientUrl, changeRoute, langHandler } = props
  const classNames = { container: 'link' }
  const hrefLang = langHandler(langs)
  const href = `${clientUrl}/${langHandler(urls.PAGE_CREATE_URLS)}`
  const title = langHandler(titles.PAGE_CREATE_TITLES)
  const label = title
  const onClick = () => changeRoute({ href })
  
  return { classNames, href, hrefLang, title, label, onClick }
}
