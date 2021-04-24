import React from 'react'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'

const hljs = require('highlight.js/lib/core')
hljs.registerLanguage('ruby', require('highlight.js/lib/languages/ruby'))

class CodeNode extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { nodeContent, attrs } = this.props

    const highlightedCode = hljs.highlight(nodeContent, {language: 'ruby'}).value

    return (
      <pre>
        <code dangerouslySetInnerHTML={{__html: highlightedCode}} />
      </pre>
    )
  }
}

export default withStyles(styles)(CodeNode)
