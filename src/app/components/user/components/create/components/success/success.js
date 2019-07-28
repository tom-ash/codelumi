import React from 'react'
import { connect } from 'react-redux'
import * as mappers from './constants/mappers'
import './styles/styles.scss'

class UserCreateSuccess extends React.Component {
  render() {
    return (
      <div id='user-create-success'>
        <div className='monit'>
          Gratulacje {this.props.userName}! Rejestracja konta przebiegła pomyślnie. Możesz teraz dodać nowe ogłoszenie,
          jak również zmienić sposób w&nbsp;jaki prezentowane są&nbsp;odwiedzającym Twoje informacje kontaktowe
          wyświetlane razem z Twoimi ogłoszeniami.
        </div>
        <button
          className='announcement button'>
          Dodaj ogłoszenie
        </button>
        <button
          className='showcase button'>
          Edytuj wizytówkę
        </button>
      </div>
    )
  }
}

export default connect(mappers.mapStateToProps, mappers.mapDispatchToProps)(UserCreateSuccess);
