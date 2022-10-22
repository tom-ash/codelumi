import React from 'react'
import WindmillSpinner from '../../../../../support/components/spinner/components/windmill/windmill.js'

const UserCreateConnecting = () => {
  return (
    <div id='user-create-creating-container'>
      <WindmillSpinner spinnerClass='windmill-medium-spinner' />
    </div>
  )
}

export default UserCreateConnecting
