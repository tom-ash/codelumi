import { scrollToElement } from '../../../../../../../functions/scrollers/scroll-to-element'
import { requiredInputs, requiredInputsArray } from '../../../constants/required-inputs'

export function publish() {
  const validationObject = {
    district: this.districtManager().validate(),
    area: this.areaManager().validate(),
    rentAmount: this.rentAmountManager().validate(),
    pictures: this.validatePictures(),
    map: this.validateMap()
  }

  if (!Object.values(validationObject).every((element => element))) {
    for(let i = 0; i < requiredInputsArray.length; i++) {
      if (!validationObject[requiredInputsArray[i]]) {
        return scrollToElement(document.getElementById(requiredInputs[requiredInputsArray[i]].id), 16, -120)
      }
    }
  }
  this.props.changeControl({ publishing: true })
}
