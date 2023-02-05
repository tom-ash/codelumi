import React, { useState } from 'react'
import SVG from '../../../../../mapawynajmu-pl/app/components/support/components/svg/svg'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'

interface LangSwitchProps {
  links: {
    'current/pl': { path: string; title: string }
    'current/en': { path: string; title: string }
  }
  lang: string
  buildUrl: BuildUrl
  changeRoute: ChangeRoute
}

export const LangSwitch = (props: LangSwitchProps) => {
  useStyles(styles)

  let plHref: string
  let enHref: string
  const [showLangs, setShowLangs] = useState(false)
  const { lang, links, buildUrl, changeRoute } = props
  const currentPl = links['current/pl']
  const currentEn = links['current/en']

  if (currentPl) {
    const currentPlPath = currentPl.path
    if (currentPlPath === null) return null

    plHref = buildUrl({ path: currentPlPath })
  }

  if (currentEn) {
    const currentEnPath = currentEn.path
    if (currentEnPath === null) return null

    enHref = buildUrl({ path: links['current/en'].path })
  }

  const allClassNames = ['all']
  showLangs && allClassNames.push('show')

  const changeLang = (props: any) => {
    const { e, href } = props

    e.preventDefault()

    // @ts-ignore
    window.areListingsObsolete = true

    changeRoute({ href, withoutScroll: true })
    setShowLangs(false)
  }

  const currentClasses = ['current']
  if (showLangs) currentClasses.push('open')

  return (
    <div className='lang-switch'>
      <div
        className={currentClasses.join(' ')}
        onClick={() => setShowLangs(!showLangs)}
      >
        {/* @ts-ignore */}
        {lang} <SVG name='chevron' />
      </div>
      {showLangs && (
        <div
          className='cover'
          onClick={() => setShowLangs(false)}
        />
      )}
      <div className={allClassNames.join(' ')}>
        {/* @ts-ignore */}
        <a
          // @ts-ignore
          href={plHref}
          onClick={e => changeLang({ e, href: plHref })}
        >
          PL
        </a>
        {/* @ts-ignore */}
        <a
          // @ts-ignore
          href={enHref}
          onClick={e => changeLang({ e, href: enHref })}
        >
          EN
        </a>
      </div>
    </div>
  )
}
