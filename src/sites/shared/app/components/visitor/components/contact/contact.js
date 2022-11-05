import React from 'react'
import useStyles from 'isomorphic-style-loader/useStyles'
import {
  CONTACT_COMPANY,
  CONTACT_ADDRESS_STREET,
  CONTACT_ADDRESS_POSTAL_CODE_AND_CITY,
  CONTACT_EMAIL,
} from './constants/texts'

const VisitorContact = props => {
  const { appName, langHandler } = props
  const styles = require(`../../../../../../${appName}/app/components/visitor/styles/styles.scss`)

  useStyles(styles)

  return (
    <div className='legal-document'>
      <div className='company'>{CONTACT_COMPANY}</div>
      <div className='address'>
        <div className='street'>{langHandler(CONTACT_ADDRESS_STREET)}</div>
        <div className='postalc-code-and-city'>{langHandler(CONTACT_ADDRESS_POSTAL_CODE_AND_CITY)}</div>
      </div>
      <div className='email'>Email: {langHandler(CONTACT_EMAIL)}</div>
    </div>
  )
}

export default VisitorContact
