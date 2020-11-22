export function componentDidMount() {
  const {
    name,
    data,
    changeData
  } = this.props

  if (data) return

  fetch(`${API_URL}/posts/${name}`, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) {
      return response.json()
    }
  })
  .then(json => {
    changeData({ [name]: json })
  })
}
