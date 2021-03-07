import scrollToElement from '../../../../../../../../../shared/app/functions/screen/scrollers/to-element.js'
import { requiredInputs, requiredInputsArray } from '../../../constants/required-inputs'
import scrollToTop from '../../../../../../../../../shared/app/functions/screen/scrollers/to-top.js'
import {
  USER_TRACK,
  USER_CREATE_TRACK
} from '../../../../../../../../shared/constants/tracks/tracks'

export function publish() {
  const {
    changeControl,
    authorized,
    changeRender
  } = this.props

  const validationObject = {
    category: this.categoryManager().validate(),
    district: this.districtManager().validate(),
    area: this.areaManager().validate(),
    pictures: this.validatePictures(),
    map: this.validateMap()
  }

  if (!Object.values(validationObject).every((element => element))) {
    for(let i = 0; i < requiredInputsArray.length; i++) {
      if (!validationObject[requiredInputsArray[i]]) {
        return scrollToElement(document.getElementById(requiredInputs[requiredInputsArray[i]].id), 12, -120)
      }
    }
  }

  scrollToTop()
  if (authorized) {
    return changeControl({ step: 'publishing' })
  }
  
  changeControl({ step: 'creating-user' })
  changeRender({ [USER_TRACK]: true, [USER_CREATE_TRACK]: true })
}
