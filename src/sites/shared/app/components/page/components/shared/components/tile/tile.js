import React from 'react'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'
import { jsonToJsxParser } from './functions/json_to_jsx_parser'

class PageTile extends React.Component {
  constructor(props) {
    super(props)
    this.jsonToJsxParser = jsonToJsxParser.bind(this)
  }

  render() {
    const {
      name,
      body
    } = this.props

    return (
      <>
        <div className={`post-container ${name}`}>
          <div className='body'>
            {this.jsonToJsxParser(body)}
          </div>
        </div>
      </>
    )
  }
}

export default withStyles(styles)(PageTile)
