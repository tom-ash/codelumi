const googleMapStyles = [
  {
    featureType: 'poi',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },

  {
    featureType: 'transit.line',
    elementType: 'geometry',
    stylers: [{ color: '#AEB6BF' }],
  },

  {
    featureType: 'road.arterial',
    elementType: 'geometry',
    stylers: [{ color: '#FCF3CF' }],
  },

  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [{ color: '#F8C471' }],
  },

  {
    featureType: 'water',
    stylers: [{ color: '#5DADE2' }],
  },

  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [
      {
        color: '#A3E4D7',
      },
      {
        visibility: 'on',
      },
    ],
  },
]

export default googleMapStyles
