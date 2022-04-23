interface saveProps {
  apiUrl: string,
  imageId: number,
  body: string,
  width: string,
  height: string,
  storageKey: string,
  storageUrl: string
}

export function save(props: saveProps) {

  const {
    apiUrl,
    imageId,
    body,
    width,
    height,
    storageKey,
    storageUrl
  } = props

  JSON.parse(body)

  fetch(`${apiUrl}/image/update`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      // 'Access-Token': getAccessToken()
    },
    body: JSON.stringify({
      imageId,
      body,
      width,
      height,
      storageKey,
      storageUrl
    })
  })
  // TODO:
  // .then(response => {
  //   if (response.status === 200) return response.json()

  //   throw new Error('Server error at updating page!')
  // })
  // .then(path => {
  //   if (!withRouteChange) return

  //   const { buildUrl, changeRoute } = this.props
  //   const href = buildUrl({ path })

  //   changeRoute({ href })
  // })
  // .finally(() => {
  //   changeControl({ fetching: false })
  // })
}

export default save
