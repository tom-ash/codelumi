import React from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { PostingIndexTile } from './components/tile/tile'
import { useData } from '../../../../../../shared/app/functions/store/use-data'
import { MapIndex } from '../../../../../../shared/app/components/support/map-index/map-index'
import { pinBuilder } from './functions/pin-builder'
import { Panel } from './components/panel/panel'
import { ItemShowInterface } from '../../../../../../shared/app/components/support/map-index/types/item-show.interface'
import { mapStyles } from '../../styles/map-styles'

interface PostingIndex {
  (props: { ShowItem: ItemShowInterface; renderShow: boolean }): React.ReactElement
}

const PostingIndex: PostingIndex = props => {
  useStyles(styles)

  const { ShowItem, renderShow } = props
  const { postings } = useData()

  return (
    <div id='postings-index'>
      <MapIndex
        renderShow={renderShow}
        Panel={Panel}
        ListItem={PostingIndexTile}
        ShowItem={ShowItem}
        items={postings}
        pinBuilder={pinBuilder}
        lang='en'
        // @ts-ignore
        mapStyles={mapStyles}
      />
    </div>
  )
}

export default PostingIndex
