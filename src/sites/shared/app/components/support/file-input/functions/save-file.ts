interface SaveFile {
  (params: {
    apiUrl: string;
    file: File;
    path: string;
    randomizeKey: boolean;
  }): Promise<string>
}

export const saveFile: SaveFile = async params => {
  const {
    apiUrl,
    file,
    path,
    randomizeKey
} = params

  const presignedPostResponse = await fetch(`${apiUrl}/remote-asset/presigned-post`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      path,
      key: file.name,
      randomizeKey,
      fileType: file.name.split('.').pop(),
      mimeType: file.type,
    }),
  })

  const presignedPost = await presignedPostResponse.json()

  let formData = new FormData()
  Object.keys(presignedPost.fields).forEach(key => {
    formData.append(key, presignedPost.fields[key])
  })
  formData.append('file', file)
  formData.append('Content-Type', file.type)

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
