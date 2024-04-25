import React from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { useRender } from '../../../../../../shared/app/functions/store/use-render'
import Verify from './components/verify/verify'
import loadable from '@loadable/component'

const Form = loadable(() => import('./components/form/form'))

const UserNew = () => {
  useStyles(styles)

  const {
    'user/new/form': renderForm,
    'user/new/verify': renderVerify,
  } = useRender()

  return (
    <div id='users-new'>
      {renderForm && <Form />}
      {renderVerify && <Verify />}
    </div>
  )
}

export default UserNew
