import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import langHandler from '../../../../../../functions/lang-handler'
import { validateMap } from './functions/validate-map'
import * as lifecycle from './functions/lifecycle'
import { googleMapHandler } from '../../../../functions/google-map-handler'
import AddressInput from './components/address-input/address-input'
import addMarker from './functions/add-marker'

class AnnouncementCreatMap extends React.Component {
  constructor(props) {
    super(props)
    this.langHandler = langHandler.bind(this)
    this.componentDidMount = lifecycle.componentDidMount
    this.componentDidUpdate = lifecycle.componentDidUpdate
    this.componentWillUnmount = lifecycle.componentWillUnmount
    this.validateMap = validateMap.bind(this)
    this.googleMapHandler = googleMapHandler.bind(this)
    this.state = {
      autocompleteInput: '',
      autocompletes: [],
      showAutocompletes: false
    }
  }

  changeState = changedState => this.setState(changedState)

  render() {
    const showAutocompletes = this.state.autocompletes.length > 0 && this.state.showAutocompletes
    const { changeInputs, changeErrors } = this.props

    return (
      <div id='announcement-create-map' className='section'>
        <div className='hint'>
          {this.langHandler({
            pl: 'Podaj ulicę, numer i miasto, a lokalizacja wynajmowanej nieruchomości zostanie zaznaczona automatycznie. Alternatywnie, zaznacz lokalizację na mapie.',
            en: 'Provide the street, number and city and the location of the property being lease shall be marked automatically, Alternative, mark the location on the map.'
          })}
        </div>
        <div className='address-input'>
          <AddressInput
            autocompleteInput={this.state.autocompleteInput}
            autocompletes={this.state.autocompletes}
            setState={this.changeState}
            langHandler={this.langHandler}
            showAutocompletes={showAutocompletes}
            changeInputs={changeInputs}
            changeErrors={changeErrors}
          />
          {showAutocompletes &&
          <div className='autocompletes'>
            {this.state.autocompletes.map(autocomplete => (
              <div
                onClick={() => addMarker({ autocomplete, setState: this.changeState, changeInputs, changeErrors })}
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