import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'
import loadable from '@loadable/component'
const PostShow = loadable(() => import('./components/show/show'))
const PostCreate = loadable(() => import('./components/create/create'))

class Post extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      renderShow,
      renderCreate
    } = this.props

    return (
      <div id='post'>
        {renderShow && <PostShow />}
        {renderCreate && <PostCreate />}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Post))
