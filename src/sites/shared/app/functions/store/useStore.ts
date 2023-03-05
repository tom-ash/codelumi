import { ReactReduxContext } from 'react-redux'
import { useState, useEffect, useContext } from 'react'

export const useStore = () => {
  const { store } = useContext(ReactReduxContext)
  const { getState, dispatch, subscribe } = store
  const [state, setState] = useState(getState())

  useEffect(() => subscribe(() => setState(getState())))
  
  return { state, dispatch }
}
