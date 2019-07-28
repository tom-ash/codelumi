let location_based_apiUrl
if (window.location.href.includes('localhost')) {
  location_based_apiUrl = 'http://localhost:3001'
} else {
  location_based_apiUrl = 'https://warsawleaseserver.herokuapp.com'
}
export const apiUrl = location_based_apiUrl