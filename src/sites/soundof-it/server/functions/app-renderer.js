import genericAppRenderer from '../../../shared/server/functions/renderers/generic-app'
import App from '../../app/app'
import rootReducer from '../../app/functions/root-reducer'
import path from 'path'

function appRenderer(initialState) {
  const statsFile = path.resolve('./dist/sites/soundof-it/client/loadable-stats.json')

  return genericAppRenderer({ App, statsFile, rootReducer, initialState })
}

export default appRenderer
