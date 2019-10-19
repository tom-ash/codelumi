import { apiUrl } from '../../../../../constants/urls'

export function getRentAmounts() {
  const { area, netRentAmount, changeData } = this.props
  if (!area || !netRentAmount) return

  const params = `?area=${area}&netRentAmount=${netRentAmount}`
  fetch(`${apiUrl}/calculate_rent_amounts${params}`, {
    headers: { 'Content-Type': 'application/json' }
  })
  .then(response => {
    if (response.ok) return response.json()
  })
  .then(json => {
    const {
      netRentAmountPerSqm,
      grossRentAmount,
      grossRentAmountPerSqm
    } = json
    changeData({
      rentNetPerSqm: netRentAmountPerSqm / 100,
      rentGross: grossRentAmount / 100,
      rentGrossPerSqm: grossRentAmountPerSqm / 100
    })
  })
}