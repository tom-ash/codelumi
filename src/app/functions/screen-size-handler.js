export function screenSizeHandler() {
  const width = window.innerWidth
  if (width > 1200) return this.props.changeScreenSize('largePc')
  if (width > 961 && width <= 1200) return this.props.changeScreenSize('smallPc')
  if (width > 768 && width <= 960) return this.props.changeScreenSize('largeTablet')
  if (width > 480 && width <= 768) return this.props.changeScreenSize('smallTablet')
  this.props.changeScreenSize('largePhone')
}
