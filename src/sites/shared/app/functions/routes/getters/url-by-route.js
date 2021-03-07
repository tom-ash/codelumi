import { PAGE_SHOW_TRACK } from '../../../../shared/constants/tracks/tracks.js'

function getUrlByRoute({ route, lang }) {
  const { track } = route

  if (track === PAGE_SHOW_TRACK) {
    const { pageShowData: { langVerUrls } } = this.props
    if (!langVerUrls) return null

    return langVerUrls[lang]
  }

  if (route.urlBuilder) return route.urlBuilder({ ...this.props, lang: [route.lang] })

  return route.url
}

export default getUrlByRoute
