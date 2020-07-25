export function onMouseUpHandler(e) {
  const { disableSLides } = this.props
  
  if (disableSLides) return

  e.stopPropagation()
  e.preventDefault()

  this.slider.current.removeEventListener('mousemove', this.onMouseMoveHandler)
  this.setState({ afterDrag: true })
}
