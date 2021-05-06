import 'react-app-polyfill/ie9';
import React from 'react'
import { hydrate } from 'react-dom'
import { loadableReady } from '@loadable/component'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from '../app/functions/root-reducer'
import StyleContext from 'isomorphic-style-loader/StyleContext'
import App from '../app/app'

const insertCss = (...styles) => {
  const removeCss = styles.map(style => style._insertCss())
  return () => removeCss.forEach(dispose => dispose())
}

const preloadedState = window.__PRELOADED_STATE__
delete window.__PRELOADED_STATE__
const store = createStore(rootReducer, preloadedState)

// store.subscribe(() => console.log(store.getState()))

loadableReady(() =>
  hydrate(
    <StyleContext.Provider value={{ insertCss }}>
      <Provider store={store}>
        <App />
      </Provider>
    </StyleContext.Provider>,
    document.getElementById('app')
  )
)
