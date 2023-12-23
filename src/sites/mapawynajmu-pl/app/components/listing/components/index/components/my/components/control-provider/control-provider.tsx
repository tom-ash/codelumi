import React from 'react'
import { VisibleController } from './visible-controller/visible-controller'

// TODO: Make component.
// @ts-ignore
export function controlProvider(announcement, index) {
  if (!announcement) return null

  const { editHref, editTitle } = announcement

  return (
    <div className='control'>
      <div className='info'>
        <div>
          {{ pl: 'Data utworzenia', en: 'Crated at' }['pl']} <strong>{announcement.createdAt.slice(0, 10)}</strong>
        </div>
      </div>
      <div className='info'>
        <div>
          {{ pl: 'Liczba odwiedzin', en: 'Visitors' }['pl']} <strong>{announcement.views}</strong>
        </div>
      </div>
      <div className='info'>
        <VisibleController
          activeUntil={announcement.activeUntil}
          // @ts-ignore: this
          extend={() => this.extend(announcement, index)}
        />
      </div>
      <div className='info'>
        {announcement.visible ? (
          <span>{{ pl: 'Widoczne', en: 'Visible' }['pl']}</span>
        ) : (
          <span>{{ pl: 'Ukryte', en: 'Hidden' }['pl']}</span>
        )}
        {announcement.visible
          ? // @ts-ignore
            this.buttonProvider('Ukryj', 'Hide', announcement, index, this.triggerVisible, ' hide-show')
          : // @ts-ignore
            this.buttonProvider('Pokaż', 'Show', announcement, index, this.triggerVisible, ' hide-show')}
      </div>
      <div className='edit-delete'>
        {/* @ts-ignore */}
        {this.buttonProvider('Edytuj', 'Edit', announcement, index, () => this.edit({ editHref, editTitle }), ' edit')}
        {/* @ts-ignore */}
        {this.buttonProvider(
          'Usuń',
          'Delete',
          announcement,
          index,
          () => {
            // @ts-ignore
            this.props.setControl({ beingDeleted: announcement.id })
          },
          ' delete'
        )}
      </div>
    </div>
  )
}
