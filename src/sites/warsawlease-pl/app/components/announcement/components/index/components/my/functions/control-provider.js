import React from 'react'

export function controlProvider(announcement, index) {
  return (
    <div className='control small-shadow'>
      <div className='active'>
        {this.langObjHandler({ pl: 'Aktywne do ', en: 'Active until '})} <strong>{announcement.activeUntil}</strong>
        {this.buttonProvider('Przedłuż', 'Extend', announcement, index, this.extend, ' extend')}
      </div>
      <div className='info-pieces'>
        <div className='info'>
          {
          announcement.visible ?
          <span><i className='far fa-eye' /> {this.langHandler('Widoczne', 'Visible')}</span> :
          <span><i className='far fa-eye-slash' /> {this.langHandler('Ukryte', 'Hidden')}</span>
          }
        </div>
        <div className='info'>
          {announcement.createdAt && announcement.createdAt.slice(0, 10)}
        </div>
        <div className='info'>
          {announcement.updatedAt && announcement.updatedAt.slice(0, 10)}
        </div>
        <div className='info'>
          <i className='fas fa-users' />{announcement.views}
        </div>
        <div className='float-clear' />
      </div>
      {this.buttonProvider('Edytuj', 'Edit', announcement, index, this.edit, ' edit')}
      {
      announcement.visible ?
      this.buttonProvider('Ukryj', 'Hide', announcement, index, this.triggerVisible, ' hide-show')
      :
      this.buttonProvider('Pokaż', 'Show', announcement, index, this.triggerVisible, ' hide-show')
      }
      {this.buttonProvider('Usuń', 'Delete', announcement, index, () => {
        this.props.changeControl({ beingDeleted: announcement.id })
        // window.location.reload()
      }, ' delete')}
      <div className='float-clear' />
    </div>
  )
}

