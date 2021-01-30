import routeRenders from '../../../shared/constants/routes/renders'
import renderState from '../../constants/render-state'
import { instantScroll } from '../scrollers/instant-scroll'

export function changeRoute(track) {
  const {
    changeApp,
    changeRender
  } = this.props

  changeRender({ ...renderState, [track]: true, ...routeRenders[track] })
  changeApp({ shouldMatchRouteToRenderAndLanguage: true })
  instantScroll()
}
