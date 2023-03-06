import React from 'react'
import { useStore } from '../../../../../../../../shared/app/functions/store/useStore'
import { UserNewEmailForm as Form } from './components/form/form'
import Verification from './components/verify/verify'
import { Confirmation } from './components/confirmation/confirmation'

export const UserNewEmail = () => {
  const { state } = useStore()
  const { render } = state

  const renderForm = render['user/create/form'] || render['announcement/create/form']
  const renderVerification = render['user/create/verification']
  const renderConfirmation = render['user/create/confirmation']

  return (
    <div id='user-create-email'>
      {renderForm && <Form />}
      {renderVerification && <Verification />}
      {renderConfirmation && <Confirmation />}
    </div>
  )
}
