import React from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { useRender } from '../../../../../../shared/app/functions/store/use-render'
import { UserNewEmail } from './components/email/email'
import { Logo } from './components/logo/logo'
import { BusinessName } from './components/business-name/business-name'
import { Industry } from './components/industry/industry'
import Verify from './components/verify/verify'

const UserNew = () => {
  useStyles(styles)

  const render = useRender()

  const {
    'user/new/form': renderForm,
    'user/new/verify': renderVerify,
  } = useRender()

  return (
    <div id='user-new'>
      {renderForm && (
        <div className='form'>
          <BusinessName />
          <Industry />
          <Logo />
          <UserNewEmail />
        </div>
      )}
      {renderVerify && (
        <Verify />
      )}
    </div>
  )
}

export default UserNew
