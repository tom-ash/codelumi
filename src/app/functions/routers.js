import { instantScroll } from './scrollers/instant-scroll'

export function changeRoute(e, route, parameter) {
  if (e) e.preventDefault()
  const languageHandler = (polishVersion, englishVersion) => this.props.language === 'polish' ? polishVersion : englishVersion
  let newPlace
  let newPath
  const routeSetter = (route) => {
    newPlace = languageHandler(route.polishPlace, route.EnglishPlace)
    newPath = languageHandler(route.polishPath, route.englishPath)
    history.pushState({currentPlace: newPlace}, {}, newPath)
    this.props.changePath(newPath)
    instantScroll()
  }
  if (route && /^\d+$/.test(route.slice(1))) {
    window.scroll(0, 0);
    history.pushState({currentPlace: 'Main Page'}, {}, route)
    this.setState({showAnnouncement: true})
  } else {
    switch (route) {
      case '/':
        routeSetter({
          polishPlace: 'Strona Główna',
          englishPlace: 'Main Page',
          polishPath: '/',
          englishPath:'/'
        })
        break;
      case 'announcementShow':
        routeSetter({
          polishPlace: `Ogłoszenie ${parameter}`,
          englishPlace: `Announcement ${parameter}`,
          polishPath: `/${parameter}`,
          englishPath: `/${parameter}`
        })
        break;
      case 'announcementEditing':
        routeSetter({
          polishPlace: 'Edytowanie Ogłoszenia',
          englishPlace: 'Announcement Editing',
          polishPath: `/edytowanie_ogloszenia/${parameter}`,
          englishPath: `/announcement_editing/${parameter}`
        })
        break;
      // case 'searchResults':
      //   routeSetter({
      //     polishPlace: 'Wyniki wyszukiwania',
      //     englishPlace: 'Search Results',
      //     polishPath: `/wyniki_wyszukiwania${parameter}`,
      //     englishPath: `/search_results${parameter}`
      //   })
      //   break;
      case 'addAnnouncement':
        routeSetter({
          polishPlace: 'Dodaj ogłoszenie',
          englishPlace: 'Add announcement',
          polishPath: '/dodaj_ogloszenie',
          englishPath:'/add_announcement'
        })
        break;
      // case 'signUp':
      //   routeSetter({
      //     polishPlace: 'Zarejestru',
      //     englishPlace: 'Sign up',
      //     polishPath: '/zarejestruj',
      //     englishPath:'/signup'
      //   })
      //   break;
      // case 'signIn':
      //   routeSetter({
      //     polishPlace: 'Zaloguj',
      //     englishPlace: 'Sign in',
      //     polishPath: '/zaloguj',
      //     englishPath:'/signin'
      //   })
      //   break;
      case 'myAccount':
        routeSetter({
          polishPlace: 'Konto',
          englishPlace: 'Account',
          polishPath: '/mojekonto',
          englishPath:'/myaccount'
        })
        break;
      case 'myAnnouncements':
        routeSetter({
          polishPlace: 'Moje ogłoszenia',
          englishPlace: 'My Announcements',
          polishPath: '/mojekonto/mojeogloszenia',
          englishPath:'/myaccount/myannouncements'
        })
        break;
      // case 'phoneVerify':
      //   routeSetter({
      //     polishPlace: 'Weryfikacja numeru telefonu',
      //     englishPlace: 'Phone Number Verification',
      //     polishPath: '/weryfikacja_numeru_telefonu',
      //     englishPath: '/phone_number_verification'
      //   })
      //   break;
      // case 'myAccountCard':
      //   routeSetter({
      //     polishPlace: 'Edycja wizytówki',
      //     englishPlace: 'Card Editing',
      //     polishPath: '/mojekonto/wizytowka',
      //     englishPath:'/myaccount/card'
      //   })
      //   break;
      // case 'resetpassword':
      //   newPlace = languageHandler('Reset hasła', 'Reset password')
      //   newPath = languageHandler('/resethasla', '/resetpassword')
      //   this.props.changePath(newPath)
      //   history.pushState({currentPlace: newPlace}, {}, newPath)
      //   break;
      case 'myAccountSettings':
        routeSetter({
          polishPlace: 'Moje Konto / Ustawienia',
          englishPlace: 'My Account / Settings',
          polishPath: '/mojekonto/ustawienia',
          englishPath:'/myaccount/settings'
        })
        break;
      case 'about':
        routeSetter({
          polishPlace: 'O nas',
          englishPlace: 'About',
          polishPath: '/o_serwisie',
          englishPath:'/about'
        })
        break;
      case 'contact':
        routeSetter({
          polishPlace: 'Kontakt',
          englishPlace: 'Contact',
          polishPath: '/kontakt',
          englishPath:'/contact'
        })
        break;
      case 'termsOfService':
        routeSetter({
          polishPlace: 'Regulamin',
          englishPlace: 'Terms Of Service',
          polishPath: '/regulamin',
          englishPath:'/terms_of_service'
        })
        break;
      case 'cookiesPolicy':
        routeSetter({
          polishPlace: 'Polityka Plików Cookies',
          englishPlace: 'Cookies Policy',
          polishPath: '/polityka_plikow_cookies',
          englishPath:'/cookies_policy'
        })
        break;
      case 'privacyPolicy':
        routeSetter({
          polishPlace: 'Polityka Prywatności',
          englishPlace: 'Privacy Policy',
          polishPath: '/polityka_prywatnosci',
          englishPath:'/privacy_policy'
        })
        break;
      case 'privacySettings':
        routeSetter({
          polishPlace: 'Ustawienia Prywatności',
          englishPlace: 'Privacy Settings',
          polishPath: '/ustawienia_prywatnosci',
          englishPath:'/privacy_settings'
        })
        break;
      default:
        break
    }
  }
}

const userCreatePaths =        ['/signup',
                                '/zarejestruj']
const userAuthorizePaths =     ['/signin',
                                '/zaloguj']                
const userShowPaths =          ['/mojekonto',
                                '/myaccount']
const userEditPaths =          ['/signin',
                                '/logowanie',
                                '/myaccount',
                                '/mojekonto',
                                '/mojekonto/ustawienia',
                                '/myaccount/settings',
                                '/resetpassword',
                                '/resethasla',
                                '/weryfikacja_numeru_telefonu',
                                '/phone_number_verification',
                                '/myaccount/card',
                                '/mojekonto/wizytowka']
const announcementCreatePaths = ['/add_announcement',
                                 '/dodaj_ogloszenie']
const announcementIndexPaths = ['/search_results',
                                '/wyniki_wyszukiwania',
                                '/mojekonto/mojeogloszenia',
                                '/myaccount/myannouncements']                   
const userPaths = [ ...userEditPaths, ...userAuthorizePaths, ...userCreatePaths, ...userShowPaths ]

export function checkRoute(route) {
  const path = this.props.path.toLowerCase()
  let result
  switch (route) {
    case 'about':
      return checkRouteHelper(path, [ '/o_serwisie', '/about' ])
    case 'contact':
      return checkRouteHelper(path, [ '/kontakt', '/contact' ])
    case 'privacyMonit':
      return !checkRouteHelper(path, [ '/ustawienia_prywatnosci', '/privacy_settings' ])
    case 'visitorTermsOfService':
      return checkRouteHelper(path, [ '/regulamin', '/terms_of_service' ])
    case 'cookiesPolicy':
      return checkRouteHelper(path, [ '/polityka_plikow_cookies', '/cookies_policy' ])
    case 'privacyPolicy':
      return checkRouteHelper(path, [ '/polityka_prywatnosci', '/privacy_policy' ])
    case 'privacySettings':
      return checkRouteHelper(path, [ '/ustawienia_prywatnosci', '/privacy_settings' ])
    case 'user':
      return checkRouteHelper(path, userPaths)
    case 'announcementCreate':
      return checkRouteHelper(path, announcementCreatePaths)
    case 'announcementIndex':
      if (path == '/') return true
      result = false
      announcementIndexPaths.map(indexPath => {
        if (path.indexOf(indexPath) !== -1) result = true
      })
      return result
    case 'announcementEditing':
      result = false;
      (['/edytowanie_ogloszenia/', '/announcement_editing/']).map(indexPath => {
        if (path.indexOf(indexPath) != -1) {
          result = true
        }
      })
      return result
    case 'phoneVerify':
      return checkRouteHelper(path, [ '/phone_number_verification', '/weryfikacja_numeru_telefonu' ])
    case 'announcementIndexFull':
      if (path == '/') return true
      result = false;
      [ '/search_results', '/wyniki_wyszukiwania' ].map(indexPath => {
        if (path.indexOf(indexPath) != -1) {
          result = true
        }
      })
      return result
    case 'announcementIndexList':
      return checkRouteHelper(path, [ '/mojekonto/mojeogloszenia', '/myaccount/myannouncements' ])
    case 'userAuthorize':
      return checkRouteHelper(path, userAuthorizePaths)
    case 'userCreate':
      return checkRouteHelper(path, userCreatePaths)
    case 'userShow':
      return checkRouteHelper(path, userShowPaths)
    case 'UserShowAccount':
      return checkRouteHelper(path, [ '/mojekonto', '/myaccount' ])
    case 'userEdit':
      return checkRouteHelper(path, userEditPaths)
    case 'mainPage':
      return this.props.path === '/'
    default: 
      return false
  }
}

function checkRouteHelper(path, routes) {
  return routes.includes(path)
}


export function popStateRoute() {
  if (window.location.pathname === '/') {
    this.changeRoute(null, '/')
  }
  if (/^\d+$/.test(window.location.pathname.slice(1))) {
    this.setState({
      showAnnouncement: true
    })
  } else {
    this.setState({
      showAnnouncement: false
    })
  }
}

function languageHandler(polishVersion, englishVersion) {
  return this.props.language === 'polish' ? polishVersion : englishVersion
}

export function showAnnouncement() {
  this.setState({showAnnouncement: true})
}

export function hideAnnouncement() {
  this.setState({showAnnouncement: false})
}
