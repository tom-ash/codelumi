import { districts } from '../constants/districts'

export function parseDistrict(districtValue) {
  if (districtValue === null || districtValue === undefined) return ''
  return districts.find(district => district.value === districtValue).text
}

export function parseDistrictForUrl(districtValue) {
  return districts.find(district => district.value === districtValue).url
}

export function reverseParseDistrict(districtName) {
  const foundDistrict = districts.find(district => district.url === districtName)
  if (!foundDistrict) return ''
  return foundDistrict.value
}