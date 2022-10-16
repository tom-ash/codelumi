import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import langHandler from '../../../../../../functions/lang-handler'
import { validateMap } from './functions/validate-map'
import * as lifecycle from './functions/lifecycle'
import AddressInput from './components/address-input/address-input'
import addMarker from './functions/add-marker'
import Heading from '../../../../../support/components/heading'
import Info from '../../../../../../../../shared/app/components/support/info'

const HEADING = {
  pl: 'Lokalizacja (wymagana)',
  en: 'Location (required)'
}

const INFO = {
  pl: 'Podaj adres lub kliknij na mapie, aby wybrać lokalizację.',
  en: 'Provide address or click on the map to select location.'
}

class AnnouncementCreatMap extends React.Component {
  constructor(props) {
    super(props)
    this.langHandler = langHandler.bind(this)
    this.componentDidMount = lifecycle.componentDidMount
    this.componentDidUpdate = lifecycle.componentDidUpdate
    this.componentWillUnmount = lifecycle.componentWillUnmount
    this.validateMap = validateMap.bind(this)
    this.state = {
      autocompleteInput: '',
      autocompletes: [],
      showAutocompletes: false
    }
  }

  setStore = changedState => this.setState(changedState)

  render() {
    const showAutocompletes = this.state.autocompletes.length > 0 && this.state.showAutocompletes
    const { changeInputs, changeErrors } = this.props
    const headingProps = {
      tier: 2,
      text: this.langHandler(HEADING)
    }
    const infoProps = {
      message: this.langHandler(INFO)
    }

    return (
      <div id='announcement-create-map' className='section'>
        <Heading {...headingProps} />
        <Info {...infoProps} />
        <div className='address-input'>
          <AddressInput
            autocompleteInput={this.state.autocompleteInput}
            autocompletes={this.state.autocompletes}
            setState={this.setStore}
            langHandler={this.langHandler}
            showAutocompletes={showAutocompletes}
            changeInputs={changeInputs}
            changeErrors={changeErrors}
          />
          {showAutocompletes &&
          <div className='autocompletes'>
            {this.state.autocompletes.map(autocomplete => (
              <div
                onClick={() => addMarker({ autocomplete, setState: this.setStore, changeInputs, changeErrors })}
                key={autocomplete.place_id}
              >
                {autocomplete.description}
              </div>
            ))}
          </div>}
        </div>
        <div id='google-map-container' className='map'>
          <div id='google-map' className={this.props.error.pl ? 'map-error' : ''}/>
        </div>
        <div className='error'>
          {this.langHandler(this.props.error)}
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementCreatMap)