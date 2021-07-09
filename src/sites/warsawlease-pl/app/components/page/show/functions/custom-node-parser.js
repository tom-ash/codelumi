import React from 'react'
import RichText from '../components/rich-text/rich-text.js'

function customNodeParser(props) {
  const { nodeTag, index } = props

  if (nodeTag === 'rt') return <RichText {...props} key={index}/>

  return null
}

export default customNodeParser
