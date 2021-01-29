import { renderApp } from '../../render-app'
import renderIndexAsHtml from '../../../../shared/functions/renderers/index-as-html'
import { VISITOR_TRACK, PAGE_TRACK, PAGE_NOT_FOUND_TRACK } from '../../../shared/constants/tracks/tracks'
import { appState } from '../../../app/constants/app-state'
import { renderState } from '../../../shared/constants/routes/renders/state'

export function sendNotFoundResponse({ res, url, device, visitorState }) {
  const initialState = {
    app: { ...appState, lang: 'pl', device },
    render: { ...renderState, [VISITOR_TRACK]: true, [PAGE_TRACK]: true, [PAGE_NOT_FOUND_TRACK]: true },
    ...visitorState
  }

  const appAsHtml = renderApp(initialState)

  res.status(404).send(
    renderIndexAsHtml({
      url, lang: 'pl', title: 'Not Found', description: 'Not Found', ...appAsHtml
    })
  )
}
