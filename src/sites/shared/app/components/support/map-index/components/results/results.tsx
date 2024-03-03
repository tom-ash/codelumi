import React from 'react'
import Map from './components/map/map'
import { useRender } from '../../../../../functions/store/use-render'
import { useControl } from '../../../../../functions/store/use-control'
import { List } from './components/list/list'

interface ResultsInterface {
  (props: {
    ListItem(): React.ReactElement
    ShowItem(): React.ReactElement
  }): React.ReactElement
}

export const Results: ResultsInterface = props => {
  const {
    ListItem,
    ShowItem,
  } = props

  const { 'listings/show': renderShow } = useRender()
  const { isSSR } = useControl()

  return (
    <section className='results'>
      <main>
        {!(renderShow && isSSR) && (
          <List ListItem={ListItem} />
        )}
        {renderShow && <ShowItem />}
      </main>
      <Map
        // @ts-ignore
        ListItem={ListItem}
        // @ts-ignore
        ShowItem={ShowItem}
      />
    </section>
  )
}
