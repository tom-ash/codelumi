import buildUrl from '../../../../../../../../../../shared/functions/builders/url'

export function radioManager(props) {
  const { links, changeRoute, renderCatalogue } = props
  const mapLink = links['root/map']
  const catalogueLink = links['root/catalogue']
  const mapPath = mapLink && mapLink.path
  const cataloguePath = catalogueLink && catalogueLink.path
  const href = buildUrl({ path: renderCatalogue ? mapPath : cataloguePath })
  
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