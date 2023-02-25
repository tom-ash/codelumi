import React from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import LogoHtml from '../../../../../assets/logo/logo.html'
import styles from '../../../../../assets/logo/styles/styles.css'

const Logo = () => {
  useStyles(styles)

  return <div dangerouslySetInnerHTML={{ __html: LogoHtml }} />
}

export default Logo
