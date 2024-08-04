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

const Row = (props: { className: string }) => {
  const { className } = props

  return (
    <div className={className}>
      <div className='nook' />
      <div className='traverse' />
      <div className='nook' />
      <div className='traverse' />
      <div className='nook' />
      <div className='traverse' />
      <div className='nook' />
    </div>
  )
}

const App = () => {
  useStyles(styles)

  return (
    <div id='bookcase'>
      <Row className='bottom' />
      <Row className='bottom' />
      <div id='tv-pane'>
        <div id='tv-panel'>
          <div id='tv' />
        </div>
      </div>



    </div>
  )
}

export default App
