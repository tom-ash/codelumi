import React from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { useData } from '../../../../../../shared/app/functions/store/use-data';

interface PostingShowInterface {
  (props: {}): React.ReactElement;
}

const PostingsShow: PostingShowInterface = (props) => {
  useStyles(styles)

  const { posting } = useData()

  console.log('posting', posting)

  return (
    <div id='postings-show'>
      {JSON.stringify(posting, null, 2)}
    </div>
  )
}

export default PostingsShow
