import { Dispatch } from 'redux'

interface ScreenSizeHandler {
  (args: { dispatch: Dispatch }): void
}

export const screenSizeHandler: ScreenSizeHandler = args => {
  const { dispatch } = args
  const screenWidth = window.screen.width
  const screenHeight = window.screen.height
  const device = (() => {
    if (screenWidth > 1440) return 'largePc'
    if (screenWidth > 1200) return 'mediumPc'
    if (screenWidth > 960) return 'smallPc'
    if (screenWidth > 768) return 'largeTablet'
    if (screenWidth > 480) return 'smallTablet'
    if (screenWidth > 360) return 'largePhone'

    return 'smallPhone'
  })()

  dispatch({ type: 'app', value: { device, screenWidth, screenHeight } })
}
