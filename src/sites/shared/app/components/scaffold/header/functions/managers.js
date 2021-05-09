import React from 'react'
import getRouteByLang from '../../../../../app/functions/routes/getters/route-by-lang'
import SVG from '../../../support/svg/svg.js'

export function logoManager({ titles, urls, clientUrl, lang, logo, changeRoute, langHandler }) {
  const title = langHandler(titles.ROOT_TITLES)
  const url = langHandler(urls.ROOT_URLS)
  const href = `${clientUrl}/${url === '/' ? '' : url}`
  const hrefLang = lang
  const label = logo
  const onClick = () => changeRoute({ href })

  return { href, hrefLang, title, label, onClick }
}

export function langManager(props) {
  const { routes, clientUrl, render, lang, urlComposites, changeRoute } = props
  const invertedLanguage = lang === 'pl' ? 'en' : 'pl'
  const { url } = getRouteByLang({ routes, render, lang: invertedLanguage, urlComposites })
  const href = `${clientUrl}/${url === '/' ? '' : `${url}`}`
  
  return {
    classNames: { container: 'header-link lang' },
    href,
    label: (
      <>
        <SVG name='globe' />
        {{ en: 'Polski', pl: 'English' }[lang]}
      </>
    ),
    onClick: () => {      
      const href = `${clientUrl}/${url}${window.location.search}`

      changeRoute({ href, withoutScroll: true })
    }
  }
}
