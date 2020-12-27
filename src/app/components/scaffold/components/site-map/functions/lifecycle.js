export function componentDidMount() {
  const {
    language,
    changeApp,
    siteMapLinks
  } = this.props

  if (siteMapLinks !== null) return

  fetch(`${API_URL}/site_map`, {
    headers: {
      'Content-Type': 'application/json',
      'Language': language
    }
  })
  .then(response => {
    if (response.ok) return response.json()

    throw new Error('Page Not Found')
  })
  .then(json => {
    changeApp({
      siteMapLinks: json
    })
  })
}
