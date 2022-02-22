import React from 'react'
import ArticleLink from '../components/article-link/article-link.js'

function customNodeParser(props) {
  const { nodeTag, index } = props

  if (nodeTag === 'al') return <ArticleLink {...props} key={index}/>

  return null
}

export default customNodeParser
