import indexRenderer from '../renderers'

function exceptionSender({
  exception,
  res, url, device,
  appState, visitorState,
  appRenderer
}) {
  const initialState = {
    app: { ...appState, routeSynced: true, lang: 'pl', device },
    // render: { [VISITOR_TRACK]: true, [PAGE_TRACK]: true, [PAGE_NOT_FOUND_TRACK]: true },
    ...visitorState
  }

  const appAsHtml = appRenderer(initialState)

  res.status(404).send(
    indexRenderer({
      url, lang: 'pl', title: 'Not Found', description: 'Not Found', ...appAsHtml
    })
  )
}

export default exceptionSender
