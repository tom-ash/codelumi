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
  area: {
    id: 'announcement-create-area',
    error: {
      pl: 'podaj powierzchnię',
      en: 'provide area'
    }
  },
  pictures: {
    id: 'announcement-create-pictures-input',
    error: {
      pl: 'Dodaj przynajmniej jedno zdjęcie.',
      en: 'Add at least one picture.'
    }
  },
  map: {
    id: 'google-map-container',
    error: {
      pl: 'Wskaż lokalizację.',
      en: 'Pinpoint location.'
    }
  }
}

export const requiredInputsArray = [
  'category',
  'district',
  'area',
  'pictures',
  'map'
]
