import { inputs } from '../../../../../constants/inputs'

export const items = [
  {
    icon: inputs.area.icon,
    label: {
      pl: 'Powierzchnia:',
      en: 'Area:'
    },
    stateKey: 'area'
  },
  {
    icon: inputs.rentCurrency.icon,
    label: { pl: 'Miesięczny czynsz:', en: 'Monthly Rent' },
    stateKey: 'rent'
  },
  {
    label: { pl: '', en: '' },
    stateKey: 'grossRentAmount'
  },
  {
    icon: inputs.rentCurrency.icon,
    label: { pl: 'Miesięczny czynsz / m2:', en: 'Monthly Rent / sqm' },
    stateKey: 'netRentAmountPerSqm'
  },
  {
    label: { pl: '', en: '' },
    stateKey: 'grossRentAmountPerSqm'
  },
  {
    icon: inputs.rooms.icon,
    label: { pl: 'Liczba pomieszczeń:', en: 'Rooms Amount:' },
    stateKey: 'rooms'
  },
  {
    icon: inputs.floor.icon,
    label: { pl: 'Piętro:', en: 'Floor:' },
    stateKey: 'floor'
  },
  {
    icon: inputs.totalFloors.icon,
    label: { pl: 'Liczba pięter budynku:', en: 'Building Floors Amount:' },
    stateKey: 'totalFloors'
  },
  {
    icon: inputs.availabilityDate.icon,
    label: { pl: 'Dostępne od:', en: 'Available From:' },
    stateKey: 'availabilityDate'
  }
]
