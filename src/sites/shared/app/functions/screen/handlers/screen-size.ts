import { Dispatch } from 'redux'

interface ScreenSizeHandler {
  (args: { dispatch: Dispatch }): void
}

export const screenSizeHandler: ScreenSizeHandler = args => {
  const { dispatch } = args
  const width = window.innerWidth
  const setApp = (value: any) => dispatch({ type: 'app', value })

  const screenWidth = width

  if (width > 1200) return setApp({ device: 'largePc', screenWidth })
  if (width > 960 && width <= 1200) return setApp({ device: 'smallPc', screenWidth })
  if (width > 768 && width <= 960) return setApp({ device: 'largeTablet', screenWidth })
  if (width > 480 && width <= 768) return setApp({ device: 'smallTablet', screenWidth })
  if (width > 360 && width <= 480) return setApp({ device: 'largePhone', screenWidth })

  setApp({ device: 'smallPhone', screenWidth })
}
