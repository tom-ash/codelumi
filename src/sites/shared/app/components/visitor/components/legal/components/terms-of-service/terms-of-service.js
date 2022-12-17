import React from 'react'
import Provision from '../provision/provision'
import useStyles from 'isomorphic-style-loader-react18/useStyles'

const VisitorTermsOfService = ({ appName, langHandler }) => {
  const nodes =
    require(`../../../../../../../../${appName}/app/components/visitor/components/terms-and-conditions/constants/nodes.js`).default
  const styles = require(`../../../../../../../../${appName}/app/components/visitor/styles/styles.scss`)

  useStyles(styles)

  return (
    <div className='legal-document'>
      <h1 className='page-header'>{langHandler({ pl: 'Regulamin', en: 'Terms & Conditions' })}</h1>
      <div className='privacy-policy'>
        {nodes.map((provision, index) => (
          <Provision key={index} data={provision} langHandler={langHandler} />
        ))}
      </div>
    </div>
  )
}

export default VisitorTermsOfService
