export function presentFloor({ floor }) {
  if (floor === -1) return { pl: 'Podziemie', en: 'Underground' }
  if (floor === 0) return { pl: 'Parter', en: 'Groundfloor' }

  return { pl: `${floor} piętro`, en: `${floor} floor` }
}
