import React from 'react'
import { useData } from '../../../../../../shared/app/functions/store/use-data'
import { PostingIndexTile } from '../../../posting/components/index/components/tile/tile'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { Link } from '../../../../../../shared/app/components/support/link/link'

const UserPostingsIndex = () => {
  useStyles(styles)

  const { postings } = useData()

  return (
    <div id='user-postings-index'>
      <ul>
        {postings.map((posting: any) => {
          const {
            link: { href, label },
          } = posting

          return (
            <li>
              <div className='id'>{posting.id}</div>
              <PostingIndexTile {...posting} />
              <div className='panel'>
                {/* SHOW - TODO */}
                <Link
                  href={href}
                  customClassNames='edit'
                  label={label}
                />
                <button className='delete'>Usuń</button>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default UserPostingsIndex
