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
hljs.registerLanguage('typescript', require('highlight.js/lib/languages/typescript'))

const AVAILABLE_LANGUAGES = ['javascript', 'ruby', 'sql', 'pgsql', 'xml', 'css', 'typescript']

class CodeNode extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { node, nodeContent, jsonMeta } = this.props
    if (!jsonMeta) return null

    const { codeLang: nodeCodeLang } = node
    const { codeLang: metaCodeLang } = jsonMeta

    const codeLang = nodeCodeLang || metaCodeLang

    if (AVAILABLE_LANGUAGES.indexOf(codeLang) === -1) return null

    const highlightedCode = hljs.highlight(nodeContent, { language: codeLang }).value

    return (
      <pre>
        <code className={codeLang} dangerouslySetInnerHTML={{__html: highlightedCode}} />
      </pre>
    )
  }
}

export default withStyles(styles)(CodeNode)
