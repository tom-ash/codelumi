import React, { useState } from 'react'
import useStyles from 'isomorphic-style-loader/useStyles'
import styles from './styles/styles.scss'
import SVG from '../../../../../../../../support/components/svg/svg'
import buildUrl from '../../../../../../../../../../shared/functions/builders/url'

interface LangSwichProps {
  links: {
    'current/pl': { path: string, title: string },
    'current/en': { path: string, title: string }
  },
  lang: string,
  buildUrl: (props: object) => void,
  changeRoute: (props: object) => void
}

const LangSwich = (props: LangSwichProps) => {
  useStyles(styles)

  let plHref: string
  let enHref: string
  const { lang } = props
  const [showLangs, setShowLangs] = useState(false)
  const { links, changeRoute } = props
  const currentPl = links['current/pl']
  const currentEn = links['current/en']

  if (currentPl) {
    const currentPlPath = currentPl.path
    console.log(currentPlPath)
    if (currentPlPath === null) return null

    // @ts-ignore
    plHref = buildUrl({ path: currentPlPath })
  }

  if (currentEn) {
    const currentEnPath = currentEn.path
    console.log(currentEnPath)
    if (currentEnPath === null) return null

    // @ts-ignore
    enHref = buildUrl({ path: links['current/en'].path })
  }

  const allClassNames = ['all']
  showLangs && allClassNames.push('show')

  const changeLang = (props: any) => {
    const { e, href } = props

    e.preventDefault()

    changeRoute({ href, withoutScroll: true })
    setShowLangs(false)
  }
  
  return (
    <div className='lang-switch'>
      <div
        className='current'
        onClick={() => setShowLangs(!showLangs)}
      >
        {/* @ts-ignore */}
        {lang} <SVG name='caretDown' />
      </div>
      {showLangs && (
        <div
          className='cover'
          onClick={() => setShowLangs(false)}
        />
      )}
      <div className={allClassNames.join(' ')}>
        <a href={plHref} onClick={(e) => changeLang({ e, href: plHref })}>PL</a>
        <a href={enHref} onClick={(e) => changeLang({ e, href: enHref })}>EN</a>
      </div>
    </div>
  )
}

export default LangSwich