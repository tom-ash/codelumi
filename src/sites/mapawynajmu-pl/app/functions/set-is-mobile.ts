import { Dispatch } from "redux"

export const setIsMobile = (dispatch: Dispatch) => {
  const isMobile = /Android|BlackBerry|IEMobile|Opera Mini|iPad|iPhone|iPod|webOS/i.test(navigator.userAgent)

  dispatch({ type: 'app', value: { isMobile } })
}
