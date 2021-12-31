import React from 'react'
import useStyles from 'isomorphic-style-loader/useStyles'
import styles from './styles/styles.scss'

const textToJson = text => {

  try {
    const json = JSON.parse(text)

    if (json.t === 'a') {
      return (
        `<a href=${json.href} target="_blank">${json.c}</a>`
      )
    }
  } catch {
    return 'Invalid JSON'
  }
}

const RichText = props => {
  const { nodeContent } = props

  useStyles(styles)

  return (
    <div
      className='rich-text'
      dangerouslySetInnerHTML={{__html: nodeContent.replace(/{.+}/g, fullMatch => {
        return `<span class='inner-code'>${textToJson(fullMatch)}</span>`
      })}}
    />
  )
}

export default RichText
