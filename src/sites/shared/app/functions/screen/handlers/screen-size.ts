import { Dispatch } from 'redux'

interface ScreenSizeHandler {
  (args: { dispatch: Dispatch }): void
}

export const screenSizeHandler: ScreenSizeHandler = args => {
  const { dispatch } = args
  const screenWidth = window.innerWidth
  const screenHeight = window.innerHeight
  const setApp = (value: any) => dispatch({ type: 'app', value })

  const device = (() => {
    if (screenWidth > 1200) return 'largePc'
    if (screenWidth > 960) return 'smallPc'
    if (screenWidth > 768) return 'largeTablet'
    if (screenWidth > 480) return 'smallTablet'
    if (screenWidth > 360) return 'largePhone'

    return 'smallPhone'
  })()

  const minInnerHeight = screenHeight - (screenWidth < 480 ? 208 : 184)

  setApp({ device, screenWidth, screenHeight, minInnerHeight })
}
