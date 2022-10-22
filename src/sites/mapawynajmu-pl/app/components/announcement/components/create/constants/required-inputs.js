export const requiredInputs = {
  category: {
    id: 'listing-create-category',
    label: {},
    error: {
      pl: 'Wybierz kategorię.',
      en: 'Select category.',
    },
  },
  pictures: {
    id: 'listing-create-pictures-input',
    error: {
      pl: 'Dodaj przynajmniej jedno zdjęcie.',
      en: 'Add at least one picture.',
    },
  },
  map: {
    id: 'google-map-container',
    error: {
      pl: 'Wskaż lokalizację.',
      en: 'Pinpoint location.',
    },
  },
}

export const requiredInputsArray = [
  // 'category',
  'pictures',
  'map',
]
