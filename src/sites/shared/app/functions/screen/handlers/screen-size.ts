import { Dispatch } from 'redux'

interface ScreenSizeHandler {
  (args: { dispatch: Dispatch }): void
}

export const screenSizeHandler: ScreenSizeHandler = args => {
  const { dispatch } = args
  const screenWidth = window.innerWidth
  const screenHeight = window.innerHeight
  const setApp = (value: any) => dispatch({ type: 'app', value })

  const minInnerHeight = screenHeight - 192

  if (screenWidth > 1200) return setApp({ device: 'largePc', screenWidth, screenHeight, minInnerHeight })
  if (screenWidth > 960 && screenWidth <= 1200) return setApp({ device: 'smallPc', screenWidth, screenHeight, minInnerHeight })
  if (screenWidth > 768 && screenWidth <= 960) return setApp({ device: 'largeTablet', screenWidth, screenHeight, minInnerHeight })
  if (screenWidth > 480 && screenWidth <= 768) return setApp({ device: 'smallTablet', screenWidth, screenHeight, minInnerHeight })
  if (screenWidth > 360 && screenWidth <= 480) return setApp({ device: 'largePhone', screenWidth, screenHeight, minInnerHeight })

  setApp({ device: 'smallPhone', screenWidth, screenHeight })
}
