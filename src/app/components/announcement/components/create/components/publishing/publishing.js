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

import DerivedRents from './components/derived-rents/derived-rents'


class AnnouncementCreateFeatures extends React.Component {
  constructor(props) {
    super(props)
    this.componentDidUpdate = componentDidUpdate
    this.languageHandler = languageHandler.bind(this)
    this.languageObjectHandler = languageObjectHandler.bind(this)
    this.handleErrorOnValidate = handleErrorOnValidate.bind(this)

  }
  
  render() {
    const { languageHandler } = this
    const {
      showUserCreate,
      showUserAuthorize,
      showUserEditPhoneVerify,
      area,
      netRentAmount,
      rentCurrency,
      calculatedNetRentAmountPerSqm,
      calculatedGrossRentAmount,
      calculatedGrossRentAmountPerSqm,
      publishing
    } = this.props
    const parsedRentCurrency = this.parseCurrency(rentCurrency)

    return (
      <div id='announcement-create-publishing'>
        <DerivedRents
          languageHandler={languageHandler}
          area={area}
          rentCurrency={rentCurrency}
          parsedRentCurrency={parsedRentCurrency}
          netRentAmount={netRentAmount}
          calculatedNetRentAmountPerSqm={calculatedNetRentAmountPerSqm}
          calculatedGrossRentAmount={calculatedGrossRentAmount}
          calculatedGrossRentAmountPerSqm={calculatedGrossRentAmountPerSqm}
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
