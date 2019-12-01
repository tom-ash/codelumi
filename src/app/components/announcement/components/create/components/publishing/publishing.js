import React from 'react'
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { languageHandler, languageObjectHandler } from '../../../../../../functions/language-handler'
import { publish } from './functions/publish'
import { savePicture } from './functions/save-picture'
import { saveAnnouncement } from './functions/save-announcement'
import { componentDidUpdate } from './functions/lifecycle'
import WindmillSpinner from '../../../../../support/components/spinner/components/windmill/windmill.js'
import { handleErrorOnValidate } from '../primary/functions/errors-handler'
import { validatePictures } from '../pictures/functions/validate-pictures'
import { validateMap } from '../map/functions/validate-map'
import * as managers from '../primary/functions/managers'
import { ManagedButton } from 'managed-inputs'
import { buttonManager } from './functions/manager'
import { labelProvider } from '../../../../../../functions/providers/label'
import { parseCurrency } from '../../../../functions/currency-parsers'
import DerivedRents from './components/derived-rents/derived-rents'
import { changeRoute } from '../../../../../../functions/routers'
import './styles/styles.scss'

class AnnouncementCreateFeatures extends React.Component {
  constructor(props) {
    super(props)
    this.componentDidUpdate = componentDidUpdate
    this.languageHandler = languageHandler.bind(this)
    this.languageObjectHandler = languageObjectHandler.bind(this)
    this.handleErrorOnValidate = handleErrorOnValidate.bind(this)
    this.categoryManager = managers.categoryManager.bind(this)
    this.districtManager = managers.districtManager.bind(this)
    this.rentCurrencyManager = managers.rentCurrencyManager.bind(this)
    this.rentAmountManager = managers.rentAmountManager.bind(this)
    this.additionalFeesManager = managers.additionalFeesManager.bind(this)
    this.areaManager = managers.areaManager.bind(this)
    this.roomsManager = managers.roomsManager.bind(this)
    this.floorManager = managers.floorManager.bind(this)
    this.totalFloorsManager = managers.totalFloorsManager.bind(this)
    this.publish = publish.bind(this)
    this.savePicture = savePicture.bind(this)
    this.saveAnnouncement = saveAnnouncement.bind(this)
    this.validatePictures = validatePictures.bind(this)
    this.validateMap = validateMap.bind(this)
    this.buttonManager = buttonManager.bind(this)
    this.labelProvider = labelProvider.bind(this)
    this.availabilityDateSelectManager = managers.availabilityDateSelectManager.bind(this)
    this.availableDateManager = managers.availableDateManager.bind(this)
    this.parseCurrency = parseCurrency.bind(this)
    this.changeRoute = changeRoute.bind(this)
  }
  
  render() {
    const { languageHandler } = this
    const { connecting, showUserCreate, showUserAuthorize, showUserEditPhoneVerify, area, netRentAmount, rentCurrency,
            rentNetPerSqm, rentGross, rentGrossPerSqm, publishing } = this.props
    const parsedRentCurrency = this.parseCurrency(rentCurrency)

    return (
      <div id='announcement-create-publishing'>
        <DerivedRents
          languageHandler={languageHandler}
          area={area}
          rentCurrency={rentCurrency}
          parsedRentCurrency={parsedRentCurrency}
          netRentAmount={netRentAmount}
          rentGross={rentGross}
          rentNetPerSqm={rentNetPerSqm}
          rentGrossPerSqm={rentGrossPerSqm}
        />
        <ManagedButton {...this.buttonManager()} />
        {publishing && !showUserCreate && !showUserAuthorize && !showUserEditPhoneVerify && <PublishingCover />}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementCreateFeatures)

function PublishingCover() {  
  return ReactDOM.createPortal(
    <div className='darkened-cover'>
      <WindmillSpinner spinnerClass='windmill-medium-spinner'/>
    </div>,
    document.body
  )
}