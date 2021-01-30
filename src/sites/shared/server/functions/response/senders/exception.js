import indexRenderer from '../../renderers'

export function exceptionSender({ exception, res, url, device, appRenderer, appState, visitorState }) {
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
