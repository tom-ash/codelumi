export function parseCategory(categoryNumber) {
  switch (categoryNumber) {
    case 0: return { pl: 'Biuro', en: 'Office' }
    case 1: return { pl: 'Lokal użytkowy', en: 'Usable Premises' }
    case 2: return { pl: 'Mieszkanie', en: 'Apartment' }
    default: break
  }
}
