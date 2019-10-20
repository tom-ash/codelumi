import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { languageHandler, languageObjectHandler } from '../../../../../../functions/language-handler'
import { publish } from './functions/publish'
import { savePicture } from './functions/save-picture'
import { saveAnnouncement } from './functions/save-announcement'
import * as lifecycle from './functions/lifecycle'
import { changeRoute } from '../../../../../../functions/routers'
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
import './styles/styles.scss'

class AnnouncementCreateFeatures extends React.Component {
  constructor(props) {
    super(props)
    this.componentDidMount = lifecycle.componentDidMount
    this.componentDidUpdate = lifecycle.componentDidUpdate
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
    this.changeRoute = changeRoute.bind(this)
    this.validatePictures = validatePictures.bind(this)
    this.validateMap = validateMap.bind(this)
    this.buttonManager = buttonManager.bind(this)
    this.labelProvider = labelProvider.bind(this)
    this.availabilityDateSelectManager = managers.availabilityDateSelectManager.bind(this)
    this.availableDateManager = managers.availableDateManager.bind(this)
    this.parseCurrency = parseCurrency.bind(this)
  }
  
  render() {
    const { languageHandler } = this
    const { area, netRentAmount, rentCurrency, rentNetPerSqm, rentGross, rentGrossPerSqm } = this.props
    const parsedRentCurrency = this.parseCurrency(rentCurrency)

    return (
      <div id='announcement-create-publishing'>
        {
        !this.props.publishing &&
        <div>
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
        </div>
        }
        {
        this.props.publishing &&
        <div>
          <h2 className='page-header'>
            <i className='fas fa-ellipsis-h' /> {languageHandler('Publikowanie ogłoszenia', 'Announcement Publishing')}
          </h2>
          {
          !this.props.success &&
          <div className='publishing'>
            <WindmillSpinner spinnerClass='windmill-medium-spinner'/>
          </div>
          }
          {
          this.props.success &&
          <div className='publishing'>
            {this.languageHandler('Gratulacje! Ogłoszenie zostało dodane.',
                                  'Congratulations! The announcement has been added!')}
          </div>
          }
        </div>
        }
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementCreateFeatures)