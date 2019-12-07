import React from 'react'

export function textsProvider(text) {
  const { changeApp } = this.props

  switch (text) {
    case 'cookies':
      return {
        polish: <span>W Serwisie korzystamy z plików cookies i podobnych technologii w celu świadczenia najwyższej jakości usług, prowadzenia statystyki oraz&nbsp;dostosowywania treści marketingowych. Więcej informacji znajdziesz w  <u onClick={() => changeApp({ showVisitorCookiesPolicy: true })}>Polityce Cookies</u>.</span>,
        english: <span>In this Service we use cookies and similar technologies to render services of the highest quality, maintain statistics and adjust marketing content. You will find more information in the <u onClick={() => changeApp({ showVisitorCookiesPolicy: true })}>Cookies Policy</u>.</span>
      }
    case 'dataProcessing':
      return {
        polish: <span>Klikając OK wyrażasz zgodę na przetwarzanie Twoich danych osobowych przez nas oraz naszych Zaufanych Partnerów w calach prowadzenia statystyki oraz dostosowywania tresći marketingowych zgodnie z <u onClick={() => changeApp({ showVisitorPrivacyPolicy: true })}>Polityką Prywatności</u>. Jezeli chcesz nie wyrażać tej zgody lub ograniczyć jej zakres kliknij Ustawienia.</span>,
        english: <span>By clicking OK you grant consent to processing of your personal data by us and our Trusted Partners with the purpose of maintain statistics and adjustment of the marketing content pursuant to the <u onClick={() => changeApp({ showVisitorPrivacyPolicy: true })}>Privacy Policy</u>. If you wish to not grant that consent and/or limit its extent click Settings.</span>
      }
  }
}