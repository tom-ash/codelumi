import React from 'react'
import { Results } from './components/results/results';

interface MapIndexInterface {
  (props: {
    Panel(): React.ReactElement;
    ListItem(): React.ReactElement
    ShowItem(): React.ReactElement
  }): React.ReactElement
}

export const MapIndex: MapIndexInterface = props => {
  const {
    Panel,
    ListItem,
    ShowItem,
  } = props

  return (
    <section id='map-index'>
      <Panel />
      <Results
        ListItem={ListItem}
        ShowItem={ShowItem}
      />
    </section>
  )
}
