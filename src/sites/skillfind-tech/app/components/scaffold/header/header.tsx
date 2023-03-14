import React from 'react'
import { useStore } from '../../../../../shared/app/functions/store/useStore'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { Logo } from './components/logo'
import { LangSwitch } from '../../../../../shared/app/components/support/lang-switch/lang-switch'
import { FloatClear } from '../../../../../shared/app/components/support/float-clear/float-clear'

interface HeaderInterface {
  (props: {}): JSX.Element
}

const Header: HeaderInterface = props => {
  useStyles(styles)

  const { state, dispatch } = useStore()
  const { app, control } = state
  const { lang } = app

  return (
    <div id='header'>
      <Logo />
      <LangSwitch />
      <FloatClear />
    </div>
  )
}

export default Header
