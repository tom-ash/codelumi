import { scrollToElement } from '../../../../../../../functions/scrollers/scroll-to-element'
import { requiredInputs, requiredInputsArray } from '../../../constants/required-inputs'

export function publish() {
  const validationObject = {
    category: this.categoryManager('validate', this.props.category),
    district: this.districtManager('validate'),
    rentCurrency: this.rentCurrencyManager('validate'),
    netRentAmount: this.rentAmountManager('validate'),
    additionalFees: this.additionalFeesManager('validate'),
    area: this.areaManager('validate'),
    rooms: this.roomsManager('validate'),
    floor: this.floorManager('validate'),
    totalFloors: this.totalFloorsManager('validate'),
    availabilityDate: this.availabilityDateSelectManager('validate'),
    pictures: this.validatePictures(),
    map: this.validateMap()
  }
  if (!Object.values(validationObject).every((element => element))) {
    for(let i = 0; i < requiredInputsArray.length; i++) {
      if (!validationObject[requiredInputsArray[i]]) {
        return scrollToElement(document.getElementById(requiredInputs[requiredInputsArray[i]].id), 16, -160)
      }
    }
  }
  this.props.changeControl({ publishing: true })
}