import React from 'react'
import routes from '../../../../../../../../../../../shared/constants/routes/routes.js'
import CLIENT_URL from '../../../../../../../../../../../shared/constants/urls/client.js'
import getRouteByRender from '../../../../../../../../../../../../shared/app/functions/routes/getters/route-by-render.js'

export function radioManager(props) {
  const { changeRoute, render, lang } = props
  const invertedLanguage = lang === 'pl' ? 'en' : 'pl'
  const route = getRouteByRender({ routes, render, lang: invertedLanguage })
  const href = route ? `${CLIENT_URL}/${route.url === '/' ? '' : route.url}` : null

  return {
    name: 'lang-switch',
    classNames: { container: 'lang-radio-input'},
    checked: lang === 'pl' ? 'pl' : 'en',
    radios: [
      { value: 'pl', label: <div className='pl-flag' /> },
      { value: 'en', label: <div className='en-flag' /> }
    ],
    onClick: value => {
      // TODO: Base on value.
      changeRoute({ href })
    }
  }
}
