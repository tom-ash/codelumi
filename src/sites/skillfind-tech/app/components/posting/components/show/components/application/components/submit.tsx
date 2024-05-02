import React from 'react'
import { SubmitButtonVer2 } from '../../../../../../../../../shared/app/components/support/submit-button-ver-2/submit-button-ver-2'
import { submitApplication } from '../functions/submit-application'
import { useInputs } from '../../../../../../../../../shared/app/functions/store/use-inputs'
import { useData } from '../../../../../../../../../shared/app/functions/store/use-data'

export const Submit = () => {
  const {
    posting: { id: postingId },
  } = useData()
  const { firstName, lastName, email, phoneNumber, linkedInProfile, gitHubAccount, cV } = useInputs()

  const params = {
    postingId,
    firstName,
    lastName,
    email,
    phoneNumber,
    linkedInProfile,
    gitHubAccount,
    cV,
  }

  return (
    <SubmitButtonVer2
      name='apply'
      params={params}
      submit={submitApplication}
    />
  )
}
