import API_URL from '../../../../shared/constants/urls/api.js'

export function markListingAsViewed(id) {
  let views = localStorage.getItem('views')

  if (!views) views = ''
  if (views.indexOf(id) !== -1) return
  localStorage.setItem('views', `${views},${id}`)

  fetch(`${API_URL}/announcement/update/views/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
  })
}
