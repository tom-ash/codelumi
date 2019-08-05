import { inputs } from '../../../../../constants/inputs'

export const items = [
  {
    icon: inputs.area.icon,
    label: { polish: 'Powierzchnia:', english: 'Area:' },
    stateKey: 'area'
  },
  {
    icon: inputs.rentCurrency.icon,
    label: { polish: 'Miesięczny czynsz:', english: 'Monthly Rent' },
    stateKey: 'rent'
  },
  {
    label: { polish: '', english: '' },
    stateKey: 'rentGross'
  },
  {
    icon: inputs.rentCurrency.icon,
    label: { polish: 'Miesięczny czynsz / m2:', english: 'Monthly Rent / sqm' },
    stateKey: 'rentNetPerSqm'
  },
  {
    label: { polish: '', english: '' },
    stateKey: 'rentGrossPerSqm'
  },
  {
    icon: inputs.rentCurrency.icon,
    label: { polish: 'Opłaty dodatkowe:', english: 'Additional Fees:' },
    stateKey: 'additionalFees'
  },
  {
    icon: inputs.rooms.icon,
    label: { polish: 'Liczba pomieszczeń:', english: 'Rooms Amount:' },
    stateKey: 'rooms'
  },
  {
    icon: inputs.floor.icon,
    label: { polish: 'Piętro:', english: 'Floor:' },
    stateKey: 'floor'
  },
  {
    icon: inputs.totalFloors.icon,
    label: { polish: 'Liczba pięter budynku:', english: 'Building Floors Amount:' },
    stateKey: 'totalFloors'
  },
  {
    icon: inputs.availabilityDate.icon,
    label: { polish: 'Dostępne od:', english: 'Available From:' },
    stateKey: 'availabilityDate'
  }
]
