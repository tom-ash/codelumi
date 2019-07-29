import { inputs } from '../../../../../constants/inputs'

export const items = [
  {
    icon: inputs.rentCurrency.icon,
    label: { polish: 'Miesięczny czynsz netto', english: 'Monthly Net Rent' },
    stateKey: 'rent'
  },
  {
    icon: inputs.rentCurrency.icon,
    label: { polish: 'Opłaty dodatkowe', english: 'Additional Fees' },
    stateKey: 'additionalFees'
  },
  {
    icon: inputs.area.icon,
    label: { polish: 'Powierzchnia', english: 'Area' },
    stateKey: 'area'
  },
  {
    icon: inputs.rooms.icon,
    label: { polish: 'Pomieszczenia', english: 'Rooms' },
    stateKey: 'rooms'
  },
  {
    icon: inputs.floor.icon,
    label: { polish: 'Piętro', english: 'Floor' },
    stateKey: 'floor'
  },
  {
    icon: inputs.availabilityDate.icon,
    label: { polish: 'Dostępne od', english: 'Available From' },
    stateKey: 'availabilityDate'
  }
]
