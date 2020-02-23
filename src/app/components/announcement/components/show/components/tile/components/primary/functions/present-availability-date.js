export function presentAvailabilityDate({ availabilityDate, category }) {
  if (Date.parse(availabilityDate) < new Date().getTime()) {
    if (category === 1) return { pl: 'Już dostępny', en: 'Already available' }
    else return { pl: 'Już dostępne', en: 'Already available' }
  }

  return { pl: `Dostępne od ${availabilityDate}`, en: `Available from ${availabilityDate}` }
}
