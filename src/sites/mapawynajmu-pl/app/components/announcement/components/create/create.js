import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
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
import { ManagedButton } from 'managed-inputs'
import { publish } from './components/publishing/functions/publish'
import { validatePictures } from './components/pictures/functions/validate-pictures'
import { validateMap } from './components/map/functions/validate-map'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'
import AvailabilityDate from './components/availability_date/availability_date'
import { H1, ADDITIONAL_DATA_HEADER } from './constants/texts'
import Header from '../../../support/components/heading'
import UserCreate from '../../../user/components/create/create.js'
import UserCreateEmailVerify from '../../../user/components/create/components/email/components/verify/verify.js'
import AppContext from '../../../../constants/context.js'
import Category from './components/category'
import AreaInput from './components/area-input'
import SeparationLine from '../../../support/components/separation-line/separation-line'

class AnnouncementCreate extends React.Component {
  constructor(props) {
    super(props)
    this.userCreateNode = React.createRef()
    this.componentDidMount = lifecycle.componentDidMount
    this.componentDidUpdate = lifecycle.componentDidUpdate
    this.componentWillUnmount = lifecycle.componentWillUnmount
    this.langHandler = langHandler.bind(this)
    this.addAnnouncementManager = managers.addAnnouncementManager.bind(this)
    this.validatePictures = validatePictures.bind(this)
    this.validateMap = validateMap.bind(this)
    this.publish = publish.bind(this)
  }

  static contextType = AppContext

  render() {
    const {
      area,
      category,
      renderForm,
      renderEdit,
      renderVerification,
      renderSuccess,
      connecting,
      lang,
      authorized,
      step,
      addAvailabilityDate,
      availabilityDate,
      changeControl,
      changeInputs,
    } = this.props

    const availabilityDateProps = {
      lang,
      availabilityDate,
      addAvailabilityDate,
      changeControl,
      changeInputs,
    }
    const headerText = this.langHandler(H1)

    const categoryProps = {
      currentCategory: category,
      changeInputs,
      langHandler: this.langHandler,
    }

    const areaInputProps = {
      area,
      changeInputs,
      langHandler: this.langHandler,
    }

    return (
      <section id='listing-create' className={step}>
        {(renderForm || renderEdit) && (
          <div id='form-container'>
            <h1>{headerText}</h1>
            <SeparationLine />
            {!connecting ? (
              <form>
                <Category {...categoryProps} />
                <SeparationLine />
                <Map />
                <SeparationLine />
                <Pictures />
                <SeparationLine />
                <div id='listing-create-additional'>
                  <Header tier={2} text={this.langHandler(ADDITIONAL_DATA_HEADER)} />
                  <AreaInput {...areaInputProps} />
                  <Additional />
                  <AvailabilityDate {...availabilityDateProps} />
                  <Features />
                  <Furnishings />
                  <Description />
                </div>
                <SeparationLine />
                <div id='listing-create-user'>
                  <Header tier={2} text={this.langHandler(ADDITIONAL_DATA_HEADER)} />
                  {!authorized && <UserCreate />}
                </div>
                <SeparationLine />
                <ManagedButton {...this.addAnnouncementManager()} />
              </form>
            ) : (
              <div className='requesting'>
                <div className='inner'>
                  <WindmillSpinner spinnerClass='windmill-medium-spinner' />
                </div>
              </div>
            )}
          </div>
        )}
        {renderVerification && <UserCreateEmailVerify />}
        {renderSuccess && <Success {...this.props} />}
      </section>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AnnouncementCreate))
