export enum IMAGE_FILE_TYPE {
  PNG = 'png',
}

export enum IMAGE_MIME_TYPE {
  PNG = 'image/png',
}

interface SaveBlob {
  (params: {
    apiUrl: string
    blob: Blob
    key: string
    fileType: IMAGE_FILE_TYPE
    mimeType: IMAGE_MIME_TYPE
  }): Promise<string>
}

export const saveBlob: SaveBlob = async params => {
  const { blob, apiUrl, key, fileType, mimeType } = params

  let presignedPostResponse: Response

  presignedPostResponse = await fetch(`${apiUrl}/remote-asset/presigned-post`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      path: 'temporary',
      key,
      randomizeKey: true,
      fileType,
      mimeType,
    }),
  })

  const presignedPost = await presignedPostResponse.json()

  let formData = new FormData()
  Object.keys(presignedPost.fields).forEach(key => {
    formData.append(key, presignedPost.fields[key])
  })
  formData.append('file', blob)
  formData.append('Content-Type', fileType)

  await fetch(presignedPost.url, {
    method: 'POST',
    body: formData,
    headers: {
      Accept: 'application/json',
      acl: 'public-read',
    },
  })

  return presignedPost.trailingKey
}
