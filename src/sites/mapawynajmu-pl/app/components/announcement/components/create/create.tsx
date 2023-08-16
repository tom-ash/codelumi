import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import Pictures from './components/pictures/pictures'
import Map from './components/map/map'
import { Additional } from './components/additional/additional'
import Features from './components/features/features'
import Furnishings from './components/furnishings/furnishings'
import Success from './components/success/success'
import { Spinner } from '../../../support/components/spinner/spinner'
import * as lifecycle from './functions/lifecycle'
import { ManagedButton } from 'managed-inputs'
import { publish } from './components/publishing/functions/publish'
import { validatePictures } from './components/pictures/functions/validate-pictures'
import { validateMap } from './components/map/functions/validate-map'
import withStyles from 'isomorphic-style-loader-react18/withStyles'
import styles from './styles/styles.scss'
import { H1, ADDITIONAL_DATA_HEADER } from './constants/texts'
import { Heading } from '../../../support/components/heading'
import UserNew from '../../../user/components/new/new'
import UserCreateEmailVerify from '../../../../../../shared/app/components/user/components/new/components/verification/verification'
import { Line } from '../../../support/components/line/line'
import { Category } from './components/category/category.tiles'
import { Promotion } from './components/promotion/promotion'
import { SubmitButton } from './components/submit/submit.button'

class AnnouncementCreate extends React.Component {
  // @ts-ignore
  constructor(props) {
    super(props)
    // @ts-ignore
    this.userCreateNode = React.createRef()
    this.componentDidMount = lifecycle.componentDidMount
    this.componentDidUpdate = lifecycle.componentDidUpdate
    // @ts-ignore
    this.validatePictures = validatePictures.bind(this)
    // @ts-ignore
    this.validateMap = validateMap.bind(this)
    // @ts-ignore
    this.publish = publish.bind(this)
  }

  render() {
    const {
      // @ts-ignore
      renderForm,
      // @ts-ignore
      renderEdit,
      // @ts-ignore
      renderVerification,
      // @ts-ignore
      renderSuccess,
      // @ts-ignore
      authorized,
      // @ts-ignore
      step,
    } = this.props

    if (step === 'publishing')
      return (
        <section
          id='listing-create'
          className={step}
        >
          <Spinner spinnerClass='windmill-medium-spinner' />
        </section>
      )

    return (
      <section
        id='listing-create'
        className={step}
      >
        {(renderForm || renderEdit) && (
          <div id='listing-new-form'>
            {/* TODO: LANG! */}
            <h1>{H1['pl']}</h1>
            <Line />
            <form>
              <Category />
              <Line />
              <Map />
              <Line />
              <Pictures />
              <Line />
              <div id='listing-create-additional'>
                <Heading
                  tier={2}
                  text={ADDITIONAL_DATA_HEADER['pl']}
                />
                <Additional />
                <Features />
                <Furnishings />
              </div>
              <Line />
              {!authorized && (
                <div id='listing-new-user'>
                  <Heading
                    tier={2}
                    text={'Dane konta (wymagane)'} // TODO: LANG!
                  />
                  <UserNew />
                </div>
              )}
              <Line />
              <Promotion />
              <Line />
              {/* @ts-ignore */}
              <SubmitButton publish={this.publish}/>
            </form>
          </div>
        )}
        {renderVerification && <UserCreateEmailVerify />}
        {renderSuccess && <Success {...this.props} />}
      </section>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AnnouncementCreate))
