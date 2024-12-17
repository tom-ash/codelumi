import API_URL from '../../../../_sites/mapawynajmu-pl/shared/constants/urls/api';
import { getAccessToken } from '../../../shared/app/components/user/components/auth/functions/get-access-token';
let ImageCompressor;
if (typeof window !== 'undefined')
  ImageCompressor = require('image-compressor.js').default;

export function compressAndSaveBlobPicture(params, blob, callback) {
  fetch(blob)
    .then((response) => {
      return response.blob();
    })
    .then((blob) => {
      const imageCompressor = new ImageCompressor();
      imageCompressor
        .compress(blob, { quality: 0.6, convertSize: 100000 })
        .then((file) => savePicture(params, file, callback));
    });
}

function savePicture(params, file, callback) {
  const body = JSON.stringify(params);

  fetch(API_URL + '/remote-asset/presigned-post', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Access-Token': getAccessToken(),
    },
    body,
  })
    .then(
      (response) => {
        if (response.ok) return response.json();
      },
      (networkError) => console.dir(networkError.message),
    )
    .then((json) => {
      let formData = new FormData();
      Object.keys(json.fields).forEach((key) => {
        formData.append(key, json.fields[key]);
      });
      formData.append('file', file);
      formData.append('Content-Type', file.type);
      fetch(json.url, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
          acl: 'public-read',
        },
      }).then((response) => {
        if (response.ok) callback(json.key);
      });
    });
}
