import routes from '../../../shared/constants/routes/routes'
import routeRenders from '../../../shared/constants/routes/renders'

export function matchRenderToRoute({ popState }) {
  if (typeof window === 'undefined') return

  const {
    changeApp,
    changeRender
  } = this.props

  const path = window.location.pathname
  const route = routes.find(route => path.match(route.url))
  const {
    track,
    lang: language
  } = route

  changeApp({ language })
  changeRender({ [track]: true, ...routeRenders[track] })

  // TODO
  
  // if (typeof window === 'undefined') return

  // let path = window.location.pathname
  // const newRoutes = {}

  // if (path === '/dodaj-strone' || path === '/add-page') {
  //   return changePostRender({ create: true })
  // }

  // for (let [key, matcher] of Object.entries(routes)) {
  //   if (path.match(matcher.pl.regEx) || path.match(matcher.en.regEx)) {
  //     newRoutes[key] = true

  //     if (key === 'showAnnouncementShow' || key === 'showAnnouncementEdit') {
  //       newRoutes.announcementId = +path.match(/\d+/)[0]
  //     }

  //     if (matcher.needsAnnouncementIndexMap) newRoutes.showAnnouncementIndexMap = true
  //   }
  // }

  // if (Object.keys(newRoutes).length === 0) {
  //   const {
  //     changePostShowData
  //   } = this.props

  //   const postUrl = window.location.pathname.slice(1)
  //   fetch(`${API_URL}/posts/urls/${postUrl}`, {
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //   .then(response => {
  //     if (response.ok) {
  //       return response.json()
  //     }

  //     throw new Error('Page Not Found')
  //   })
  //   .then(json => {
  //     changeApp({ language: json.language })
  //     changePostShowData({ ...json, standalone: true })
  //     changePostRender({ show: true })
  //   })
  //   .catch(error => {
  //     changeApp({ showNotFound: true })
  //   })
  // }

  // changeApp({ ...emptyRoutes, ...newRoutes })
}
