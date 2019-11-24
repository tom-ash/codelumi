export function screenSizeHandler() {
  const { changeApp } = this.props
  const width = window.innerWidth

  if (width > 1200) return changeApp({ screenSize: 'largePc'})
  if (width > 961 && width <= 1200) return changeApp({ screenSize: 'smallPc'})
  if (width > 768 && width <= 960) return changeApp({ screenSize: 'largeTablet'})
  if (width > 480 && width <= 768) return changeApp({ screenSize: 'smallTablet'})
  
  changeApp({ screenSize: 'largePhone'})
}
