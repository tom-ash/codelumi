import genericRequestHandler from '../../../shared/server/functions/handlers/generic-request.js'
import appState from '../../app/constants/app-state.js'
import renderState from '../../shared/constants/routes/renders/state.js'
import tracks from '../../shared/constants/tracks/tracks.js'
import appRenderer from './app-renderer.js'

function handleRequest(req, res) {
  genericRequestHandler({
    req,
    res,
    appState,
    renderState,
    tracks,
    appRenderer
  })
}

export default handleRequest
