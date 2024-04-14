import React from 'react'
import { useRender } from '../../../../../functions/store/use-render'
import { useControl } from '../../../../../functions/store/use-control'
import { List } from './components/list/list'
import { Map } from './components/map/map'
import { ItemShowInterface } from '../../types/item-show.interface'
import { ItemIndexInterface } from '../../types/item-index.interface'
import { Item } from '../../types/item.interface'
import { PinBuilder } from '../../types/pin-builder.interface'

interface ResultsInterface {
  (props: {
    items: Item[]
    renderShow: boolean,
    ListItem: ItemIndexInterface
    ShowItem: ItemShowInterface
    pinBuilder: PinBuilder
  }): React.ReactElement
}

export const Results: ResultsInterface = props => {
  const { renderShow, ListItem, ShowItem, items, pinBuilder } = props
  const { isSSR } = useControl()

  return (
    <section className='results'>
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
      />
    </section>
  )
}
