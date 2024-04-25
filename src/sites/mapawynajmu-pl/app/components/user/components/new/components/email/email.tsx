import React from 'react'
import loadable from '@loadable/component'
import { useRender } from '../../../../../../../../shared/app/functions/store/use-render'
const Form = loadable(() => import('./components/form/form'))
const Verification = loadable(
  () => import('../../../../../../../../shared/app/components/user/components/new/components/verification/verification')
)
const Confirmation = loadable(() => import('./components/confirmation/confirmation'))

export const UserNewEmail = () => {
  const render = useRender()
  const renderForm = render['user/new/form'] || render['listings/new/form']
  const renderVerification = render['user/create/verification']
  const renderConfirmation = render['user/create/confirmation']

  return (
    <div id='users-new-email'>
      {renderForm && <Form />}
      {renderVerification && <Verification />}
      {renderConfirmation && <Confirmation />}
    </div>
  )
}
