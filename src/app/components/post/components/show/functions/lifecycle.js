export function componentDidMount() {
  const {
    name,
    changeData
  } = this.props

  if (name === null) return

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
    changeData(json)
  })
}

export function componentDidUpdate(prevProps) {
  const { name: prevName } = prevProps
  const  { name } = this.props

  if (name !== null && prevName !== name) {
    const {
      changeData
    } = this.props
  
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
      changeData(json)
    })
  }
}
