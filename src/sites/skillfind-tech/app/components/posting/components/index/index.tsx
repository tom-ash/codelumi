import React from 'react'
import { useStore } from 'react-redux'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { PostingIndexTile } from './components/tile/tile'

const PostingIndex = () => {
  useStyles(styles)

  const state = useStore().getState()
  const { data } = state
  const { postings } = data

  return (
    <div id='posting-index'>
      {postings.map((posting: any) => <PostingIndexTile {...posting} />)}
    </div>
  )
}

export default PostingIndex
