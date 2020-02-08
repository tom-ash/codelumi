import 'react-app-polyfill/ie9';
import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { rootReducerProvider } from '../app/functions/root_reducer'
import StyleContext from 'isomorphic-style-loader/StyleContext'
import App from '../app/app'

const insertCss = (...styles) => {
  const removeCss = styles.map(style => style._insertCss())
  return () => removeCss.forEach(dispose => dispose())
}

let store = createStore(rootReducerProvider({}))
store.subscribe(() => console.log(store.getState()))

render(
  <StyleContext.Provider value={{ insertCss }}>
    <Provider store={store}>
      <App />
    </Provider>
  </StyleContext.Provider>,
  window.document.getElementById("app")
)
