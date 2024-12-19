// import { sendAnalyticsEvent } from '../../../../src copy/sites/mapawynajmu-pl/app/functions/google-analytics/send-analytics-event'
// import API_URL from '../../../../src copy/sites/mapawynajmu-pl/shared/constants/urls/api'

// export function togglePhone() {
//   if (typeof window === 'undefined') return

//   const { id } = this.props
//   const { phone } = this.state

//   if (phone && phone.length > 8) return

//   sendAnalyticsEvent({
//     eventCategory: 'Announcement Tile',
//     eventAction: 'Phone Toggle Click',
//     eventLabel: id,
//   })

//   fetch(`${API_URL}/announcement/get-phone-number/${id}`, {
//     headers: { 'Content-Type': 'application/json' },
//   })
//     .then(response => {
//       if (response.ok) return response.json()
//     })
//     .then(phone => {
//       this.setState({ fullPhone: phone.replace('+48 ', '').replace(/(.{3})/g, '$1 ') })
//     })
// }
