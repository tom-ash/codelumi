import React from 'react'
import loadable from '@loadable/component'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import AnnouncementCreatePrimary from './components/primary/primary'
import AnnouncementCreatePictures from './components/pictures/pictures'
import AnnouncementCreateMap from './components/map/map'
import AnnouncementCreateAdditional from './components/additional/additional'
import AnnouncementCreateFeatures from './components/features/features'
import AnnouncementCreateFurnishings from './components/furnishings/furnishings'
import AnnouncementCreateDescription from './components/description/description'
import AnnouncementCreateSuccess from './components/success/success'
import WindmillSpinner from '../../../support/components/spinner/components/windmill/windmill.js'
import * as lifecycle from './functions/lifecycle'
import * as managers from './functions/managers'
import { languageHandler, languageObjectHandler } from '../../../../functions/language-handler'
import { getAnnouncement } from './functions/get-announcement'
import { AnnouncementCreateSteps } from './components/steps/steps'
import { ManagedText, ManagedButton } from 'managed-inputs'
import { publish } from './components/publishing/functions/publish'
import { validatePictures } from './components/pictures/functions/validate-pictures'
import { validateMap } from './components/map/functions/validate-map'
import { savePicture } from './functions/save-picture'
import { saveAnnouncement } from './functions/save-announcement'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'
import PostShow from '../../../post/components/show/show'

const UserCreate = loadable(() => import('../../../user/components/create/create'), { ssr: false })

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
    this.emailVerificationCodeManager = managers.emailVerificationCodeManager.bind(this)
    this.confirmManager = managers.confirmManager.bind(this)
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
      changeApp,
      changeAnnouncementShowData,
      authorized,
      step,
      savedId,
      id,
      category,
      district,
      area,
      isMobile,
      language,
      scalableVectorGraphics,
      postData,
      changePostData,
      postCreateName,
      postCreateBody,
      changePostCreateInputs,
      admin
    } = this.props

    const newPostData = postCreateBody.en ? { body: postCreateBody } : postData

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
            scalableVectorGraphics={scalableVectorGraphics}
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
                <div className='text'>{this.languageObjectHandler({ pl: 'Dane niewymagane', en: 'Optional data' })}</div>
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
            <UserCreate venue='announcementCreate'/>
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
          <AnnouncementCreateSuccess
            changeApp={changeApp}
            id={id || savedId}
            category={category}
            district={district}
            area={area}
            changeAnnouncementShowData={changeAnnouncementShowData}
            languageObjectHandler={this.languageObjectHandler}
            isMobile={isMobile}
            language={language}
            scalableVectorGraphics={scalableVectorGraphics}
          />}
        </div>
        <PostShow
          className='create-announcement'
          name='create_announcement'
          data={newPostData}
          beingEdited={'create_announcement' === postCreateName}
          scalableVectorGraphics={scalableVectorGraphics}
          languageHandler={this.languageObjectHandler}
          admin={admin}
          language={language}
          changeData={changePostData}
          changePostCreateInputs={changePostCreateInputs}
        />
      </React.Fragment>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AnnouncementCreate))
