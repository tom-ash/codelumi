export const clientServerParams = [
  {
    client: 'id',
    server: 'id'
  },
  {
    client: 'category',
    server: 'category'
  },
  {
    client: 'rentCurrency',
    server: 'rentCurrency'
  },
  {
    client: 'netRentAmount',
    server: 'netRentAmount'
  },
  {
    client: 'grossRentAmount',
    server: 'grossRentAmount'
  },
  {
    client: 'area',
    server: 'area'
  },
  {
    client: 'rooms',
    server: 'rooms'
  },
  {
    client: 'floor',
    server: 'floor'
  },
  {
    client: 'totalFloors',
    server: 'totalFloors'
  },
  {
    client: 'polishDescription',
    server: 'polishDescription'
  },
  {
    client: 'englishDescription',
    server: 'englishDescription'
  },
  {
    client: 'locality',
    server: 'locality'
  },
  {
    client: 'sublocality',
    server: 'sublocality'
  }
]

export const createClientServerParams = [
  ...clientServerParams,
  {
    client: 'picUploads',
    server: 'pictures'
  }
]

export const showClientServerParams = [
  ...clientServerParams,
  {
    client: 'id',
    server: 'id'
  },
  {
    client: 'name',
    server: 'name'
  },
  {
    client: 'phone',
    server: 'phone'
  },
  {
    client: 'netRentAmountPerSqm',
    server: 'netRentAmountPerSqm'
  },
  {
    client: 'grossRentAmount',
    server: 'grossRentAmount'
  },
  {
    client: 'grossRentAmountPerSqm',
    server: 'grossRentAmountPerSqm'
  },
  {
    client: 'pictures',
    server: 'pictures'
  },
  {
    client: 'latitude',
    server: 'latitude'
  },
  {
    client: 'longitude',
    server: 'longitude'
  },
  {
    client: 'availabilityDate',
    server: 'availabilityDate'
  },
  {
    client: 'features',
    server: 'features'
  },
  {
    client: 'furnishings',
    server: 'furnishings'
  },
]
