import { apiUrl } from '../../../../../constants/urls'

export function getRentAmounts() {
  const { area, netRentAmount, changeData } = this.props
  if (!area || !netRentAmount) return

const params = `?area=${area}&net_rent_amount=${netRentAmount}`
  fetch(`${apiUrl}/calculate_rent_amounts${params}`, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) return response.json()
  })
  .then(json => {
    const {
      net_rent_amount_per_sqm,
      gross_rent_amount,
      gross_rent_amount_per_sqm
    } = json

    changeData({
      rentNetPerSqm: net_rent_amount_per_sqm / 100,
      rentGross: gross_rent_amount / 100,
      rentGrossPerSqm: gross_rent_amount_per_sqm / 100
    })
  })
}