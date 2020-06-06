export const requiredInputs = {
  category: {
    id: 'announcement-create-category',
    label: {},
    error: {
      pl: 'wybierz kategorię',
      en: 'select category'
    }
  },
  district: {
    id: 'announcement-create-district',
    errors: {
      pl: 'wybierz dzielnicę',
      en: 'select district'
    }
  },
  rentCurrency: {
    id: 'announcement-create-rent-currency'
  },
  rentAmount: {
    id: 'announcement-create-rent-amount'
  },
  area: {
    id: 'announcement-create-area',
    error: {
      pl: 'podaj powierzchnię',
      en: 'provide area'
    }
  },
  rooms: {
    id: 'announcement-create-rooms',
    error: {
      pl: 'wybierz liczbę pomieszczeń',
      en: 'select rooms amount'
    }
  },
  floor: {
    id: 'announcement-create-floor',
    error: {
      pl: 'wybierz piętro',
      en: 'select floor'
    }
  },
  totalFloors: {
    id: 'annoucement-create-total-floors',
    error: {
      pl: 'wybierz całkowitą liczbę pięter',
      en: 'select total floors'
    }
  },
  availabilityDateSelect: {
    id: 'availability-date-select',
    error: {
      pl: 'wybierz datę dostępności',
      en: 'select availability date'
    }
  },
  availabilityDate: {
    id: 'availability-date',
    error: {
      pl: 'wybierz datę dostępności',
      en: 'select availability date'
    }
  },
  pictures: {
    id: 'announcement-create-pictures-input',
    error: {
      pl: 'dodaj przynajmniej jedno zdjęcie',
      en: 'add at least one picture'
    }
  },
  map: {
    id: 'google-map-container',
    error: {
      pl: 'wybierz lokalizację',
      en: 'select location'
    }
  }
}

export const requiredInputsArray = [
  'district',
  'area',
  'rooms',
  'floor',
  'totalFloors',
  'pictures',
  'map'
]
