function buildPageEditUrl(urlComposites) {
  const { pageEditData: { name, langVerUrls }, lang } = urlComposites

  if (!name || !langVerUrls) return 

  return `${{ pl: 'edytuj-strone', en: 'edit-page' }[lang]}/${langVerUrls[lang] || `${name}/${lang}`}`
}

export default buildPageEditUrl
