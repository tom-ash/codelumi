import React from 'react'
import Provision from '../provision/provision'
import useStyles from 'isomorphic-style-loader/useStyles'

const VisitorTermsOfService = ({ appName, langHandler, styles }) => {
  const nodes = require(`../../../../../../../../${appName}/app/components/visitor/components/terms-and-conditions/constants/nodes.js`).default

  // const nodes = require(`../../../../../../../../warsawlease-pl`).default

  useStyles(styles)

  return (
    <div className='legal-document'>
      <h1 className='page-header'>
        {langHandler({ pl: 'Regulamin', en: 'Terms & Conditions' })}
      </h1>
      <div className='privacy-policy'>
        {nodes.map((provision, index) => (
          <Provision key={index} data={provision} langHandler={langHandler}/>
        ))}
      </div>
    </div>
  )
}

export default VisitorTermsOfService
