import React from 'react'
import Provision from '../../../provision/provision'
import useStyles from 'isomorphic-style-loader-react18/useStyles'

const VisitorPrivacyPolicy = ({ appName, langHandler }) => {
  const nodes =
    require(`../../../../../../../../../../${appName}/app/components/visitor/components/privacy-policy/constants/nodes.js`).default
  const styles = require(`../../../../../../../../../../${appName}/app/components/visitor/styles/styles.scss`)

  useStyles(styles)

  return (
    <div
      className='legal-document'
      onClick={e => e.stopPropagation()}
    >
      <h1 className='page-header'>{langHandler({ pl: 'Polityka Prywatności', en: 'Privacy Policy' })}</h1>
      <div className='privacy-policy'>
        {nodes.map((provision, index) => (
          <Provision
            key={index}
            data={provision}
            langHandler={langHandler}
          />
        ))}
      </div>
    </div>
  )
}

export default VisitorPrivacyPolicy
