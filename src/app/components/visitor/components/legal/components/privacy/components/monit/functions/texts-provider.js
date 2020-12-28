import React from 'react'

export function textsProvider(text) {
  const { changeApp } = this.props

  switch (text) {
    case 'cookies':
      return {
        pl: <span>Korzystamy z plików cookies i&nbsp;podobnych technologii w celu zwiększania jakości usług, prowadzenia statystyki oraz&nbsp;dostosowywania treści marketingowych. Więcej informacji znajdziesz w  <u onClick={() => TODO}>Polityce Cookies</u>.</span>,
        en: <span>We use cookies and similar technologies to enhance the quality of services, maintain statistics and adjust marketing content. You will find more information in the <u onClick={() => TODO}>Cookies Policy</u>.</span>
      }
    case 'dataProcessing':
      return {
        pl: <span>Klikając OK wyrażasz zgodę na przetwarzanie Twoich danych osobowych przez nas oraz naszych Zaufanych Partnerów w calach prowadzenia statystyki oraz dostosowywania tresći marketingowych zgodnie z <u onClick={() => TODO}>Polityką Prywatności</u>. Jezeli chcesz nie wyrażać tej zgody lub ograniczyć jej zakres kliknij Ustawienia.</span>,
        en: <span>By clicking OK you grant consent to processing of your personal data by us and our Trusted Partners with the purpose of maintain statistics and adjustment of the marketing content pursuant to the <u onClick={() => TODO}>Privacy Policy</u>. If you wish to not grant that consent and/or limit its extent click Settings.</span>
      }
  }
}