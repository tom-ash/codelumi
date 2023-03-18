import React, { useState } from 'react'
import SVG from '../../../../../mapawynajmu-pl/app/components/support/components/svg/svg'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { changeUrl } from '../../../functions/routes/changers/change-url'
import { useStore } from '../../../functions/store/useStore'

export const LangSwitch = () => {
  useStyles(styles)

  const { state, dispatch } = useStore()
  const { app, links } = state
  const { lang } = app

  let plHref: string
  let enHref: string
  const [showLangs, setShowLangs] = useState(false)
  
  const currentPl = links['current/pl']
  const currentEn = links['current/en']

  if (currentPl) {
    plHref = currentPl.href
  }

  if (currentEn) {
    enHref = currentEn.href
  }

  //@ts-ignore
  if (!plHref || !enHref) return null

  const allClassNames = ['all']
  showLangs && allClassNames.push('show')

  const changeLang = (props: any) => {
    const { e, href } = props

    e.preventDefault()

    // @ts-ignore
    window.areListingsObsolete = true

    changeUrl({ href, withScroll: false })
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
