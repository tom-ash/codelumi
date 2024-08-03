import React from 'react'
import { useControl } from '../../../../../functions/store/use-control'
import { List } from './components/list/list'
import { Map } from './components/map/map'
import { ItemShowInterface } from '../../types/item-show.interface'
import { ItemIndexInterface } from '../../types/item-index.interface'
import { Item } from '../../types/item.interface'
import { PinBuilder } from '../../types/pin-builder.interface'
import { MapStyles } from '../../map-index'

interface ResultsInterface {
  (props: {
    items: Item[]
    renderShow: boolean
    ListItem: ItemIndexInterface
    ShowItem: ItemShowInterface
    pinBuilder: PinBuilder
    lang?: Lang
    mapStyles?: MapStyles
  }): React.ReactElement
}

export const Results: ResultsInterface = props => {
  const { renderShow, ListItem, ShowItem, items, pinBuilder, lang, mapStyles } = props
  const { isSSR } = useControl()

  return (
    <section
      id='results'
      className='results'
    >
      <main>
        {!(renderShow && isSSR) && (
          <List
            ListItem={ListItem}
            renderShow={renderShow}
            items={items}
          />
        )}
        {renderShow && <ShowItem />}
      </main>
      <Map
        items={items}
        pinBuilder={pinBuilder}
        lang={lang}
        mapStyles={mapStyles}
      />
    </section>
  )
}
