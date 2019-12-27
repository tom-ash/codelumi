export function screenSizeHandler() {
  const { changeApp } = this.props
  const width = window.innerWidth

  if (width > 1200) return changeApp({ device: 'largePc'})
  if (width > 961 && width <= 1200) return changeApp({ device: 'smallPc'})
  if (width > 768 && width <= 960) return changeApp({ device: 'largeTablet'})
  if (width > 480 && width <= 768) return changeApp({ device: 'smallTablet'})
  
  changeApp({ device: 'largePhone'})
}
