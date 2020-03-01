import { districts } from '../../constants/districts'

export function parseDistrict(districtValue) {
  return districts.find(district => district.value === districtValue).text
}
