import fetch from 'node-fetch'
import indexRenderer from '../renderers/index.js'
import exceptionSender from './exception.js'
import svgsParser from '../../../shared/functions/parsers/svgs.js'
import metaDataParser from '../../../shared/functions/parsers/meta-data.js'
import anyNull from '../helpers/any-null.js'

function routeSender({
  res,
  apiUrl, tracks, routeRenders,
  url, route, device,
  appState, renderState, visitorState,
  accessToken,
  appRenderer
}) {
  const { track, lang, initialStateParser } = route

  fetch(apiUrl + `/route_data`, {
    headers: { 'Content-Type': 'application/json', 'Type': 'ssr', 'Route-Url': url, 'Track': track, 'Lang': lang, 'Access-Token': accessToken }
  })
  .then(response => {
    if (response.ok) return response.json()

    throw new Error('Page Not Found')
  })
  .then(jsonResponse => {
    const { metaData: unparsedMetaData, initialState: unparsedInitialState, pageShow, user } = jsonResponse
    const svgs = svgsParser(jsonResponse)
    const metaData = metaDataParser({ ...route, ...unparsedMetaData, lang })
    const app = { ...appState, lang, device, svgs, routeDataSet: true }
    const { visitor: { legal: { privacy: { settings: { statisticsConsent, marketingConsent }}}}} = visitorState
    const renderPrivacyMonit = { 'visitor/privacy-monit': anyNull({ statisticsConsent, marketingConsent }) }
    const render = { ...renderState, ...renderPrivacyMonit, [track]: true, ...routeRenders[track] }
    const residualState = initialStateParser && initialStateParser(unparsedInitialState) || {}
    const page = pageShow ? { show: { data: pageShow } } : {}
    const { authorized, account_type: accountType, first_name: firstName, business_name: businessName, role } = user
    const userState = { user: { authorize: { data: { authorized, accountType, firstName, businessName, admin: role === 'admin' } } } }
    const initialState = { app, render, page, ...visitorState, ...userState, ...residualState }
    const appAsHtml = appRenderer(initialState)
    const status = 200

    res.status(status).send(
      indexRenderer({ url, ...metaData, ...appAsHtml }) 
    )
  })
  .catch(exception => {
    exceptionSender({
      exception,
      res, url, device,
      tracks,
      appState, renderState, visitorState,
      appRenderer
    })
  })
}

export default routeSender
