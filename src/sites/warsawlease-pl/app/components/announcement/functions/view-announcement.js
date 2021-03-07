import API_URL from '../../../../shared/constants/urls/api.js'

export function viewAnnouncement(id) {
  let views = sessionStorage.getItem('views')
  if (!views) views = ''
  if (views.indexOf(id) !== -1) return
  sessionStorage.setItem('views', `${views},${id}`)
  
  fetch(`${API_URL}/announcements/view/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
