import React from 'react'
import routes from '../../../../../../../../../../../shared/constants/routes/routes.js'
import CLIENT_URL from '../../../../../../../../../../../shared/constants/urls/client.js'
import getRouteByLang from '../../../../../../../../../../../../shared/app/functions/routes/getters/route-by-lang.js'

export function radioManager(props) {
  const { changeRoute, render, lang, urlComposites } = props
  const { url: plUrl } = getRouteByLang({ routes, render, lang: 'pl', urlComposites })
  const { url: enUrl } = getRouteByLang({ routes, render, lang: 'en', urlComposites })

  return {
    name: 'lang-switch',
    classNames: { container: 'lang-radio-input'},
    checked: lang === 'pl' ? 'pl' : 'en',
    radios: [
      {
        value: 'pl',
        label: <a href={plUrl} onClick={(e) => e.preventDefault()} className='pl-flag' />
      },
      {
        value: 'en',
        label: <a href={enUrl} onClick={(e) => e.preventDefault()}  className='en-flag' />
      }
    ],
    onClick: value => {
      const href = `${CLIENT_URL}/${value === 'pl' ? plUrl : enUrl}`

      changeRoute({ href })
    }
  }
}
