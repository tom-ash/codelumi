import { PAGE_SHOW_TRACK } from '../../../../shared/constants/tracks/tracks.js'

function getUrlByRoute(props) {
  const { route, lang } = props
  const { track } = route

  if (track === PAGE_SHOW_TRACK) {
    const { pageShowData } = props
    if (!pageShowData) return null

    const { langVerUrls } = pageShowData
    if (!langVerUrls) return null

    return langVerUrls[lang]
  }

  // if (route.urlBuilder) return route.urlBuilder({ ...props, lang: [route.lang] })

  return route.url
}

export default getUrlByRoute
