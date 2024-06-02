import { saveFile } from '../../../../../../../../../shared/app/components/support/file-input/functions/save-file'
import API_URL from '../../../../../../../../shared/constants/urls/api'
import { validateCV } from '../components/cv/validators/validate-cv'
import { validateEmail } from '../components/email/validators/validate-email'
import { validateFirstName } from '../components/first-name/validators/validate-first-name'
import { validateLastName } from '../components/last-name/validators/validate-last-name'

interface SubmitApplication {
  (params: {
    postingId: string
    firstName: string
    lastName: string
    email: string
    phoneNumber: string
    linkedInProfile: string
    gitHubAccount: string
    cV: File
    setErrors(errors: { [key: string]: string }): void
    setControl(errors: { [key: string]: any }): void
    firstNameInputInvalidError: string
    lastNameInputInvalidError: string
    emailInputInvalidError: string
    cVFileInputInvalid: string
  }): void
}

export const submitApplication: SubmitApplication = async params => {
  const {
    postingId,
    firstName,
    lastName,
    email,
    phoneNumber,
    linkedInProfile,
    gitHubAccount,
    cV,
    setErrors,
    firstNameInputInvalidError,
    lastNameInputInvalidError,
    emailInputInvalidError,
    cVFileInputInvalid,
    setControl,
  } = params

  const validationArray = [
    validateFirstName({
      value: firstName,
      errorMessage: firstNameInputInvalidError,
      setErrors,
    }),
    validateLastName({
      value: firstName,
      errorMessage: lastNameInputInvalidError,
      setErrors,
    }),
    validateEmail({
      value: email,
      errorMessage: emailInputInvalidError,
      setErrors,
    }),
    validateCV({
      value: cV,
      errorMessage: cVFileInputInvalid,
      setErrors,
    }),
  ]

  if (validationArray.find(el => el)) {
    setControl({ applyTransferring: false })
    return
  }

  const persistedCV = await saveFile({
    apiUrl: API_URL,
    file: cV,
    path: 'temporary',
    randomizeKey: true,
  })

  const body = JSON.stringify({
    postingId,
    firstName,
    lastName,
    email,
    phoneNumber,
    linkedInProfile,
    gitHubAccount,
    cv: persistedCV,
  })

  const response = await fetch(API_URL + '/posting-applications', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body,
  })

  if (response.status == 201) {
    setControl({ applyTransferring: false, applicationFormSent: true })
  }
}
