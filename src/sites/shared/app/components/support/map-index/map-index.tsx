import React from 'react'
import { Results } from './components/results/results'
import { ItemShowInterface } from './types/item-show.interface'
import { ItemIndexInterface } from './types/item-index.interface'
import { PanelInterface } from './types/panel.interface'
import { Item } from './types/item.interface'
import { PinBuilder } from './types/pin-builder.interface'

interface MapIndexInterface {
  (props: {
    renderShow?: boolean;
    Panel: PanelInterface
    ListItem: ItemIndexInterface
    ShowItem: ItemShowInterface
    pinBuilder: PinBuilder
    items: Item[]
  }): React.ReactElement
}

export const MapIndex: MapIndexInterface = props => {
  const {
    items,
    renderShow = false,
    Panel,
    ListItem,
    ShowItem,
    pinBuilder
  } = props

  return (
    <section id='map-index'>
      <Panel />
      <Results
        ListItem={ListItem}
        renderShow={renderShow}
        ShowItem={ShowItem}
        items={items}
        pinBuilder={pinBuilder}
      />
    </section>
  )
}
