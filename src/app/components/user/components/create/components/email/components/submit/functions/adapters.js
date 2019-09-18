import { getDerivedSaltForPassword } from '../../../../../../../functions/shared.js'
import { hashPassword } from '../../../../../../../functions/shared.js'
import { apiUrl } from '../../../../../../../../../constants/urls.js'
import { parser as consentsParser } from '../../../../consents/functions/parser'

export function prepareUserAccount() {
  const userObject = prepareUserObject.call(this)
  if (validateUserObject.call(this, userObject)) {
    this.props.changeControl({ connecting: true })
    getDerivedSaltForPassword(userObject.email)
    .then(salt => {
      userObject.password = hashPassword(userObject.password, salt)
      consentsParser.call(this, userObject)
      createProspectiveUser.call(this, userObject)
    })
    .catch((e) => console.dir(e))
  }
}

function prepareUserObject() {
  let userObject = {
    businessName: document.getElementById('user-create-email-business-name').value,
    countryCode: document.getElementById('user-create-email-area-code').value,
    phone: document.getElementById('user-create-email-phone-number').value,
    email: document.getElementById('user-create-email-email-address').value,
    password: document.getElementById('user-create-email-password').value,
    terms: document.getElementById('user-create-consents-terms').checked,
    privacy: document.getElementById('user-create-consents-privacy').checked
  }
  return userObject
}

function validateUserObject(userObject) {
  const validationArray = [
    this.businesstNameValidator(userObject.businessName),
    this.phoneValidator(userObject.phone),
    this.emailValidator(userObject.email),
    this.passwordValidator(userObject.password),
    this.termsValidator(userObject.terms),
    this.privacyValidator(userObject.privacy)
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
  .then((jsonResponse) => {
    this.props.changeControl({ connecting: false })
    this.props.changeData({ token: jsonResponse.token })
  })
  .catch(e => console.dir(e))
}
