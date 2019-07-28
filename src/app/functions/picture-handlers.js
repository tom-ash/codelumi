import ImageCompressor from 'image-compressor.js'
import { apiUrl } from '../constants/urls'

export function compressAndSaveBlobPicture(destination, blob, callback) {
  fetch(blob)
  .then(response => { return response.blob()})
  .then(blob => {
    const imageCompressor = new ImageCompressor();
    imageCompressor.compress(blob, { quality: 0.6, convertSize: 100000 })
    .then(file => ( savePicture(destination, file, callback) ))
  })
}

export function savePicture(destination, file, callback) {
  fetch(apiUrl + destination, {
    method: 'post', headers: { 'Content-Type': 'application/json', 'FileType': file.type }
  })
  .then(response => { if (response.ok) return response.json() }, networkError => console.dir(networkError.message))
  .then(jsonResponse => {
    let formData = new FormData()
    Object.keys(jsonResponse.fields).forEach((key) => { formData.append(key, jsonResponse.fields[key]) })
    formData.append('file', file)
    formData.append('Content-Type', file.type)
    fetch(jsonResponse.url, { method: 'POST', body: formData, headers: { 'Accept': 'application/json' } })
    .then(response => { if (response.ok) callback(jsonResponse.key) })
  })
}