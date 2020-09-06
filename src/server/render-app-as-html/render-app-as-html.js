import React from 'react'
import { renderToString } from 'react-dom/server'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { rootReducer } from '../../app/functions/root_reducer.js'
import StyleContext from 'isomorphic-style-loader/StyleContext'
import App from '../../app/app'

var path = require('path')
import { ChunkExtractor, ChunkExtractorManager } from '@loadable/server'
const statsFile = path.resolve('./dist/server/stats.json')
const extractor = new ChunkExtractor({ statsFile, entrypoints: ["server"] })

export function renderAppAsHtml(initialState) {
  const css = new Set()
  const insertCss = (...styles) => styles.forEach(style => css.add(style._getCss()))
  const store = createStore(rootReducer, initialState)

  const html = renderToString(
    <ChunkExtractorManager extractor={extractor}>
      <Provider store={store}>
        <StyleContext.Provider value={{ insertCss }}>
          <div id='app'>
            <App />
          </div>
        </StyleContext.Provider>
      </Provider>
    </ChunkExtractorManager>
  )

  const preloadedState = store.getState()

  return {
    html,
    css,
    preloadedState
  }
}
