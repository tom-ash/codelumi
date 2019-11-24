import { instantScroll } from './scrollers/instant-scroll'

export function changeRoute(e, route, parameter) {
  if (e) e.preventDefault()
  const { changeApp } = this.props

  const languageHandler = (polishVersion, englishVersion) => this.props.language === 'polish' ? polishVersion : englishVersion
  let newPlace
  let newPath
  const routeSetter = (route) => {
    newPlace = languageHandler(route.polishPlace, route.EnglishPlace)
    newPath = languageHandler(route.polishPath, route.englishPath)
    history.pushState({currentPlace: newPlace}, {}, newPath)

    changeApp({ path: newPath })

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
      case 'showAnnouncement':
        routeSetter({
          polishPlace: `Ogłoszenie ${parameter}`,
          englishPlace: `Announcement ${parameter}`,
          polishPath: `/${parameter}`,
          englishPath: `/${parameter}`
        })
        break;
      case 'editAnnouncement':
        routeSetter({
          polishPlace: 'Edytowanie Ogłoszenia',
          englishPlace: 'Announcement Editing',
          polishPath: `/edytowanie_ogloszenia/${parameter}`,
          englishPath: `/announcement_editing/${parameter}`
        })
        break;
      case 'addAnnouncement':
        routeSetter({
          polishPlace: 'Dodaj ogłoszenie',
          englishPlace: 'Add announcement',
          polishPath: '/dodaj_ogloszenie',
          englishPath:'/add_announcement'
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
      default:
        break
    }
  }
}

const announcementCreatePaths = ['/add_announcement',
                                 '/dodaj_ogloszenie']
const announcementIndexPaths = ['/search_results',
                                '/wyniki_wyszukiwania',
                                '/mojekonto/mojeogloszenia',
                                '/myaccount/myannouncements']                   

export function checkRoute(route) {
  const path = this.props.path.toLowerCase()
  let result
  switch (route) {
    case 'announcementCreate':
      return checkRouteHelper(path, announcementCreatePaths)
    case 'announcementIndex':
      if (path == '/') return true
      result = false
      announcementIndexPaths.map(indexPath => {
        if (path.indexOf(indexPath) !== -1) result = true
      })
      return result
    case 'editAnnouncement':
      result = false;
      (['/edytowanie_ogloszenia/', '/announcement_editing/']).map(indexPath => {
        if (path.indexOf(indexPath) != -1) {
          result = true
        }
      })
      return result

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
