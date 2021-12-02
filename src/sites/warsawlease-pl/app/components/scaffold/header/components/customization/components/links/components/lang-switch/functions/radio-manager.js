import React from 'react'

export function radioManager(props) {
  const { links, changeRoute, lang } = props

  const plHref = links.langs && links.langs.pl || links.currentPl
  const enHref = links.langs && links.langs.en || links.currentEn

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
