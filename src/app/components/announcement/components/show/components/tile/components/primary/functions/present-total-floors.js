export function presentTotalFloors({ totalFloors }) {
  if (totalFloors === -1) return { pl: 'Budynek podziemny', en: 'Underground building' }
  if (totalFloors === 0) return { pl: 'Budynek parterowy', en: 'Groundfloor building' }

  return { pl: `${totalFloors}-piętrowy budynek`, en: `${totalFloors}-storied building` }
}
