import React from 'react'
import { renderToString } from 'react-dom/server'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { rootReducerProvider } from '../../app/functions/root_reducer.js'
import StyleContext from 'isomorphic-style-loader/StyleContext'
import App from '../../app/app'

export function renderAppAsHtml(initialState) {
  const css = new Set()
  const insertCss = (...styles) => styles.forEach(style => css.add(style._getCss()))
  const store = createStore(rootReducerProvider(initialState))

  const html = renderToString(
    <Provider store={store}>
      <StyleContext.Provider value={{ insertCss }}>
        <div id='app'>
          <App />
        </div>
      </StyleContext.Provider>
    </Provider>
  )

  const preloadedState = store.getState()

  return {
    html,
    css,
    preloadedState
  }
}
