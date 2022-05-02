import React from 'react'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'

const hljs = require('highlight.js/lib/core')
hljs.registerLanguage('ruby', require('highlight.js/lib/languages/ruby'))
hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'))
hljs.registerLanguage('sql', require('highlight.js/lib/languages/sql'))
hljs.registerLanguage('pgsql', require('highlight.js/lib/languages/pgsql'))
hljs.registerLanguage('xml', require('highlight.js/lib/languages/xml'))
hljs.registerLanguage('css', require('highlight.js/lib/languages/css'))

const AVAILABLE_LANGUAGES = ['javascript', 'ruby', 'sql', 'pgsql', 'xml', 'css']

class CodeNode extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { nodeContent, jsonMeta } = this.props
    if (!jsonMeta) return null
    
    const { codeLang: language } = jsonMeta
    if (AVAILABLE_LANGUAGES.indexOf(language) === -1) return null

    const highlightedCode = hljs.highlight(nodeContent, { language }).value

    return (
      <pre>
        <code className={language} dangerouslySetInnerHTML={{__html: highlightedCode}} />
      </pre>
    )
  }
}

export default withStyles(styles)(CodeNode)
