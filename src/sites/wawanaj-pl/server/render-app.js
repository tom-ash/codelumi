import renderAppAsHtml from '../../shared/functions/renderers/app-as-html.js'
import App from '../app/app.js'
import rootReducer from '../app/functions/root_reducer.js'
import path from 'path'

export function renderApp(initialState) {
  const statsFile = path.resolve('./dist/sites/wawanaj-pl/client/loadable-stats.json')

  return renderAppAsHtml({ App, statsFile, rootReducer, initialState })
}
