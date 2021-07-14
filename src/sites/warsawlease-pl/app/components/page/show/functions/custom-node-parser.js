import React from 'react'
import RichText from '../components/rich-text/rich-text.js'
import ArticleLink from '../components/article-link/article-link.js'

function customNodeParser(props) {
  const { nodeTag, index } = props

  if (nodeTag === 'rt') return <RichText {...props} key={index}/>
  if (nodeTag === 'al') return <ArticleLink {...props} key={index}/>

  return null
}

export default customNodeParser
