import { PAGE_SHOW_TRACK } from '../../../../shared/constants/tracks/tracks.js'
import pageShowUrlBuilder from '../../../components/page/components/show/functions/url-builder.js'

function getUrlByRoute(props) {
  const { route, lang, urlComposites } = props
  const { track } = route

  if (track === PAGE_SHOW_TRACK) return pageShowUrlBuilder({ ...urlComposites, lang })
  if (route.urlBuilder) return route.urlBuilder({ ...urlComposites, lang })

  return route.url
}

export default getUrlByRoute
