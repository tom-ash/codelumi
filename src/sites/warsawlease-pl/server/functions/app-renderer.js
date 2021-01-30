import genericAppRenderer from '../../../shared/server/functions/renderers/generic-app.js'
import App from '../../app/app.js'
import rootReducer from '../../app/functions/root_reducer.js'
import path from 'path'

function appRenderer(initialState) {
  const statsFile = path.resolve('./dist/sites/warsawlease-pl/client/loadable-stats.json')

  return genericAppRenderer({ App, statsFile, rootReducer, initialState })
}

export default appRenderer