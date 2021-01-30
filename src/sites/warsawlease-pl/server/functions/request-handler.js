import genericRequestHandler from '../../../shared/server/functions/handlers/generic-request.js'
import routes from '../../shared/constants/routes/routes.js'
import appState from '../../app/constants/app-state.js'
import renderState from '../../shared/constants/routes/renders/state.js'
import tracks from '../../shared/constants/tracks/tracks.js'
import appRenderer from './app-renderer.js'

function handleRequest(req, res) {
  const apiUrl = API_URL

  genericRequestHandler({
    req,
    res,
    apiUrl,
    routes,
    appState,
    renderState,
    tracks,
    appRenderer
  })
}

export default handleRequest
