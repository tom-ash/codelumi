import React from 'react'
import { renderToString } from 'react-dom/server'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import StyleContext from 'isomorphic-style-loader/StyleContext'
import { ChunkExtractor, ChunkExtractorManager } from '@loadable/server'

function renderAppAsHtml({ App, statsFile, rootReducer, initialState }) {
  const extractor = new ChunkExtractor({ statsFile, entrypoints: ['index'] })
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
  const scriptTags = extractor.getScriptTags()

  return {
    html,
    css,
    preloadedState,
    scriptTags
  }
}

export default renderAppAsHtml
