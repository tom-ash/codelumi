import React from 'react'
import { useStore } from '../../../../../../../../../shared/app/functions/store/useStore'
import { changeUrl } from '../../../../../../../../../shared/app/functions/routes/changers/change-url'

export const DataProcessing = () => {
  const { state } = useStore()
  const { app, links } = state
  const lang = app.lang as Lang
  const { href } = links['visitor/privacy-policy']

  const changeRouteToPrivacyPolicy = () => changeUrl({ href })

  const cookies = {
    pl: (
      <p>
        Klikając OK wyrażasz zgodę na przetwarzanie Twoich danych osobowych przez nas oraz naszych Zaufanych
        Partnerów w calach prowadzenia statystyki oraz dostosowywania tresći marketingowych zgodnie z{' '}
        <u onClick={changeRouteToPrivacyPolicy}>Polityką Prywatności</u>. Jezeli chcesz nie wyrażać tej zgody lub
        ograniczyć jej zakres kliknij Ustawienia.
      </p>
    ),
    en: (
      <p>
        By clicking OK you grant consent to processing of your personal data by us and our Trusted Partners with the
        purpose of maintain statistics and adjustment of the marketing content pursuant to the{' '}
        <u onClick={changeRouteToPrivacyPolicy}>Privacy Policy</u>. If you wish to not grant that consent and/or
        limit its extent click Settings.
      </p>
    ),
  }
  
  return (
    <>
      {cookies[lang]}
    </>
  )
}
