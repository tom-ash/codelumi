import React from 'react'
import { VISITOR_PRIVACY_POLICY_TRACK } from '../../../../../../../../../../shared/constants/tracks/tracks'
import changeRouteWithHref from '../../../../../../../../../functions/routes/changers/route-with-href.js'

export function textsProvider(text) {
  const { lang } = this.props
  const { changeRoute } = this.context
  const track = VISITOR_PRIVACY_POLICY_TRACK
  const changeRouteToPrivacyPolicy = () => changeRouteWithHref({ lang, track, changeRoute })

  switch (text) {
    case 'statistics':
      return {
        pl: <span>Czy zgadzasz się na przetwarzanie Twoich danych osobowych przez Administratora Serwisu, czyli Warsaw Digital Sp.&nbsp;z.&nbsp;o.o., z siedzibą w Warszawie, i jego Zaufanych Partnerów, na zasadach i warunkach przewidzianych w <u onClick={changeRouteToPrivacyPolicy}>Polityce Prywatności</u> w celu prowadzenia statystyki przez Administratora i jego Zaufanych Partnerów?</span>,
        en: <span>Do you agree to processing of your personal data by the Service's Administrator, that is Warsaw Digital Sp.&nbsp;z&nbsp;o.o., with its registered office in Warsaw, and its Trusted Partners, pursuant to the terms and conditions envisioned by the <u onClick={changeRouteToPrivacyPolicy}>Privacy Policy</u>, with the purpose of maintaing statistics by the Administrator and its Trusted Partners?</span>
      }
    case 'marketing':
      return {
        pl: <span>Czy zgadzasz się na przetwarzanie Twoich danych osobowych przez Administratora Serwisu, czyli Warsaw Digital Sp.&nbsp;z.&nbsp;o.o., z siedzibą w Warszawie, i jego Zaufanych Partnerów, na zasadach i warunkach przewidzianych w <u onClick={changeRouteToPrivacyPolicy}>Polityce Prywatności</u> w celu dostosowywani treści marketingowych przez Administratora i jego Zaufanych Partnerów?</span>,
        en: <span>Do you agree to processing of your personal data by the Service's Administrator, that is Warsaw Digital Sp.&nbsp;z&nbsp;o.o., with its registered office in Warsaw, and its Trusted Partners, pursuant to the terms and conditions envisioned by the <u onClick={changeRouteToPrivacyPolicy}>Privacy Policy</u>, with the purpose of adjusting of marketing content by the Administrator and its Trusted Partners?</span>
      }
  }
}
