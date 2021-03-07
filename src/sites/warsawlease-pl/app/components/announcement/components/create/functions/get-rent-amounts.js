import API_URL from '../../../../../../shared/constants/urls/api'

export function getRentAmounts() {
  const { category, area, netRentAmount, changeData } = this.props
  if (!area || !netRentAmount) return

  const params = `?area=${area}&category=${category}&netRentAmount=${netRentAmount}`
  fetch(`${API_URL}/calculate_rent_amounts${params}`, {
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
      netRentAmountPerSqm: netRentAmountPerSqm,
      grossRentAmount: grossRentAmount,
      grossRentAmountPerSqm: grossRentAmountPerSqm
    })
  })
}
