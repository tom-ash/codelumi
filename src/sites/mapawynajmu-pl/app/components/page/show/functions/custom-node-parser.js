import React from 'react'
import ArticleLink from '../components/article-link/article-link.js'
import PictureHeader from '../components/picture-header/picture-header.js'

function customNodeParser(props) {
  const { nodeTag, index } = props

  if (nodeTag === 'al') return <ArticleLink {...props} key={index}/>
  if (nodeTag === 'pt') return <PictureHeader {...props} key={index}/>

  return null
}

export default customNodeParser
