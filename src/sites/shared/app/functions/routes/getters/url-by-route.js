import { PAGE_SHOW_TRACK } from '../../../../shared/constants/tracks/tracks.js'

function getUrlByRoute(props) {
  const { route, lang, urlComposites } = props
  const { track } = route

  if (track === PAGE_SHOW_TRACK) {
    const { urlComposites } = props
    if (!urlComposites) return null

    const { pageShowData } = urlComposites
    if (!pageShowData) return null

    const { langVerUrls } = pageShowData
    if (!langVerUrls) return null

    return langVerUrls[lang]
  }

  if (route.urlBuilder) return route.urlBuilder({ ...urlComposites, lang })

  return route.url
}

export default getUrlByRoute
