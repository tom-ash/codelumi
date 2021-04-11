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
import langHandler from '../../../../functions/lang-handler'
import { AnnouncementCreateSteps } from './components/steps/steps'
import { ManagedButton } from 'managed-inputs'
import { publish } from './components/publishing/functions/publish'
import { validatePictures } from './components/pictures/functions/validate-pictures'
import { validateMap } from './components/map/functions/validate-map'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'
import Line from '../../../support/components/separation-line/separation-line'
import AvailabilityDate from './components/availability_date/availability_date'
import { PRIMARY_DATA_HEADER, PRIMARY_DATA_HINT, PICTURES_HEADER, PICTURES_HINT, LOCATION_HEADER, LOCATION_HINT, ADDITIONAL_DATA_HEADER, ADDITIONAL_DATA_HINT } from './constants/texts'
import Header from '../../../support/components/header/header'
import UserCreate from '../../../user/components/create/create.js'
import UserCreateEmailVerify from '../../../user/components/create/components/email/components/verify/verify.js'
import Hint from '../../../support/components/hint/hint.js'
import AppContext from '../../../../constants/context.js'
import { categoryManager, districtManager, areaManager } from './components/primary/functions/managers'
import { handleErrorOnValidate } from './components/primary/functions/errors-handler'

class AnnouncementCreate extends React.Component {
  constructor(props) {
    super(props)
    this.userCreateNode = React.createRef()
    this.componentDidMount = lifecycle.componentDidMount
    this.componentDidUpdate = lifecycle.componentDidUpdate
    this.componentWillUnmount = lifecycle.componentWillUnmount
    this.langHandler = langHandler.bind(this)
    this.addAnnouncementManager = managers.addAnnouncementManager.bind(this)
    this.categoryManager = categoryManager.bind(this)
    this.districtManager = districtManager.bind(this)
    this.areaManager = areaManager.bind(this)
    this.validatePictures = validatePictures.bind(this)
    this.validateMap = validateMap.bind(this)
    this.publish = publish.bind(this)
    this.handleErrorOnValidate = handleErrorOnValidate.bind(this)
  }

  static contextType = AppContext

  render() {
    const {
      renderForm, renderVerification, renderSuccess,
      connecting, lang, authorized, step, addAvailabilityDate, availabilityDate,
      changeControl, changeInputs
    } = this.props

    const availabilityDateProps = { lang, availabilityDate, addAvailabilityDate, changeControl, changeInputs }
    const headerText = this.langHandler({ pl: 'Dodaj bezpłatne ogłoszenie wynajmu nieruchomości w Warszawie', en: 'Add Free Announcement of Real Estate Lease in Warsaw' })

    return (
      <>
        <AnnouncementCreateSteps authorized={authorized} step={step} />
        <div id='announcement-create' className={step}>
          {renderForm &&
          <>
            <Header tier={1} text={headerText} svg='plus' />
            {!connecting ?
            <>  
              <Header tier={2} text={this.langHandler(PRIMARY_DATA_HEADER)} />
              <Hint text={this.langHandler(PRIMARY_DATA_HINT)} />
              <Primary />
              <Line />
              <Header tier={2} text={this.langHandler(PICTURES_HEADER)} />
              <Hint text={this.langHandler(PICTURES_HINT)} />
              <Pictures />
              <Line />
              <Header tier={2} text={this.langHandler(LOCATION_HEADER)} />
              <Hint text={this.langHandler(LOCATION_HINT)} />
              <Map />
              <Line />
              <Header tier={2} text={this.langHandler(ADDITIONAL_DATA_HEADER)} />
              <Hint text={this.langHandler(ADDITIONAL_DATA_HINT)} />
              <Additional />
              <AvailabilityDate { ...availabilityDateProps } />
              <Features />
              <Furnishings />
              <Description />
              <Line />
              {!authorized &&
              <>
                <UserCreate />
                <Line />
              </>}
              <ManagedButton {...this.addAnnouncementManager()} />
            </>
            :
            <div className='requesting'>
              <div className='inner'>
                <WindmillSpinner spinnerClass='windmill-medium-spinner'/>
              </div>
            </div>}
          </>}
          {renderVerification && <UserCreateEmailVerify />}
          {renderSuccess && <Success {...this.props} />}
        </div>
      </>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AnnouncementCreate))
