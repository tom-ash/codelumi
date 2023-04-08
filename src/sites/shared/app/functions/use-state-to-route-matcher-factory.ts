import { useContext, useEffect } from 'react'
import { ReactReduxContext } from 'react-redux'

// TODO: TS!
export const useStateToRouteMatcherFactory = (matchStateToRoute: any) => {
  return () => {
    const { store } = useContext(ReactReduxContext)
    const { dispatch } = store

    useEffect(() => {
      if (process.env.NODE_ENV === 'development') matchStateToRoute({ isSSR: true, dispatch })

      onpopstate = () => matchStateToRoute({ isSSR: false, dispatch })
    }, [])
  }
}
