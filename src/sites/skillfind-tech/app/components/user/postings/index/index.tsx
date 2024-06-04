import React from 'react'
import { useData } from '../../../../../../shared/app/functions/store/use-data'
import { PostingIndexTile } from '../../../posting/components/index/components/tile/tile'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { Link } from '../../../../../../shared/app/components/support/link/link'
import { SVG } from '../../../../../../shared/app/components/support/svg/svg'
import { useTexts } from '../../../../../../shared/app/functions/store/use-texts'
import { useDispatch } from 'react-redux'
import { useControl } from '../../../../../../shared/app/functions/store/use-control'
import { deleteApi } from '../../../../../../shared/app/functions/fetch-api/fetch-api'
import { changeUrl } from '../../../../../../shared/app/functions/routes/changers/change-url'

const UserPostingsIndex = () => {
  useStyles(styles)

  const { postings } = useData()
  const { name, cv, coverLetter, email, phoneNumber, gitHub, linkedIn } = useTexts()
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
            applications,
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
                    // setCon
                    setControl({ deletedPosting: posting.id })
                  }}
                >
                  Usuń
                </button>
              </div>
              <div className='applications'>
                <div className='header'>
                  <span className='name'>{name}</span>
                  <span className='cv'>{cv}</span>
                  {/* <span className='cv'>{coverLetter}</span> */}
                  <span className='email'>{email}</span>
                  <span className='email'>{phoneNumber}</span>
                  <span className='email'>{gitHub}</span>
                  <span className='email'>{linkedIn}</span>
                </div>
                <ul>
                  {/* @ts-ignore */}
                  {applications.map(application => {
                    const { cv, coverLetter, email, firstName, lastName, gitHubAccount, linkedInProfile, phoneNumber } =
                      application

                    const cvHref = `https://skillfind-tech-dev.s3.eu-central-1.amazonaws.com/postings/${posting.id}/applications/${cv}`

                    return (
                      <li>
                        <span className='name'>
                          {firstName} {lastName}
                        </span>
                        <span className='cv'>
                          <a
                            href={cvHref}
                            download='newfilename'
                            type='application/octet-stream'
                          >
                            <SVG name='filePdf' />
                          </a>
                        </span>
                        {/* <span className='cv'>
                          {coverLetter ? (
                            <a
                              href={cvHref}
                              download='newfilename'
                              type='application/octet-stream'
                            >
                              <SVG name='filePdf' />
                            </a>
                          ) : (
                            <SVG
                              name='filePdf'
                              className='disabled'
                            />
                          )}
                        </span> */}
                        <span className='email'>
                          <a href={`mailto:${email}`}>
                            <SVG name='envelope' />
                          </a>
                        </span>
                        <span className='email'>
                          {phoneNumber ? (
                            <a href={`tel:${phoneNumber}`}>
                              <SVG name='phone' />
                            </a>
                          ) : (
                            <SVG
                              name='phone'
                              className='disabled'
                            />
                          )}
                        </span>
                        <span className='email'>
                          {gitHubAccount ? (
                            <a href={gitHubAccount}>
                              <SVG name='github' />
                            </a>
                          ) : (
                            <SVG
                              name='github'
                              className='disabled'
                            />
                          )}
                        </span>
                        <span className='email'>
                          {linkedInProfile ? (
                            <a href={linkedInProfile}>
                              <SVG name='linkedinSquare' />
                            </a>
                          ) : (
                            <SVG
                              name='linkedinSquare'
                              className='disabled'
                            />
                          )}
                        </span>
                      </li>
                    )
                  })}
                </ul>
              </div>
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
