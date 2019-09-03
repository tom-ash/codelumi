export const clientServerParams = [
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
    server: 'rent_currency'
  },
  {
    client: 'netRentAmount',
    server: 'net_rent_amount'
  },
  {
    client: 'additionalFees',
    server: 'additional_fees'
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
    server: 'total_floors'
  },
  {
    client: 'descriptionPolish',
    server: 'polish_description'
  },
  {
    client: 'descriptionEnglish',
    server: 'english_description'
  }
]

export const createClientServerParams = [
  ...clientServerParams,
  {
    client: 'uploads',
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
    client: 'phone',
    server: 'phone'
  },
  {
    client: 'availabilityDate',
    server: 'availability_date'
  },
  {
    client: 'pictures',
    server: 'pictures'
  },

  {
    client: 'netRentAmountPerSqm',
    server: 'net_rent_amount_per_sqm'
  },
  {
    client: 'grossRentAmount',
    server: 'gross_rent_amount'
  },
  {
    client: 'grossRentAmountPerSqm',
    server: 'gross_rent_amount_per_sqm'
  }
]