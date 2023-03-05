import scrollToElement from '../../../../../../../../../shared/app/functions/screen/scrollers/to-element'
import { requiredInputs, requiredInputsArray } from '../../../constants/required-inputs'
import { buildUserObject } from '../../../../../../user/components/create/components/email/components/form/functions/build-user-object'
import buildAnouncement from '../../../functions/build-announcement'

export function publish() {
  const {
    authorized,
    setControl,
    setData,
    setErrors,
    accountType,
    businessName,
    emailAddress,
    password,
    countryCode,
    phoneNumber,
    termsOfServiceConsent,
    termsOfServiceConsentLabel,
  } = this.props

  const announcementObject = {
    // category: this.categoryManager().validate(),
    pictures: this.validatePictures(),
    map: this.validateMap(),
  }

  const announcement = buildAnouncement.call(this)
  const user = authorized ? {} : buildUserObject({
    accountType,
    businessName,
    emailAddress,
    password,
    countryCode,
    phoneNumber,
    termsOfServiceConsent,
    termsOfServiceConsentLabel,
    setErrors,
  })

  if (!Object.values(announcementObject).every(element => element)) {
    for (let i = 0; i < requiredInputsArray.length; i++) {
      if (!announcementObject[requiredInputsArray[i]]) {
        return scrollToElement(document.getElementById(requiredInputs[requiredInputsArray[i]].id), 12, -120)
      }
    }
  }

  if (!authorized && !user) return scrollToElement(document.getElementById('user-create-email-first-name'), 12, -160)

  setData({ announcement, user })
  setControl({ step: 'publishing' })
}
