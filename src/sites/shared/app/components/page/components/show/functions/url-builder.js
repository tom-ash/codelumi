function pageShowUrlBuilder(urlComposites) {
  if (!urlComposites) return null

  const { pageShowData, lang } = urlComposites
  if (!pageShowData) return null

  const { langVerUrls } = pageShowData
  if (!langVerUrls) return null

  return langVerUrls[lang]
}

export default pageShowUrlBuilder
