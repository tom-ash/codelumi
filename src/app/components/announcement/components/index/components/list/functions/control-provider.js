import React from 'react'

export function controlProvider(announcement, index) {
  return (
    <div className='control'>
      <div className='info-pieces'>
        <div className='info'>
          {
          announcement.visible ?
          <span><i className='far fa-eye' /> {this.languageHandler('Widoczne', 'Visible')}</span> :
          <span><i className='far fa-eye-slash' /> {this.languageHandler('Ukryte', 'Hidden')}</span>
          }
        </div>
        <div className='info'>
          <i className='fas fa-plus' />{announcement.createdAt.slice(0, 10)}
        </div>
        <div className='info'>
          <i className='fas fa-sync-alt' />{announcement.updatedAt.slice(0, 10)}
        </div>
        <div className='info'>
          <i className='fas fa-users' />{announcement.views}
        </div>
        <div className='float-clear' />
      </div>
      <div className='buttons'>
        {this.buttonProvider('Edytuj', 'Edit', announcement, index, this.edit)}
        {
        announcement.visible ?
        this.buttonProvider('Ukryj', 'Hide', announcement, index, this.triggerVisible)
        :
        this.buttonProvider('Pokaż', 'Show', announcement, index, this.triggerVisible)
        }
        {this.buttonProvider('Usuń', 'Delete', announcement, index, () => this.props.changeControl({ beingDeleted: announcement.id }), ' last')}
        <div className='float-clear' />
      </div>
      <div className='float-clear' />
    </div>
  )
}

