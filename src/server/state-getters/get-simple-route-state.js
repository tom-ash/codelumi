export function getSimpleRouteState(route) {
  switch(route) {
    case '/dodaj-ogloszenie': return { route: { showAnnouncementCreate: true } }
    case '/add-announcement': return { route: { showAnnouncementCreate: true, language: 'en' } }
    case '/zarejestruj': return { route: { showUserCreate: true } }
    case '/sign-up': return { route: { showUserCreate: true, language: 'en' } }
    case '/zaloguj': return { route: { showUserAuthorize: true } }
    case '/sign-in': return { route: { showUserAuthorize: true, language: 'en' } }
    case '/o-serwisie': return { route: { showVisitorAbout: true } }
    case '/about': return { route: { showVisitorAbout: true, language: 'en' } }
    case '/kontakt': return { route: { showVisitorContact: true } }
    case '/contact': return { route: { showVisitorContact: true, language: 'en' } }
    case '/regulamin': return { route: { showVisitorTermsOfService: true } }
    case '/terms-of-service': return { route: { showVisitorTermsOfService: true, language: 'en' } }
    case '/polityka-plikow-cookies': return { route: { showVisitorCookiesPolicy: true } }
    case '/cookies-policy': return { route: { showVisitorCookiesPolicy: true, language: 'en' } }
    case '/polityka-prywatnosci': return { route: { showVisitorPrivacyPolicy: true } }
    case '/privacy-policy': return { route: { showVisitorPrivacyPolicy: true, language: 'en' } }
    case '/ustawienia-prywatnosci': return { route: { showVisitorPrivacySettings: true } }
    case '/privacy-settings': return { route: { showVisitorPrivacySettings: true, language: 'en' } }
    default: return {}
  }
}
