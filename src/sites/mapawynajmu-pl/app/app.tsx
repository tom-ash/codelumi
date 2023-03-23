import React, { useEffect } from 'react'
import { useStore } from '../../shared/app/functions/store/useStore'
import { useFonts } from './functions/use-fonts'
import { useGoogleMaps } from './functions/use-google-maps'
import { useGoogleAnalytics } from './functions/use-google-analytics'
import { useScreenSizeHandler } from './functions/use-screen-size-handler'
import { useStateToRouteMatcher } from './functions/use-state-to-route-matcher'
import loadable from '@loadable/component'
const Header = loadable(() => import('./components/scaffold/header/header'))
const Visitor = loadable(() => import('./components/visitor/visitor'))
const User = loadable(() => import('./components/user/user'))
const Announcement = loadable(() => import('./components/announcement/announcement'))
const Page = loadable(() => import('../../shared/app/components/page/page'))
const Image = loadable(() => import('../../shared/app/components/image/image'))
const VisitorPageIndex = loadable(() => import('./components/visitor/components/page/components/index/index'))
const Footer = loadable(() => import('./components/scaffold/footer/footer'))
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'

import { setIsMobile } from './functions/set-is-mobile'

const App = () => {
  useStyles(styles)

  const { state, dispatch } = useStore()
  const { render } = state

  const {
    page: renderPage,
    image: renderImage,
    visitor: renderVisitor,
    announcement: renderAnnouncement,
    user: renderUser,
    'announcement/index/map': renderListingIndexMap,
    visitorPageIndex,
  } = render

  useFonts()
  useGoogleMaps()
  useGoogleAnalytics()
  useScreenSizeHandler()
  useStateToRouteMatcher()

  useEffect(() => setIsMobile(dispatch), []) // TODO: Consider moving to server.

  return (
    <>
      <Header />
      <div className='blank-page'>
        {renderAnnouncement && <Announcement />}
        {renderPage && <Page />}
        {renderVisitor && <Visitor />}
        {renderUser && <User />}
        {renderImage && <Image />}
        {visitorPageIndex && <VisitorPageIndex />}
      </div>
      {!renderListingIndexMap && <Footer />}
    </>
  )
}

export default App
