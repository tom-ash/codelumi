import { PAGE_SHOW_TRACK } from '../../../../shared/shared/constants/tracks/tracks.js'

export function getUrlFromRoute({ route, lang }) {
  const { track } = route

  if (track === PAGE_SHOW_TRACK) {
    const { pageShowData: { langVerUrls } } = this.props
    if (!langVerUrls) return null

    return langVerUrls[lang]
  }

  if (route.urlBuilder) return route.urlBuilder({ ...this.props, lang: [route.lang] })

  return route.url
}
