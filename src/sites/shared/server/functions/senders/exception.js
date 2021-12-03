import indexRenderer from '../renderers'

function exceptionSender({
  exception,
  res, url, device,
  appState, visitorState,
  appRenderer
}) {
  const initialState = {
    app: { ...appState, routeSynced: true, lang: 'pl', device },
    render: {
      visitor: true,
      page: true,
      'page/not-found': true
    },
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
