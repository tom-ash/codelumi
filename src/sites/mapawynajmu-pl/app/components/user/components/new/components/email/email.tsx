import React from 'react'
import { useStore } from '../../../../../../../../shared/app/functions/store/useStore'
import loadable from '@loadable/component'
const Form = loadable(() => import('./components/form/form'))
const Verification = loadable(
  () => import('../../../../../../../../shared/app/components/user/components/new/components/verification/verification')
)
const Confirmation = loadable(() => import('./components/confirmation/confirmation'))

export const UserNewEmail = () => {
  const { state } = useStore()
  const { render } = state

  const renderForm = render['user/new/form'] || render['announcement/create/form']
  const renderVerification = render['user/create/verification']
  const renderConfirmation = render['user/create/confirmation']

  return (
    <div id='user-new-email'>
      {renderForm && <Form />}
      {renderVerification && <Verification />}
      {renderConfirmation && <Confirmation />}
    </div>
  )
}
