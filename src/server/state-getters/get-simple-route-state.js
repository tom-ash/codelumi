export function getSimpleRouteState(route) {
  switch(route) {
    case '/dodaj_ogloszenie': return { route: { showAnnouncementCreate: true } }
    case '/add_announcement': return { route: { showAnnouncementCreate: true, language: 'en' } }
    case '/zarejestruj': return { route: { showUserCreate: true } }
    case '/sign_up': return { route: { showUserCreate: true, language: 'en' } }
    case '/zaloguj': return { route: { showUserAuthorize: true } }
    case '/sign_in': return { route: { showUserAuthorize: true, language: 'en' } }
    case '/o_serwisie': return { route: { showVisitorAbout: true } }
    case '/about': return { route: { showVisitorAbout: true, language: 'en' } }
    case '/kontakt': return { route: { showVisitorContact: true } }
    case '/contact': return { route: { showVisitorContact: true, language: 'en' } }
    case '/regulamin': return { route: { showVisitorTermsOfService: true } }
    case '/terms_of_service': return { route: { showVisitorTermsOfService: true, language: 'en' } }
    case '/polityka_plikow_cookies': return { route: { showVisitorCookiesPolicy: true } }
    case '/cookies_policy': return { route: { showVisitorCookiesPolicy: true, language: 'en' } }
    case '/polityka_prywatnosci': return { route: { showVisitorPrivacyPolicy: true } }
    case '/privacy_policy': return { route: { showVisitorPrivacyPolicy: true, language: 'en' } }
    case '/ustawienia_prywatnosci': return { route: { showVisitorPrivacySettings: true } }
    case '/privacy_settings': return { route: { showVisitorPrivacySettings: true, language: 'en' } }
    default: return {}
  }
}
