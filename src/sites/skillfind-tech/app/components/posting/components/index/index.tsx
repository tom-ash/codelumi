import React from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { PostingIndexTile } from './components/tile/tile'
import { useData } from '../../../../../../shared/app/functions/store/use-data'
import { MapIndex } from '../../../../../../shared/app/components/support/map-index/map-index'

const Panel = () => {
  return <>PANEL</>
}

const ShowItem = () => {
  return <>SHOW_ITEM</>
}

const pinBuilder = () => {

  return ({
    id: 42,
    latitude: 42,
    longitude: 42,
    htmlContent: '42',
    className: '',
    href: '',
  })

}

const PostingIndex = () => {
  useStyles(styles)

  const { postings } = useData()

  return (
    <div id='postings-index'>
      <MapIndex
        Panel={Panel}
        ListItem={PostingIndexTile}
        ShowItem={ShowItem}
        items={postings}
        pinBuilder={pinBuilder}
      />
    </div>
  )
}

export default PostingIndex
