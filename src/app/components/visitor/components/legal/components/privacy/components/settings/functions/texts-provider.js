import React from 'react'

export function textsProvider(text) {
  const { changeApp } = this.props
  const showPrivacyPolicy = () => changeApp({ showVisitorPrivacyPolicy: true, showVisitorPrivacySettings: false })

  switch (text) {
    case 'statistics':
      return {
        polish: <span>Czy zgadzasz się na przetwarzanie Twoich danych osobowych przez Administratora Serwisu, czyli Warsaw Digital Sp.&nbsp;z.&nbsp;o.o., i jej Zaufanych Partnerów, na zasadach i warunkach przewidzianych w <u onClick={showPrivacyPolicy}>Polityce Prywatności</u> w celu prowadzenia statystyki przez Administratora.</span>,
        english: <span>Do you agree to processing of your personal data by the Service's Administrator, that is Warsaw Digital Sp.&nbsp;z&nbsp;o.o., and its Trusted Partners, pursuant to the terms and conditions envisioned by the <u onClick={showPrivacyPolicy}>Privacy Policy</u>, with the purpose of maintaing statistics by the Administrator.</span>
      }
    case 'marketing':
      return {
        polish: <span>Czy zgadzasz się na przetwarzanie Twoich danych osobowych przez Administratora Serwisu, czyli Warsaw Digital Sp.&nbsp;z.&nbsp;o.o., i jej Zaufanych Partnerów, na zasadach i warunkach przewidzianych w <u onClick={showPrivacyPolicy}>Polityce Prywatności</u> w celu dostosowywani treści marketingowych.</span>,
        english: <span>Do you agree to processing of your personal data by the Service's Administrator, that is Warsaw Digital Sp.&nbsp;z&nbsp;o.o., and its Trusted Partners, pursuant to the terms and conditions envisioned by the <u onClick={showPrivacyPolicy}>Privacy Policy</u>, with the purpose of adjusting of marketing content.</span>
      }
  }
}
