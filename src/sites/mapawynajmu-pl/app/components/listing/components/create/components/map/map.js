import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { validateMap } from './functions/validate-map'
import * as lifecycle from './functions/lifecycle'
import { AddressInput } from './components/address-input/address-input'
import addPin from './functions/add-pin'
import { Heading } from '../../../../../support/components/heading'
import Info from '../../../../../../../../shared/app/components/support/info'
import { GoogleMap } from '../../../../../../../../shared/app/components/support/google-map/google-map'

const HEADING = {
  pl: 'Lokalizacja (wymagana)',
  en: 'Location (required)',
}

const INFO = {
  pl: 'Podaj adres lub kliknij na mapie, aby wybrać lokalizację.',
  en: 'Provide address or click on the map to select location.',
}

class AnnouncementCreatMap extends React.Component {
  constructor(props) {
    super(props)
    this.componentDidMount = lifecycle.componentDidMount
    this.componentDidUpdate = lifecycle.componentDidUpdate
    this.componentWillUnmount = lifecycle.componentWillUnmount
    this.validateMap = validateMap.bind(this)
    this.state = {
      autocompleteInput: '',
      autocompletes: [],
      showAutocompletes: false,
    }
  }

  setStore = changedState => this.setState(changedState)

  render() {
    const showAutocompletes = this.state.autocompletes.length > 0 && this.state.showAutocompletes
    const { setInputs, setErrors } = this.props
    const headingProps = {
      tier: 2,
      text: HEADING['pl'],
    }
    const infoProps = {
      message: INFO['pl'],
    }

    return (
      <div
        id='listing-create-map'
        className='section'
      >
        <Heading {...headingProps} />
        <Info {...infoProps} />
        <div className='address-input'>
          <AddressInput
            autocompleteInput={this.state.autocompleteInput}
            autocompletes={this.state.autocompletes}
            setState={this.setStore}
            showAutocompletes={showAutocompletes}
            setInputs={setInputs}
            setErrors={setErrors}
          />
          {showAutocompletes && (
            <div className='autocompletes'>
              {this.state.autocompletes.map(autocomplete => (
                <div
                  onClick={() => addPin({ autocomplete, setState: this.setStore, setInputs, setErrors })}
                  key={autocomplete.place_id}
                >
                  {autocomplete.description}
                </div>
              ))}
            </div>
          )}
        </div>
        <GoogleMap />
        <div className='error'>{this.props.error && this.props.error['pl']}</div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementCreatMap)
