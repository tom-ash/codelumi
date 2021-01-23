import { districts } from '../../../constants/announcement/districts'

export function parseDistrictForUrl(districtValue) {
  return districts.find(district => district.value === districtValue).url
}