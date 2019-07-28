export const requiredInputs = {
  category: {
    id: 'announcement-create-category',
    label: {},
    error: {
      polish: 'wybierz kategorię',
      english: 'select category'
    }
  },
  district: {
    id: 'announcement-create-district',
    errors: {
      polish: 'wybierz dzielnicę',
      english: 'select district'
    }
  },
  rentCurrency: {
    id: 'announcement-create-rent-currency',
    error: {
      polish: 'wybierz walutę czynszu',
      english: 'select rent currency'
    }
  },
  rentAmount: {
    id: 'announcement-create-rent-amount',
    error: {
      polish: 'podaj wysokość czynszu',
      english: 'provide rent amount'
    }
  },
  additionalFees: {
    id: 'announcement-create-additional-fees',
    error: {
      polish: 'wybierz opłaty dodatkowe',
      english: 'select additional fees'
    }
  },
  area: {
    id: 'announcement-create-area',
    error: {
      polish: 'podaj powierzchnię',
      english: 'provide area'
    }
  },
  rooms: {
    id: 'announcement-create-rooms',
    error: {
      polish: 'wybierz liczbę pokoi',
      english: 'select rooms amount'
    }
  },
  floor: {
    id: 'announcement-create-floor',
    error: {
      polish: 'wybierz piętro',
      english: 'select floor'
    }
  },
  totalFloors: {
    id: 'annoucement-create-total-floors',
    error: {
      polish: 'wybierz całkowitą liczbę pięter',
      english: 'select total floors'
    }
  },
  pictures: {
    id: 'announcement-create-pictures-input',
    error: {
      polish: 'dodaj przynajmniej jedno zdjęcie',
      english: 'add at least one picture'
    }
  },
  map: {
    id: 'google-map-container',
    error: {
      polish: 'wybierz lokalizację',
      english: 'select location'
    }
  }
}

export const requiredInputsArray = [
  'category',
  'district',
  'rentCurrency',
  'rentAmount',
  'additionalFees',
  'area',
  'rooms',
  'floor',
  'totalFloors',
  'pictures',
  'map'
]