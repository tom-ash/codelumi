function screenSizeHandler() {
  if (typeof window === 'undefined') return

  const { setApp } = this.props
  const width = window.innerWidth

  if (width > 1200) return setApp({ device: 'largePc' })
  if (width > 960 && width <= 1200) return setApp({ device: 'smallPc' })
  if (width > 768 && width <= 960) return setApp({ device: 'largeTablet' })
  if (width > 480 && width <= 768) return setApp({ device: 'smallTablet' })
  if (width > 360 && width <= 480) return setApp({ device: 'largePhone' })

  setApp({ device: 'smallPhone' })
}

export default screenSizeHandler
