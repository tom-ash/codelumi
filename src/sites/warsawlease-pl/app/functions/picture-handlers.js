import API_URL from '../../shared/constants/urls/api.js'
let ImageCompressor
if (typeof window !== 'undefined') ImageCompressor = require('image-compressor.js').default

export function compressAndSaveBlobPicture(destination, blob, callback) {
  fetch(blob)
  .then(response => { return response.blob()})
  .then(blob => {
    const imageCompressor = new ImageCompressor();
    imageCompressor.compress(blob, { quality: 0.6, convertSize: 100000 })
    .then(file => ( savePicture(destination, file, callback) ))
  })
}

function savePicture(destination, file, callback) {
  fetch(API_URL + destination, {
    method: 'post', headers: { 'Content-Type': 'application/json', 'FileType': file.type }
  })
  .then(response => { if (response.ok) return response.json() }, networkError => console.dir(networkError.message))
  .then(json => {
    let formData = new FormData()
    Object.keys(json.fields).forEach((key) => { formData.append(key, json.fields[key]) })
    formData.append('file', file)
    formData.append('Content-Type', file.type)
    fetch(json.url, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json',
        'acl': 'public-read'
      }
    })
    .then(response => { if (response.ok) callback(json.key) })
  })
}
