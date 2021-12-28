import React from 'react'
import useStyles from 'isomorphic-style-loader/useStyles'
// import LogoHtml from '../../../../../assets/logo/logo.html'
// import styles from '../../../../../assets/logo/styles/styles.css'

// Old Logo
import styles from '../../../../../assets/old-logo/styles/styles.css'
import OldLogoHtml from '../../../../../assets/old-logo/old-logo.html'

const Logo = () => {
  useStyles(styles)

  return <div dangerouslySetInnerHTML={{__html: OldLogoHtml}} />
}

export default Logo
