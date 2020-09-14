import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { languageObjectHandler } from '../../../../functions/language-handler'
import PostCreate from '../../../post/components/create/create'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'

class VisitorWelcome extends React.Component {
  constructor(props) {
    super(props)
    this.languageObjectHandler = languageObjectHandler.bind(this)
  }

  componentDidMount() {
    const {
      changePostIndexData,
      posts
    } = this.props

    if (posts && posts.welcome) return
    
    fetch(`${API_URL}/posts/welcome`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        return response.json()
      }
    })
    .then(json => {
      changePostIndexData({ posts: { ...posts, welcome: json }})
    })
  }

  render() {
    const {
      changePostCreateInputs,
      showAnnouncementIndexMap,
      showAnnouncementIndexCatalogue,
      editedName,
      posts,
      admin
    } = this.props

    if (!showAnnouncementIndexMap || showAnnouncementIndexCatalogue) return null

    const welcomePost = posts.welcome

    return (
      <div id='visitor-welcome' className={showAnnouncementIndexCatalogue ? 'hidden' : 'visible'}>
        <div className='container'>
          <div className='cancel-edit'>
            {admin ?
            <div>
              {editedName === 'welcome' ?
              <i className='far fa-window-close' onClick={() => changePostCreateInputs({ name: '' })} />
              : <i className='far fa-edit' onClick={() => changePostCreateInputs({
                name: 'welcome',
                ...welcomePost && {
                  title: welcomePost && welcomePost.title,
                  body: welcomePost && welcomePost.body
                }
              })} />}
            </div>
            : null
            }
          </div>
          {welcomePost && editedName !== 'welcome' &&
          <div>
            <h2>
              {this.languageObjectHandler(welcomePost.title)}
            </h2>
            <div className='posts'>
              {this.languageObjectHandler(welcomePost.body)}
            </div>
          </div>}
          {editedName === 'welcome' && <PostCreate />}
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(VisitorWelcome))
