import { useContext, useEffect } from "react"
import { ReactReduxContext } from "react-redux"
import { matchStateToRoute } from "./routes/matchers/state-to-route"

export const useStateToRouteMatcher = () => {
  const { store } = useContext(ReactReduxContext)
  const { dispatch } = store

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') matchStateToRoute({ isSSR: true, dispatch })

    onpopstate = () => matchStateToRoute({ isSSR: false, dispatch })
  }, [])
}