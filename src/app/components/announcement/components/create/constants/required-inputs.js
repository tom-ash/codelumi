export const requiredInputs = {
  category: {
    id: 'announcement-create-category',
    label: {},
    error: {
      pl: 'Wybierz kategorię.',
      en: 'Select category.'
    }
  },
  district: {
    id: 'announcement-create-district',
    error: {
      pl: 'Wybierz dzielnicę.',
      en: 'Select district.'
    }
  },
  area: {
    id: 'announcement-create-area',
    error: {
      pl: 'Podaj powierzchnię.',
      en: 'Provide area.'
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
