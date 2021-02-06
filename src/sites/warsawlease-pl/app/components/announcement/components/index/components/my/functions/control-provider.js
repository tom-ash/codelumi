import React from 'react'
import SeparationLine from '../../../../../../support/components/separation-line/separation-line.js'

export function controlProvider(announcement, index) {
  if (!announcement) return null

  return (
    <div className='control'>
      <div className='info'>
        {this.langObjHandler({ pl: 'Aktywne do ', en: 'Active until '})} <strong>{announcement.activeUntil.slice(0, 10)}</strong>
      </div>
      {this.buttonProvider('Przedłuż', 'Extend', announcement, index, this.extend, ' extend')}
      <SeparationLine />
      <div className='info'>
        {announcement.visible ?
        <span>{this.langHandler('Widoczne', 'Visible')}</span>
        : <span>{this.langHandler('Ukryte', 'Hidden')}</span>}
      </div>
      {announcement.visible ?
      this.buttonProvider('Ukryj', 'Hide', announcement, index, this.triggerVisible, ' hide-show')
      : this.buttonProvider('Pokaż', 'Show', announcement, index, this.triggerVisible, ' hide-show')}
      <SeparationLine />
      <div className='info'>
      {this.langHandler('Data utworzenia', 'Crated at')} <strong>{announcement.createdAt.slice(0, 10)}</strong>
      </div>
      <SeparationLine />
      <div className='info'>
        {this.langHandler('Liczba odwiedzin', 'Visitors')} <strong>{announcement.views}</strong>
      </div>
      <SeparationLine />
      {this.buttonProvider('Edytuj', 'Edit', announcement, index, this.edit, ' edit')}
      <SeparationLine />
      {this.buttonProvider('Usuń', 'Delete', announcement, index, () => {
        this.props.changeControl({ beingDeleted: announcement.id })
      }, ' delete')}
    </div>
  )
}

