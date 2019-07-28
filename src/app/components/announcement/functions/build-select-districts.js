import { districts } from "../constants/districts"

export function buildSelectDistricts() {
  return [{ value: '', text: '' }].concat(districts)
}