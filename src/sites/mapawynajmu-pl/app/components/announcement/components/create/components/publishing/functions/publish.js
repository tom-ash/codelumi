import scrollToElement from '../../../../../../../../../shared/app/functions/screen/scrollers/to-element.js'
import { requiredInputs, requiredInputsArray } from '../../../constants/required-inputs'
import { buildUserObject } from '../../../../../../user/components/create/components/email/components/submit/functions/adapters.js'
import buildAnouncement from '../../../functions/build-announcement.js'

export function publish() {
  const { authorized, changeControl, changeData } = this.props

  const announcementObject = {
    // category: this.categoryManager().validate(),
    pictures: this.validatePictures(),
    map: this.validateMap()
  }

  const announcement = buildAnouncement.call(this)
  const user = authorized ? {} : buildUserObject.call(this)

  if (!Object.values(announcementObject).every((element => element))) {
    for(let i = 0; i < requiredInputsArray.length; i++) {
      if (!announcementObject[requiredInputsArray[i]]) {
        return scrollToElement(document.getElementById(requiredInputs[requiredInputsArray[i]].id), 12, -120)
      }
    }
  }

  if (!authorized && !user) return scrollToElement(document.getElementById('user-create-email-first-name'), 12, -160)

  changeData({ announcement, user })
  changeControl({ step: 'publishing' })
}
