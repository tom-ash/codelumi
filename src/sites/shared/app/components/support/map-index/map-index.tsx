import React from 'react'
import { Results } from './components/results/results'
import { ItemShowInterface } from './types/item-show.interface'
import { ItemIndexInterface } from './types/item-index.interface'
import { PanelInterface } from './types/panel.interface'
import { Item } from './types/item.interface'
import { PinBuilder } from './types/pin-builder.interface'
// import { MapTypeStyle } from '@types/google.maps'

export type MapStyles = google.maps.MapTypeStyle[]

interface MapIndexInterface {
  (props: {
    renderShow?: boolean
    Panel: PanelInterface
    ListItem: ItemIndexInterface
    ShowItem: ItemShowInterface
    pinBuilder: PinBuilder
    items: Item[]
    lang?: Lang
    mapStyles?: MapStyles
  }): React.ReactElement
}

export const MapIndex: MapIndexInterface = props => {
  const { items, renderShow = false, Panel, ListItem, ShowItem, pinBuilder, lang, mapStyles } = props

  return (
    <section id='map-index'>
      <Panel />
      <Results
        ListItem={ListItem}
        renderShow={renderShow}
        ShowItem={ShowItem}
        items={items}
        pinBuilder={pinBuilder}
        lang={lang}
        mapStyles={mapStyles}
      />
    </section>
  )
}
