import React from 'react'

export function controlProvider(announcement, index) {
  return (
    <div className='control'>
      <div className='info-pieces'>
        <div className='info'>
          <i className='fas fa-plus' />{announcement.created_at.slice(0, 10)}
        </div>
        <div className='info'>
          <i className='fas fa-sync-alt' />{announcement.updated_at.slice(0, 10)}
        </div>
        <div className='info'>
          <i className='far fa-eye' />{announcement.views}
        </div>
        <div className='float-clear' />
      </div>
      <div className='buttons'>
        {this.buttonProvider('Edytuj', 'Edit', announcement, index, this.edit)}
        {
        announcement.active ?
        this.buttonProvider('Dezaktywuj', 'De-activate', announcement, index, this.activate)
        :
        this.buttonProvider('Aktywuj', 'Activate', announcement, index, this.activate)
        }
        {this.buttonProvider('Usuń', 'Delete', announcement, index, () => this.props.changeControl({ beingDeleted: announcement.id }), ' last')}
        <div className='float-clear' />
      </div>
      <div className='float-clear' />
    </div>
  )
}

