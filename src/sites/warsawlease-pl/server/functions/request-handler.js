import genericRequestHandler from '../../../shared/server/functions/handlers/generic-request.js'
import routes from '../../shared/constants/routes/routes.js'
import appState from '../../app/constants/app-state.js'
import renderState from '../../shared/constants/routes/renders/state.js'
import routeRenders from '../../shared/constants/routes/renders.js'
import * as tracks from '../../shared/constants/tracks/tracks.js'
import appRenderer from './app-renderer.js'
import ROOT_DOMAIN from '../../shared/constants/domains/root.js'
import CLIENT_URL from '../../shared/constants/urls/client.js'
import API_URL from '../../shared/constants/urls/api.js'

function handleRequest(req, res) {
  if (req.hostname === ROOT_DOMAIN) return res.redirect(`https://www.${ROOT_DOMAIN}${req.originalUrl}`)

  genericRequestHandler({
    req,
    res,
    clientUrl: CLIENT_URL,
    apiUrl: API_URL,
    routes,
    routeRenders,
    tracks,
    appState,
    renderState,
    appRenderer
  })
}

export default handleRequest
