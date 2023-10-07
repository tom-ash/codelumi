import { Location } from '../../../types/location'

interface GetLocationByPlaceId {
  (placeId: string): Promise<Location>
}

export const getLocationByPlaceId: GetLocationByPlaceId = async placeId => {
  return new Promise((resolve, reject) => {
    const geocoder = new google.maps.Geocoder()

    geocoder.geocode({ placeId: placeId }, (results, status) => {
      if (status === 'OK') {
        const location = results[0].geometry.location
        const lat = location.lat()
        const lng = location.lng()

        resolve({
          lat,
          lng,
        })
      } else {
        reject(status)
      }
    })
  })
}
