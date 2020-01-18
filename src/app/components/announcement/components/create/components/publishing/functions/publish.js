import { scrollToElement } from '../../../../../../../functions/scrollers/scroll-to-element'
import { requiredInputs, requiredInputsArray } from '../../../constants/required-inputs'

export function publish() {
  const { availabilityDateSelect } = this.props

  const validationObject = {
    category: this.categoryManager().validate(),
    district: this.districtManager().validate(),
    rentCurrency: this.rentCurrencyManager().validate(),
    rentAmount: this.rentAmountManager().validate(),
    area: this.areaManager().validate(),
    rooms: this.roomsManager().validate(),
    floor: this.floorManager().validate(),
    totalFloors: this.totalFloorsManager().validate(),
    availabilityDateSelect: this.availabilityDateSelectManager().validate(),
    pictures: this.validatePictures(),
    map: this.validateMap()
  }

  if (availabilityDateSelect === 'date') {
    validationObject.availabilityDate = this.availableDateManager().validate()
  } else {
    validationObject.availabilityDate = true
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
