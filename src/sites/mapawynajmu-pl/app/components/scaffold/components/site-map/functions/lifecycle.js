import API_URL from '../../../../../../shared/constants/urls/api.js'

export function componentDidMount() {
  const { lang, changeApp, siteMapLinks } = this.props

  if (siteMapLinks !== null) return

  fetch(`${API_URL}/site_map`, {
    headers: {
      'Content-Type': 'application/json',
      Language: lang,
    },
  })
    .then(response => {
      if (response.ok) return response.json()

      throw new Error('Page Not Found')
    })
    .then(json => {
      changeApp({
        siteMapLinks: json,
      })
    })
}
