import { apiUrl } from '../../../constants/urls'

export function viewAnnouncement(id) {
  if (this.props.venue === 'list') return
  let views = sessionStorage.getItem('views');
  if (!views) views = ''
  if (views.indexOf(id) !== -1) return
  sessionStorage.setItem('views', `${views},${id}`);
  fetch(`${apiUrl}/announcements/view/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
