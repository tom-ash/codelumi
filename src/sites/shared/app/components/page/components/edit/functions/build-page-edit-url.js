function buildPageEditUrl({ pageEditData: { name, langVerUrls }, lang }) {
  if (!name || !langVerUrls) return 

  return `${{ pl: 'edytuj-strone', en: 'edit-page' }[lang]}/${langVerUrls[lang] || `${name}/${lang}`}`
}

export default buildPageEditUrl
