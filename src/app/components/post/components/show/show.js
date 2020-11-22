import React from 'react'
import { componentDidMount } from './functions/lifecycle'
// import PostCreate from '../../../post/components/create/create'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'

class PostShow extends React.Component {
  constructor(props) {
    super(props)
    this.componentDidMount = componentDidMount
  }

  render() {
    const {
      className,
      data,
      beingEdited,
      languageHandler
    } = this.props

    if (!data) return null

    return (
      <div className={`post-container${className ? ` ${className}` : ''}`}>
        <h2 className='header'>
          {languageHandler(data.title)}
        </h2>
        <div className='body'>
          {languageHandler(data.body)}
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(PostShow)
