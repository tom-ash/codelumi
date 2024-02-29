import React from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { PostingIndexTile } from './components/tile/tile'
import { useData } from '../../../../../../shared/app/functions/store/use-data'

const PostingIndex = () => {
  useStyles(styles)

  const { postings } = useData()

  return (
    <div id='postings-index'>
      {postings.map((posting: any) => (
        <PostingIndexTile {...posting} />
      ))}
    </div>
  )
}

export default PostingIndex
