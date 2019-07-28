import React from 'react'

export function textsProvider(text) {
  switch (text) {
    case 'cookies':
      return {
        polish: <span>W niniejszym Serwisie korzystamy z plików cookies i podobnych technologii, aby&nbsp;zapewnić bezpieczeństwo i&nbsp;prawidłowe funkcjonowanie niniejszego serwisu, jak&nbsp;również w&nbsp;celu prowadzenia statystyki i&nbsp;dostosowywania treści marketingowych. Więcej informacji możesz znaleźć w naszej <u>Polityce Plików Cookies</u>.</span>,
        english: <span>We use cookies and similar technologies to ensure security and proper functioning of this service, as well as to maintain statistics and adjust marketing content. You can find my more information with that regard in our <u>Cookies and Similar Technologies Policy</u>.</span>
      }
    case 'dataProcessing':
      return {
        polish: <span>Klikając przycisk 'Zgadzam się' wyrażasz zgodę na przetwarzanie Twoich danych osobowych przez nas oraz naszych zaufanych partnerów w calach rozszerzenia funkcjonalności niniejszego serwisu, prowadzenia statystyki oraz dostosowywania tresći marketingowych zgodnie z naszą <u>Polityką Prywatności</u>. Wyrażenie tej zgody jest dobrowolne i mozesz ją w każdej chwili wycofać lub ograniczyć jej zakres, co pozostaje jednakże bez wpływu na dotychczasowe przetwarzanie. Jezeli chcesz korzystać z&nbsp;niniejszego serwisu bez wyrażenia tej zgody lub chcesz ograniczyć jej zakres przejdź do <u onClick={() => this.changeRoute(null, 'privacySettings')}>Ustawień Prywatności</u>.</span>,
        english: <span>Through clicking 'I Agree' you grant your consent to processing of your personal data by us and our trusted partners wit the purposes of enhancing functionality of this service, maintaining statists and adjusting marketing contant pursuant to our <u>Privacy Policy</u>. Granting of that consent is voluntary and, at any time, you can revoke the consent or limit its extent, which hovever does not affect past processing. If you wish to use this service without granting that consent or you wish to limit its extent visit <u onClick={() => this.changeRoute(null, 'privacySettings')}>Privacy Settings</u>.</span>
      }
  }
}