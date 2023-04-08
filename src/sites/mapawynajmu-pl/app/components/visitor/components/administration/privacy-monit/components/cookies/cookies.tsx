import React from 'react'
import { useStore } from '../../../../../../../../../shared/app/functions/store/useStore'
import { changeUrl } from '../../../../../../../../../shared/app/functions/routes/changers/change-url'

export const Cookies = () => {
  const { state } = useStore()
  const { app, links } = state
  const lang = app.lang as Lang
  const { href } = links['visitor/cookies-policy']

  const changeRouteToCookiesPolicy = () => changeUrl({ href })

  const cookies = {
    pl: (
      <p>
        Korzystamy z plików cookies i&nbsp;podobnych technologii w celu zwiększania jakości usług, prowadzenia
        statystyki oraz&nbsp;dostosowywania treści marketingowych. Więcej informacji znajdziesz w{' '}
        <u onClick={changeRouteToCookiesPolicy}>Polityce Cookies</u>.
      </p>
    ),
    en: (
      <p>
        We use cookies and similar technologies to enhance the quality of services, maintain statistics and adjust
        marketing content. You will find more information in the{' '}
        <u onClick={changeRouteToCookiesPolicy}>Cookies Policy</u>.
      </p>
    ),
  }

  return <>{cookies[lang]}</>
}
