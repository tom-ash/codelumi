import { Dispatch } from 'redux'

interface ScreenSizeHandler {
  (args: { dispatch: Dispatch }): void
}

export const screenSizeHandler: ScreenSizeHandler = args => {
  const { dispatch } = args
  const width = window.innerWidth
  const setApp = (value: any) => dispatch({ type: 'app', value })

  if (width > 1200) return setApp({ device: 'largePc' })
  if (width > 960 && width <= 1200) return setApp({ device: 'smallPc' })
  if (width > 768 && width <= 960) return setApp({ device: 'largeTablet' })
  if (width > 480 && width <= 768) return setApp({ device: 'smallTablet' })
  if (width > 360 && width <= 480) return setApp({ device: 'largePhone' })

  setApp({ device: 'smallPhone' })
}
