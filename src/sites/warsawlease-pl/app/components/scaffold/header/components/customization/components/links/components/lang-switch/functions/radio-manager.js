import React from 'react'
import buildUrl from '../../../../../../../../../../../shared/functions/builders/url'

export function radioManager(props) {
  const { links, changeRoute, lang } = props
  const plHref = links['current/pl'] && buildUrl({ path: links['current/pl'].path })
  const enHref = links['current/en'] && buildUrl({ path: links['current/en'].path })

  

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
