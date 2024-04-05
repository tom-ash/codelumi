import scrollToElement from '../../../../../../../../../shared/app/functions/screen/scrollers/to-element'
import { buildUserObject } from '../../../../../../user/components/new/components/email/components/form/functions/build-user-object'
import buildAnouncement from '../../../functions/build-announcement'
import { validateCategory } from '../../category/functions/validate-category'
import { validateLocation } from '../../location/functions/validate-location'
import { validatePictures } from '../../pictures/functions/validate-pictures'

export function publish(addPromotion: boolean = false) {
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
    latitude,
    longitude,
    category,
    pictures,
    // @ts-ignore
  } = this.props


  const validations = [
    validateCategory({ category, setErrors }),
    validateLocation({ lat: latitude, lng: longitude, setErrors }),
    validatePictures({ pictures, setErrors })
  ]

  for(let i = 0; i < validations.length; i++) {
    const validation = validations[i]
    if (validation) {
      const element = document.getElementById(validation)
      setControl({ connecting: false })
      scrollToElement(element, 12, -120)
      return
    }
  }

  // @ts-ignore
  const announcement = { ...buildAnouncement.call(this), addPromotion }
  const user = authorized
    ? {}
    : buildUserObject({
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

  // if (!Object.values(announcementObject).every(element => element)) {
  //   for (let i = 0; i < requiredInputsArray.length; i++) {
  //     // @ts-ignore
  //     if (!announcementObject[requiredInputsArray[i]]) {
  //       setControl({ connecting: false })

  //       // @ts-ignore
  //       return scrollToElement(document.getElementById(requiredInputs[requiredInputsArray[i]].id), 12, -120)
  //     }
  //   }
  // }

  if (!authorized && !user) {
    setControl({ connecting: false })

    return scrollToElement(document.getElementById('user-new-email-first-name'), 12, -160)
  }

  // @ts-ignore
  window.gtag('event', 'listing_added')

  if (addPromotion) {
    // @ts-ignore
    window.gtag('event', 'promotion_added')
  }

  setData({ announcement, user })
  setControl({ connecting: false, step: 'publishing' })
}
