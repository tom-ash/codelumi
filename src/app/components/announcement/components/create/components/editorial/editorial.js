import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { languageObjectHandler } from '../../../../../../functions/language-handler'
import PostCreate from '../../../../../post/components/create/create'

class AnnouncementCreateEditorial extends React.Component {
  constructor(props) {
    super(props)
    this.languageObjectHandler = languageObjectHandler.bind(this)
  }

  componentDidMount() {
    const {
      changePostIndexData,
      posts
    } = this.props

    if (posts && posts.announcementCreateEditorial) return
    
    fetch(`${API_URL}/posts/announcementCreateEditorial`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(json => changePostIndexData({
      posts: {
        ...posts,
        announcementCreateEditorial: json
      }
    }))
  }

  render() {
    const {
      changePostCreateInputs,
      editedName,
      posts,
      admin
    } = this.props

    const post = posts.announcementCreateEditorial

    return (
      <div id='announcement-create-editorial'>
        <div className='container-abc'>
          <div className='cancel-edit'>
            {admin ?
            <div>
              {editedName === 'announcementCreateEditorial' ?
              <i
                className='far fa-window-close'
                onClick={() => changePostCreateInputs({ name: '' })}
              />
              :
              <i
                className='far fa-edit'
                onClick={() => changePostCreateInputs({
                  name: 'announcementCreateEditorial',
                  ...post && {
                    url: post && post.url,
                    title: post && post.title,
                    body: post && post.body
                  }
                })}
              />}
            </div>
            : null
            }
          </div>
          {post && editedName !== 'announcementCreateEditorial' &&
          <div>
            <h2>
              {this.languageObjectHandler(post.title)}
            </h2>
            <div className='posts'>
              {this.languageObjectHandler(post.body)}
            </div>
          </div>}
          {editedName === 'announcementCreateEditorial' && <PostCreate />}
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementCreateEditorial)
