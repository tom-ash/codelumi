import React from 'react'
import routes from '../../../../../../../../../../../shared/constants/routes/routes.js'
import CLIENT_URL from '../../../../../../../../../../../shared/constants/urls/client.js'
import getRouteByLang from '../../../../../../../../../../../../shared/app/functions/routes/getters/route-by-lang.js'

export function radioManager(props) {
  const { links, changeRoute, render, lang, urlComposites } = props
  const { url: plUrl } = getRouteByLang({ routes, render, lang: 'pl', urlComposites })
  const { url: enUrl } = getRouteByLang({ routes, render, lang: 'en', urlComposites })
  const plHref = links.currentPl || `${CLIENT_URL}/${plUrl == '/' ? '' : plUrl}`
  const enHref = links.currentEn || `${CLIENT_URL}/${enUrl}`

  return {
    name: 'lang-switch',
    classNames: { container: 'lang-radio-input'},
    checked: lang === 'pl' ? 'pl' : 'en',
    radios: [
      {
        value: 'pl',
        label: <a href={plHref} onClick={(e) => e.preventDefault()} className='pl-flag' />
      },
      {
        value: 'en',
        label: <a href={enHref} onClick={(e) => e.preventDefault()}  className='en-flag' />
      }
    ],
    onClick: value => {
      const href = value == 'pl' ? plHref : enHref

      changeRoute({ href, withoutScroll: true })
    }
  }
}
