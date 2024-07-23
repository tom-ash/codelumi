import React from 'react'
import { useData } from '../../../../../../shared/app/functions/store/use-data'
import { PostingIndexTile } from '../../../posting/components/index/components/tile/tile'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { Link } from '../../../../../../shared/app/components/support/link/link'
// import { SVG } from '../../../../../../shared/app/components/support/svg/svg'
import { useTexts } from '../../../../../../shared/app/functions/store/use-texts'
import { useDispatch } from 'react-redux'
import { useControl } from '../../../../../../shared/app/functions/store/use-control'
import { deleteApi } from '../../../../../../shared/app/functions/fetch-api/fetch-api'
import { changeUrl } from '../../../../../../shared/app/functions/routes/changers/change-url'
import { PostingImage as Image } from './components/image'

const UserPostingsIndex = () => {
  useStyles(styles)

  const { postings } = useData()
  const { name, cv, coverLetter, email, phoneNumber, gitHub, linkedIn, socialImage, download } = useTexts()
  const dispatch = useDispatch()
  const setControl = (value: any) => dispatch({ type: 'control', value })
  const { deletedPosting } = useControl()
  const { deletionMonit, cancel, confirm } = useTexts()

  return (
    <div id='user-postings-index'>
      <ul>
        {postings.map((posting: any) => {
          const {
            link: { href, label },
            // applications,
            image: imageSrc,
          } = posting

          return (
            <li className='posting-tile'>
              <div className='id'>{posting.id}</div>
              <PostingIndexTile {...posting} />
              <div className='panel'>
                <Link
                  href={href}
                  customClassNames='edit'
                  label={label}
                />
                <button
                  className='delete'
                  onClick={() => {
                    setControl({ deletedPosting: posting.id })
                  }}
                >
                  Usuń
                </button>
              </div>
              <Image
                heading={socialImage}
                imageSrc={imageSrc}
                // imageAlt
                postingId={posting.id}
                downloadLabel={download}
              />
            </li>
          )
        })}
      </ul>
      {deletedPosting && (
        <div
          className='deleted-posting-modal-cover'
          onClick={() => setControl({ deletedPosting: null })}
        >
          <div
            className='deleted-posting-modal'
            onClick={e => e.stopPropagation()}
          >
            <div className='monit'>{deletionMonit}</div>
            <div className='buttons'>
              <button
                className='cancel'
                onClick={() => setControl({ deletedPosting: null })}
              >
                {cancel}
              </button>
              <button
                className='confirm'
                onClick={async e => {
                  const response = await deleteApi({ path: `postings/${deletedPosting}` })

                  if (response) {
                    changeUrl({ href: window.location.pathname })
                  }
                }}
              >
                {confirm}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default UserPostingsIndex
