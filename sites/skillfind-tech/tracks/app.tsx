// import React, { useEffect } from 'react'
// import { useStateToRouteMatcher } from './functions/use-state-to-route-matcher'
// import loadable from '@loadable/component'
// const Header = loadable(() => import('../../../../tracks/skillfind-tech/scaffold/header/header'))
// const Footer = loadable(() => import('../../../../tracks/skillfind-tech/scaffold/footer/footer'))
// const Visitor = loadable(() => import('../../../../tracks/skillfind-tech/visitor/visitor'))
// const User = loadable(() => import('../../../../tracks/skillfind-tech/user/user'))
// const UserPostingsIndex = loadable(() => import('../../../../tracks/skillfind-tech/user/postings/index/index'))
// const UserPostingsEdit = loadable(() => import('../../../../tracks/skillfind-tech/user/postings/edit/edit'))
// const Postings = loadable(() => import('../../../../tracks/skillfind-tech/posting/postings'))
// const Page = loadable(() => import('../../../../common/components/page/page'))
// const Image = loadable(() => import('../../../../common/components/image/image'))
// const AssetsIndex = loadable(() => import('../../../../tracks/skillfind-tech/index/index'))
// const RedirectsIndex = loadable(() => import('../../../../common/components/redirect/components/index/index'))
// const QuestionsShow = loadable(() => import('../../../../tracks/skillfind-tech/questions/show/show'))

// const UserUsersEdit = loadable(() => import('../../../../tracks/skillfind-tech/user/components/edit/edit'))

// import useStyles from 'isomorphic-style-loader-react18/useStyles'
// import styles from './styles/styles.scss'
// import apiUrl from '../shared/constants/urls/api'
// import { setIsMobile } from '../../mapawynajmu-pl/tracks/common/helpers/set-is-mobile'
// import { setConsents } from '../../../_sites/shared/app/functions/consents/set-consents'
// import { useApp } from '../../../_sites/shared/app/functions/store/use-app'
// import { useRender } from '../../../_sites/shared/app/functions/store/use-render'
// import { useDispatch } from 'react-redux'
// import { useScreenSizeHandler } from '../../mapawynajmu-pl/tracks/common/helpers/use-screen-size-handler'

// const App = () => {
//   useStyles(styles)

//   useStateToRouteMatcher()
//   useScreenSizeHandler()

//   const { lang } = useApp()
//   const render = useRender()
//   const dispatch = useDispatch()

//   useEffect(() => {
//     // @ts-ignore
//     window.apiUrl = apiUrl
//     // @ts-ignore
//     window.lang = lang
//     // @ts-ignore
//     dispatch({ type: 'app', value: { isDocumentReady: true } })
//   }, [lang])

//   useEffect(() => setIsMobile(dispatch), []) // TODO: Consider moving to server.
//   useEffect(() => setConsents(dispatch), [])

//   const {
//     page: renderPage,
//     image: renderImage,
//     visitor: renderVisitor,
//     postings: renderPostings,
//     user: renderUser,
//     'user/postings/index': renderUserPostingsIndex,
//     'user/postings/edit': renderUserPostingsEdit,
//     'user/users/edit': renderUserUsersEdit,
//     assetsIndex,
//     redirectsIndex,
//     renderQuestions,
//   } = render

//   return (
//     <>
//       <Header />
//       <div id='content'>
//         {renderUser && <User />}
//         {renderUserPostingsIndex && <UserPostingsIndex />}
//         {renderUserPostingsEdit && <UserPostingsEdit />}
//         {renderUserUsersEdit && <UserUsersEdit />}
//         {renderPostings && <Postings />}
//         {renderVisitor && <Visitor />}
//         {renderImage && <Image />}
//         {assetsIndex && <AssetsIndex />}
//         {redirectsIndex && <RedirectsIndex />}
//         {renderQuestions && <QuestionsShow />}
//         {renderPage && <Page />}
//       </div>
//       <Footer />
//     </>
//   )
// }

// export default App
