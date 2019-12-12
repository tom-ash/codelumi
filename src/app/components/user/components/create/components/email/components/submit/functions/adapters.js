import { hashPassword } from '../../../../../../../functions/shared.js'
import { apiUrl } from '../../../../../../../../../constants/urls.js'
import { parser as consentsParser } from '../../../../consents/functions/parser'

export function prepareUserAccount() {
  const userObject = prepareUserObject.call(this)
  if (validateUserObject.call(this, userObject)) {
    this.props.changeControl({ connecting: true })
    userObject.password = hashPassword(userObject.password, userObject.email)
    consentsParser.call(this, userObject)
    createProspectiveUser.call(this, userObject)
  }
}

function prepareUserObject() {
  let userObject = {
    businessName: document.getElementById('user-create-email-business-name').value,
    phoneCode: document.getElementById('user-create-email-area-code').value,
    phone: document.getElementById('user-create-email-phone-number').value,
    email: document.getElementById('user-create-email-email-address').value,
    password: document.getElementById('user-create-email-password').value,
    termsAndPrivacyConsent: document.getElementById('user-create-consents-terms-and-privacy').checked
  }
  return userObject
}

function validateUserObject(userObject) {
  const validationArray = [
    this.businesstNameValidator(userObject.businessName),
    this.phoneValidator(userObject.phone),
    this.emailValidator(userObject.email),
    this.passwordValidator(userObject.password),
    this.termsAndPrivacyConsentValidator(userObject.termsAndPrivacyConsent)
  ]
  return validationArray.every((element => element))
}

function createProspectiveUser(userObject) {
  fetch(apiUrl + '/prospective_users', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      language: this.props.language
    },
    body: JSON.stringify(userObject)
  })
  .then(response => {
    if (response.status == 201) return response.json()
    throw new Error('Something went wrong.')
  },
  networkError => console.dir(networkError.message))
  .then((json) => {
    this.props.changeControl({ connecting: false })
    this.props.changeData({ token: json.token })
  })
  .catch(e => console.dir(e))
}
