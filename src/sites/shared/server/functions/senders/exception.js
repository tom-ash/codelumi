import indexRenderer from '../renderers'

function exceptionSender({
  exception,
  res, url, device,
  tracks,
  appState, renderState, visitorState,
  appRenderer
}) {
  const { VISITOR_TRACK, PAGE_TRACK, PAGE_NOT_FOUND_TRACK } = tracks
  const initialState = {
    app: { ...appState, lang: 'pl', device },
    render: { ...renderState, [VISITOR_TRACK]: true, [PAGE_TRACK]: true, [PAGE_NOT_FOUND_TRACK]: true },
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
