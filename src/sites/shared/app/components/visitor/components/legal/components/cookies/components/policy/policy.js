import React from 'react'
import Provision from '../../../provision/provision'
import useStyles from 'isomorphic-style-loader/useStyles'

const VisitorCookiesPolicy = ({ appName, langHandler, styles }) => {
  const nodes = require(`../../../../../../../../../../${appName}/app/components/visitor/components/cookies-policy/constants/nodes.js`).default

  useStyles(styles)

  return (
    <div className='legal-document' onClick={e => e.stopPropagation()}>
      <h1 className='page-header'>
        {langHandler({ pl: 'Polityka Cookies', en: 'Cookies Policy' })}
      </h1>
      <div className='cookies-policy'>
        {nodes.map((provision, index) => (
          <Provision
            langHandler={langHandler}
            key={'cookiesPolicy' + index}
            data={{ tier: provision.tier, item: provision.item, pl: provision.pl, en: provision.en }}
          />
        ))}
      </div>
    </div>
  )
}

export default VisitorCookiesPolicy
