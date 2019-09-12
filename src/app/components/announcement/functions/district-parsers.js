import { districts } from '../constants/districts'

export function parseDistrict(districtValue) {
  if (districtValue === null || districtValue === undefined) return ''
  return districts.find(district => district.value === districtValue).text
}

export function parseDistrictForUrl(districtValue) {
  const district = districts.find(district => district.value === districtValue).url
  return { polish: district, english: district }
}

export function reverseParseDistrict(districtName) {
  const foundDistrict = districts.find(district => district.url === districtName)
  if (!foundDistrict) return ''
  return foundDistrict.value
}