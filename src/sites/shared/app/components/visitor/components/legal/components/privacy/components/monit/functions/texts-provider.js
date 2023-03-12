import React from 'react'
import { changeUrl } from '../../../../../../../../../functions/routes/changers/route-generic'

export function textsProvider(text, props) {
  const { links, buildUrl } = props
  const cookiesPolicyLinkData = links['visitor/cookies-policy']
  const privacyPolicyLinkData = links['visitor/privacy-policy']
  const cookiesPolicyHref = buildUrl({ path: cookiesPolicyLinkData && cookiesPolicyLinkData.path })
  const privacyPolicyHref = buildUrl({ path: privacyPolicyLinkData && privacyPolicyLinkData.path })
  const changeRouteToCookiesPolicy = () => changeUrl({ href: cookiesPolicyHref })
  const changeRouteToPrivacyPolicy = () => changeUrl({ href: privacyPolicyHref })

  switch (text) {
    case 'cookies':
      return {
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
    case 'dataProcessing':
      return {
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
  }
}
