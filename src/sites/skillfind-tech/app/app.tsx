import React, { useEffect } from 'react'
import { useStore } from '../../shared/app/functions/store/useStore'
import { useStateToRouteMatcher } from './functions/use-state-to-route-matcher'
import loadable from '@loadable/component'
const Header = loadable(() => import('./components/scaffold/header/header'))
const Visitor = loadable(() => import('./components/visitor/visitor'))
const User = loadable(() => import('./components/user/user'))
const Announcement = loadable(() => import('./components/announcement/announcement'))
const PostingIndex = loadable(() => import('./components/announcement/components/index/index'))
const Page = loadable(() => import('../../shared/app/components/page/page'))
const Image = loadable(() => import('../../shared/app/components/image/image'))
const Footer = loadable(() => import('./components/scaffold/footer/footer'))

import Index from './components/asset/components/index'

import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import apiUrl from '../shared/constants/urls/api'

const App = () => {
  useStyles(styles)

  useStateToRouteMatcher()

  const { state } = useStore()
  const { app, render } = state
  const { lang } = app

  useEffect(() => {
    // @ts-ignore
    window.apiUrl = apiUrl
    // @ts-ignore
    window.lang = lang
  }, [lang])

  const {
    page: renderPage,
    image: renderImage,
    visitor: renderVisitor,
    announcement: renderAnnouncement,
    user: renderUser,
    renderPostingIndex,
    assetsIndex,
  } = render

  return (
    <>
      <Header />
      {renderPostingIndex && <PostingIndex />}
      {renderPage && <Page />}
      {renderVisitor && <Visitor />}
      {renderAnnouncement && <Announcement />}
      {renderUser && <User />}
      {renderImage && <Image />}
      {assetsIndex && <Index />}
      <Footer />
    </>
  )
}

export default App
