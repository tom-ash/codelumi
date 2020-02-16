export function togglePhone() {
  if (typeof window === 'undefined') return

  const { id } = this.props
  const { phone, isMobile } = this.state
  
  if (phone && phone.length > 8) return

  fetch(`${API_URL}/announcement/phone/${id}`, {
    headers: { 'Content-Type': 'application/json' }
  })
  .then(response => {
    if (response.ok) return response.json()
  })
  .then(({ phone }) => {
    if (isMobile) window.location.href=(`tel:${phone}`)
    this.setState({ phone })
  })
}