import { additionalFees } from '../constants/additional-fees'

export function parseAdditionalFees(additionalFeeValue) {
  if (additionalFeeValue === null || additionalFeeValue === undefined) return { label: { pl: '', en: '' } }
  return additionalFees.find(additionalFee => additionalFee.value === additionalFeeValue).label
}