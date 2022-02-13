import React from 'react'
import useStyles from 'isomorphic-style-loader/useStyles'
import styles from './styles/styles.scss'


const FormattedText = props => {
  const { nodeContent } = props

  useStyles(styles)

  return (
    <p
      className='formatted-text'
      dangerouslySetInnerHTML={{__html: nodeContent.replace(/`([^`]+)`/g, (fullMatch, innerMatch) => (
        `<span class='inner-code'>${innerMatch}</span>`
      ))}}
    />
  )
}

export default FormattedText
