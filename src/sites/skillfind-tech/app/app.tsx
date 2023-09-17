import React, { useEffect } from 'react'
import { useStore } from '../../shared/app/functions/store/useStore'
import { useStateToRouteMatcher } from './functions/use-state-to-route-matcher'
import loadable from '@loadable/component'
const Header = loadable(() => import('./components/scaffold/header/header'))
const Visitor = loadable(() => import('./components/visitor/visitor'))
const User = loadable(() => import('./components/user/user'))
const Posting = loadable(() => import('./components/posting/announcement'))
const PostingIndex = loadable(() => import('./components/posting/components/index/index'))
const Page = loadable(() => import('../../shared/app/components/page/page'))
const Image = loadable(() => import('../../shared/app/components/image/image'))
const Footer = loadable(() => import('./components/scaffold/footer/footer'))

const AssetsIndex = loadable(() => import('./components/asset/components/index'))
const RedirectsIndex = loadable(() => import('../../shared/app/components/redirect/components/index'))

import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import apiUrl from '../shared/constants/urls/api'
import { setIsMobile } from '../../mapawynajmu-pl/app/functions/set-is-mobile'
import { setConsents } from '../../shared/app/functions/consents/set-consents'

const App = () => {
  useStyles(styles)

  useStateToRouteMatcher()

  const { state, dispatch } = useStore()
  const { app, render } = state
  const { lang } = app

  useEffect(() => {
    // @ts-ignore
    window.apiUrl = apiUrl
    // @ts-ignore
    window.lang = lang
  }, [lang])

  useEffect(() => setIsMobile(dispatch), []) // TODO: Consider moving to server.
  useEffect(() => setConsents(dispatch), [])

  const {
    page: renderPage,
    image: renderImage,
    visitor: renderVisitor,
    announcement: renderListing,
    user: renderUser,
    renderPostingIndex,
    assetsIndex,
    redirectsIndex,
  } = render

  return (
    <>
      <Header />
      {renderPostingIndex && <PostingIndex />}
      {renderPage && <Page />}
      {renderVisitor && <Visitor />}
      {renderListing && <Posting />}
      {renderUser && <User />}
      {renderImage && <Image />}
      {assetsIndex && <AssetsIndex />}
      {redirectsIndex && <RedirectsIndex />}
      <Footer />
    </>
  )
}

export default App
