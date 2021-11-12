import routes from '../../../../../../../../../../shared/constants/routes/routes.js'
import CLIENT_URL from '../../../../../../../../../../shared/constants/urls/client.js'
import getRouteByRender from '../../../../../../../../../../../shared/app/functions/routes/getters/route-by-render.js'

export function radioManager(props) {
  const { changeRoute, render, lang, renderCatalogue } = props
  const { relatedToUrl: url } = getRouteByRender({ routes, render, lang })
  const href = `${CLIENT_URL}/${url === '/' ? '' : url}`

  return {
    name: 'map-catalogue-switch',
    classNames: { container: 'form-input radio'},
    checked: renderCatalogue ? 'catalogue' : 'map',
    radios: [
      { value: 'map', label: 'Mapa' },
      { value: 'catalogue', label: 'Katalog' }
    ],
    onClick: value => {
      // TODO: Base on value.
      changeRoute({ href, retainQueryParams: true })
    }
  }
}