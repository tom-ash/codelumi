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
    client: 'district',
    server: 'district'
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
    client: 'pictures',
    server: 'pictures'
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
  }
]