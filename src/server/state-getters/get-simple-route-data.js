export function getSimpleRouteData(route) {
  switch(route) {
    case '/':
      return {
        routeState: {
          route: {}
        },
        title: 'Mapa wynajmu mieszkań, lokali użytkowych oraz biur w Warszawie | warsawlease.pl'
      }
    case '/dodaj-ogloszenie':
      return {
        routeState: {
          route: {
            showAnnouncementCreate: true
          }
        },
        title: 'Dodaj Bezpłatne Ogłoszenie Wynajmu Nieruchomości w Warszawie | warsawlease.pl'
      }
    case '/add-announcement':
      return {
        routeState: {
          route: {
            showAnnouncementCreate: true,
            language: 'en'
          }
        },
        title: 'Add Free Announcement of Real Estate Lease in Warsaw | warsawlease.pl'
      }
    case '/zarejestruj':
      return {
        routeState: {
          route: {
            showUserCreate: true
          }
        },
        title: 'Zarejestruj | warsawlease.pl'
      }
    case '/sign-up':
      return {
        routeState: {
          route: {
            showUserCreate: true,
            language: 'en'
          }
        },
        title: 'Sign Up | warsawlease.pl'
      }
    case '/zaloguj': return {
      routeState: {
        route: {
          showUserAuthorize: true
        }
      },
      title: 'Zaloguj | warsawlease.pl'
    }
    case '/sign-in':
      return {
        routeState: {
          route: {
            showUserAuthorize: true,
            language: 'en'
          }
        },
        title: 'Sign In | warsawlease.pl'
      }
    case '/o-serwisie':
      return {
        routeState: {
          route: {
            showVisitorAbout: true
          }
        },
        title: 'O Serwisie | warsawlease.pl'
      }
    case '/about':
      return {
        routeState: {
          route: {
            showVisitorAbout: true,
            language: 'en'
          }
        },
        title: 'About | warsawlease.pl'
      }
    case '/kontakt':
      return {
        routeState: {
          route: {
            showVisitorContact: true
          }
        },
        title: 'Kontakt | warsawlease.pl'
      }
    case '/contact':
      return {
        routeState: {
          route: {
            showVisitorContact: true,
            language: 'en'
          }
        },
        title: 'Contact | warsawlease.pl'
      }
    case '/regulamin':
      return {
        routeState: {
          route: { 
            showVisitorTermsOfService: true
          }
        },
        title: 'Regulamin | warsawlease.pl'
      }
    case '/terms-of-service':
      return {
        routeState: {
          route: {
            showVisitorTermsOfService: true,
            language: 'en'
          }
        },
        title: 'Terms of Service | warsawlease.pl'
      }
    case '/polityka-plikow-cookies':
      return {
        routeState: {
          route: {
            showVisitorCookiesPolicy: true
          }
        },
        title: 'Polityka Plików Cookies | warsawlease.pl'
      }
    case '/cookies-policy':
      return {
        routeState: {
          route: {
            showVisitorCookiesPolicy: true,
            language: 'en'
          }
        },
        title: 'Cookies Policy | warsawlease.pl'
      }
    case '/polityka-prywatnosci':
      return {
        routeState: {
          route: {
            showVisitorPrivacyPolicy: true
          }
        },
        title: 'Polityka Prywatności | warsawlease.pl'
      }
    case '/privacy-policy':
      return {
        routeState: {
          route: {
            showVisitorPrivacyPolicy: true,
            language: 'en'
          }
        },
        title: 'Privacy Policy | warsawlease.pl'
      }
    case '/ustawienia-prywatnosci':
      return {
        routeState: {
          route: {
            showVisitorPrivacySettings: true
          }
        },
        title: 'Ustawienia Prywatności | warsawlease.pl'
      }
    case '/privacy-settings':
      return {
        routeState: {
          route: {
            showVisitorPrivacySettings: true,
            language: 'en'
          }
        },
        title: 'Privacy Settings | warsawlease.pl'
      }
    // default: return 404
    default: return {
      routeState: {}
    }
  }
}
