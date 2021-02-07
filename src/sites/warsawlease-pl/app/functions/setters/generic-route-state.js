import routeRenders from '../../../shared/constants/routes/renders'
import renderState from '../../constants/render-state'

function genericRouteStateSetter({ lang, track }) {
  const { changeApp, changeRender } = this.props

  changeApp({ lang })
  changeRender({ ...renderState, [track]: true, ...routeRenders[track] })
}

export default genericRouteStateSetter
