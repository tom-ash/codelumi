export function onTouchEndHandler() {
  const { disableSLides } = this.props
  
  if (disableSLides) return
  
  this.setState({
    clientX: null,
    afterDrag: true
  })
}
