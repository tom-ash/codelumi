import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import './styles/styles.scss'

class UserEditCard extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id='user-edit-card'>
        <div className='card-show'>
        </div>
        <div className='card-features'>
          <div className='checkboxes'>
            <div className='label'>
              Elementy widoczne na wizytówce:
            </div>
          </div>
          <div className='save'>
            <button className='button'>
                Zapisz zmiany
            </button>
          </div>
          <div className='float-clear' />
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserEditCard)