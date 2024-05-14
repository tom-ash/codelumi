import React, { useEffect } from 'react'
import { useStateToRouteMatcher } from './functions/use-state-to-route-matcher'
import loadable from '@loadable/component'
const Header = loadable(() => import('./components/scaffold/header/header'))
const Footer = loadable(() => import('./components/scaffold/footer/footer'))
const Visitor = loadable(() => import('./components/visitor/visitor'))
const User = loadable(() => import('./components/user/user'))
const UserPostingsIndex = loadable(() => import('./components/user/postings/index/index'))
const UserPostingsEdit = loadable(() => import('./components/user/postings/edit/edit'))
const Postings = loadable(() => import('./components/posting/postings'))
const Page = loadable(() => import('../../shared/app/components/page/page'))
const Image = loadable(() => import('../../shared/app/components/image/image'))
const AssetsIndex = loadable(() => import('./components/asset/components/index'))
const RedirectsIndex = loadable(() => import('../../shared/app/components/redirect/components/index'))
const QuestionsShow = loadable(() => import('./components/questions/show/show'))

const UserUsersEdit = loadable(() => import('./components/user/components/edit/edit'))

import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import apiUrl from '../shared/constants/urls/api'
import { setIsMobile } from '../../mapawynajmu-pl/app/functions/set-is-mobile'
import { setConsents } from '../../shared/app/functions/consents/set-consents'
import { useApp } from '../../shared/app/functions/store/use-app'
import { useRender } from '../../shared/app/functions/store/use-render'
import { useDispatch } from 'react-redux'
import { useScreenSizeHandler } from '../../mapawynajmu-pl/app/functions/use-screen-size-handler'

const App = () => {
  useStyles(styles)

  useStateToRouteMatcher()
  useScreenSizeHandler()

  const { lang } = useApp()
  const render = useRender()
  const dispatch = useDispatch()

  useEffect(() => {
    // @ts-ignore
    window.apiUrl = apiUrl
    // @ts-ignore
    window.lang = lang
    // @ts-ignore
    dispatch({ type: 'app', value: { isDocumentReady: true } })
  }, [lang])

  useEffect(() => setIsMobile(dispatch), []) // TODO: Consider moving to server.
  useEffect(() => setConsents(dispatch), [])

  const {
    page: renderPage,
    image: renderImage,
    visitor: renderVisitor,
    postings: renderPostings,
    user: renderUser,
    'user/postings/index': renderUserPostingsIndex,
    'user/postings/edit': renderUserPostingsEdit,
    'user/users/edit': renderUserUsersEdit,
    assetsIndex,
    redirectsIndex,
    renderQuestions,
  } = render

  return (
    <>
      <Header />
      <div id='content'>
        {renderUser && <User />}
        {renderUserPostingsIndex && <UserPostingsIndex />}
        {renderUserPostingsEdit && <UserPostingsEdit />}
        {renderUserUsersEdit && <UserUsersEdit />}
        {renderPostings && <Postings />}
        {renderVisitor && <Visitor />}
        {renderImage && <Image />}
        {assetsIndex && <AssetsIndex />}
        {redirectsIndex && <RedirectsIndex />}
        {renderQuestions && <QuestionsShow />}
        {renderPage && <Page />}
      </div>
      <Footer />
    </>
  )
}

export default App
