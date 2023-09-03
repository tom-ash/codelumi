interface MapOptions {
  center: {
    lat: number,
    lng: number,
  },
  zoom: number,
}

interface GetDefaultMapOptions {
  (isMobile: boolean): MapOptions
}

export const getDefaultMapOptions: GetDefaultMapOptions = (isMobile) => {

    console.log(isMobile)
  if (isMobile) {
    return ({
      center: {
        lat: 51.9,
        lng: 19.1,
      },
      zoom: 5.75,
    })
  }

  return ({
    center: {
      lat: 52,
      lng: 19,
    },
    zoom: 6.7,
  })
}