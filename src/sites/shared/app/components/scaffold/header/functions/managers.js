import React from 'react'

export function logoManager({ logo, changeRoute, langHandler }) {
  const title = 'todo'//this.langHandler(ROOT_TITLES)
  const href = '/'//`${CLIENT_URL}/${this.langHandler(ROOT_URLS)}`

  return {
    classNames: { container: '' },
    href,
    // hrefLang: this.langHandler(LANGS),
    title,
    label: logo,
    onClick: () => changeRoute({ href })
  }
}

// export function langManager() {
//   const { changeRoute, getRouteByLang } = this.context
//   const { changeApp, lang } = this.props
//   const invertedLanguage = lang === 'pl' ? 'en' : 'pl'
//   const { url } = getRouteByLang({ lang: invertedLanguage, routes })
//   const href = `${CLIENT_URL}/${url === '/' ? '' : `${url}`}`
  
//   return {
//     classNames: { container: 'header-link lang' },
//     href,
//     label: (
//       <>
//         <SVG name='globe' />
//         {LANG_LABELS[invertedLanguage]}
//       </>
//     ),
//     onClick: () => {
//       saveCookie('lang', invertedLanguage, 'oneYear')
//       changeApp({ lang: invertedLanguage })

//       const href = `${CLIENT_URL}/${url}`

//       changeRoute({ href: href + window.location.search, withoutScroll: true })
//     }
//   }
// }
