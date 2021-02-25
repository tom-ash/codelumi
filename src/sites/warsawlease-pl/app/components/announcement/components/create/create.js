import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import Primary from './components/primary/primary'
import Pictures from './components/pictures/pictures'
import Map from './components/map/map'
import Additional from './components/additional/additional'
import Features from './components/features/features'
import Furnishings from './components/furnishings/furnishings'
import Description from './components/description/description'
import Success from './components/success/success'
import WindmillSpinner from '../../../support/components/spinner/components/windmill/windmill.js'
import * as lifecycle from './functions/lifecycle'
import * as managers from './functions/managers'
import { langHandler, langObjHandler } from '../../../../functions/lang-handler'
import { getAnnouncement } from './functions/get-announcement'
import { AnnouncementCreateSteps } from './components/steps/steps'
import { ManagedButton } from 'managed-inputs'
import { publish } from './components/publishing/functions/publish'
import { validatePictures } from './components/pictures/functions/validate-pictures'
import { validateMap } from './components/map/functions/validate-map'
import { savePicture } from './functions/save-picture'
import { saveAnnouncement } from './functions/save-announcement'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'
import Line from '../../../support/components/separation-line/separation-line'
import AvailabilityDate from './components/availability_date/availability_date'
import { OPTIONAL } from './constants/texts'
import Header from '../../../support/components/header/header'
import SVG from '../../../support/components/svg/svg.js'

import {
  categoryManager,
  districtManager,
  areaManager
} from './components/primary/functions/managers'

import { handleErrorOnValidate } from './components/primary/functions/errors-handler'

class AnnouncementCreate extends React.Component {
  constructor(props) {
    super(props)
    this.componentDidMount = lifecycle.componentDidMount
    this.componentDidUpdate = lifecycle.componentDidUpdate
    this.componentWillUnmount = lifecycle.componentWillUnmount
    this.langHandler = langHandler.bind(this)
    this.langObjHandler = langObjHandler.bind(this)
    this.getAnnouncement = getAnnouncement.bind(this)
    this.addAnnouncementManager = managers.addAnnouncementManager.bind(this)
    this.categoryManager = categoryManager.bind(this)
    this.districtManager = districtManager.bind(this)
    this.areaManager = areaManager.bind(this)
    this.validatePictures = validatePictures.bind(this)
    this.validateMap = validateMap.bind(this)
    this.publish = publish.bind(this)
    this.handleErrorOnValidate = handleErrorOnValidate.bind(this)
    this.savePicture = savePicture.bind(this)
    this.saveAnnouncement = saveAnnouncement.bind(this)
  }

  render() {
    const {
      lang, isMobile, authorized, step, showAvilabilityDate,
      id, category, district, area, availabilityDate,
      changeApp, changeAnnouncementShowData, changeControl, changeInputs
    } = this.props

    const availabilityDateProps = { lang, availabilityDate, showAvilabilityDate, changeControl, changeInputs }
    const headerText = this.langObjHandler({ pl: 'Dodaj bezpłatne ogłoszenie wynajmu nieruchomości w Warszawie', en: 'Add Free Announcement of Real Estate Lease in Warsaw' })

    return (
      <>
        <AnnouncementCreateSteps authorized={authorized} step={step} />
        <div id='announcement-create' className={step}>
          <Header tier={1} text={headerText} svg='plus' />
          {step === 'form' &&
          <>
            <Primary />
            <Line />
            <Pictures />
            <Line />
            <Map />
            <Line />
            <Additional />
            <Line />
            <p className='hint create'>{this.langObjHandler(OPTIONAL)}</p>
            <AvailabilityDate { ...availabilityDateProps } />
            <Features />
            <Furnishings />
            <Description />
            <Line />
            <ManagedButton {...this.addAnnouncementManager()} />
          </>}
          {step === 'publishing' &&
          <div className='requesting'>
            <div className='inner'>
              <WindmillSpinner spinnerClass='windmill-medium-spinner'/>
            </div>
          </div>}
          {step === 'success' &&
          <Success
            changeApp={changeApp}
            id={id}
            category={category}
            district={district}
            area={area}
            changeAnnouncementShowData={changeAnnouncementShowData}
            langObjHandler={this.langObjHandler}
            isMobile={isMobile}
            lang={lang}
          />}
        </div>
      </>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AnnouncementCreate))
