import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import AnnouncementCreatePrimary from './components/primary/primary'
import AnnouncementCreatePictures from './components/pictures/pictures'
import AnnouncementCreateFeatures from './components/features/features'
import AnnouncementCreateFurnishings from './components/furnishings/furnishings'
import AnnouncementCreateDescription from './components/description/description'
import AnnouncementCreateMap from './components/map/map'

import { languageHandler, languageObjectHandler } from '../../../../functions/language-handler'
import { getAnnouncement } from './functions/get-announcement'
import { sectionHeaderProvider } from '../../../../functions/providers/headers'
import * as lifecycle from './functions/lifecycle'
import AnnouncementCreateAdditional from './components/additional/additional'
import { AnnouncementCreateSteps } from './components/steps/steps'
import AnnouncementCreateEditorial from './components/editorial/editorial'

import UserCreateEmail from '../../../user/components/create/components/email/email'

import * as managers from './functions/managers'
import { ManagedText, ManagedButton } from 'managed-inputs'

import { publish } from './components/publishing/functions/publish'
import WindmillSpinner from '../../../support/components/spinner/components/windmill/windmill.js'

import { validatePictures } from './components/pictures/functions/validate-pictures'
import { validateMap } from './components/map/functions/validate-map'

import { savePicture } from './functions/save-picture'
import { saveAnnouncement } from './functions/save-announcement'

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
    this.languageHandler = languageHandler.bind(this)
    this.languageObjectHandler = languageObjectHandler.bind(this)
    this.getAnnouncement = getAnnouncement.bind(this)
    this.sectionHeaderProvider = sectionHeaderProvider.bind(this)
    this.emailVerificationCodeManager = managers.emailVerificationCodeManager.bind(this)
    this.confirmManager = managers.confirmManager.bind(this)
    this.goToAnnouncementManager = managers.goToAnnouncementManager.bind(this)
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
      authorized,
      showDescription,
      changeControl,
      step
    } = this.props

    return (
      <React.Fragment>
        <div id='announcement-create'>
          <div className='page-header'>
            <h1>
              {step === 'form' && this.languageHandler(<span>Dodaj bezpłatne ogłoszenie wynajmu nieruchomości w&nbsp;Warszawie</span>, 'Add Free Announcement of Real Estate Lease in Warsaw')}
              {step === 'account-data' && this.languageHandler('Dane konta', 'Account Data')}
              {step === 'confirmation' && this.languageHandler('Potwierdzenie adresu email', 'Email Address Confirmation')}
              {step === 'publishing' && this.languageHandler('Zapisywanie Ogłoszenia', 'Saving Announcement')}
              {step === 'success' && this.languageHandler('Gratulacje!', 'Congratulations!')}
            </h1>
          </div>
          <AnnouncementCreateSteps
            authorized={authorized}
            step={step}
          />
          {step === 'form' &&
          <form>
            <div className='required-inputs'>
              <AnnouncementCreatePrimary />
              <AnnouncementCreatePictures />
              <AnnouncementCreateMap />
            </div>
            <div className='optional-inputs'>
              <div className='separation-line' />
              <h2 className='optional'>
                <div className='text'>{this.languageObjectHandler({ pl: 'Dane dodatkowe - niewymagane', en: 'Optional data - not required' })}</div>
                <div className='float-clear' />
              </h2>
              <AnnouncementCreateAdditional />
              <AnnouncementCreateFeatures />
              <AnnouncementCreateFurnishings />
              <AnnouncementCreateDescription />
            </div>
            <div className='add-announcement-button-container'>
              <div className='separation-line' />
              <div className='inner'>
                <ManagedButton {...this.addAnnouncementManager()} />
              </div>
            </div>
          </form>}
          {step === 'account-data' &&
          <div className='account-data'>
            <UserCreateEmail />
          </div>}
          {step === 'confirmation' &&
          <div className='success-container'>
            <div className='inner'>
              <div className='input-explanation'>
                {this.languageObjectHandler({
                  pl: 'W celu potwierdzenia adresu email prosimy o podanie kodu potwierdzającego, który został wysłany na podany adres email.',
                  en: 'To confirm the email address we ask to provide the confirmation code that was sent to the provided email address.'
                })}
              </div>
              <ManagedText {...this.emailVerificationCodeManager()} />
              <ManagedButton {...this.confirmManager()} />
            </div>
          </div>}
          {step === 'publishing' &&
          <div className='requesting'>
            <div className='inner'>
              <WindmillSpinner spinnerClass='windmill-medium-spinner'/>
            </div>
          </div>}
          {step === 'success' &&
          <div className='success-container'>
            <div className='input-explanation'>
              {this.languageObjectHandler({
                pl: 'Ogłoszenie zostało dodane pomyślnie!',
                en: 'The Announcement has been added successfully.'
              })}
            </div>
            <div className='separation-line' />
            <ManagedButton {...this.goToAnnouncementManager()} />
          </div>}
        </div>
        <AnnouncementCreateEditorial />
      </React.Fragment>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementCreate)
