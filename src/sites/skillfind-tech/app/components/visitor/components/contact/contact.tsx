import React from 'react'
import { useStore } from '../../../../../../shared/app/functions/store/useStore'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'

const VisitorContact = () => {
  useStyles(styles)

  const { state } = useStore()
  const { texts } = state
  const {
    companyName,
    companyStreetAndStreetNumber,
    companyPostalCodeAndCity,
    companyEmail,
  } = texts

  return (
    <div id='contact'>
      <div className='company'><strong>{companyName}</strong></div>
      <div className='address'>
        <div className='street'>{companyStreetAndStreetNumber}</div>
        <div className='postalc-code-and-city'>{companyPostalCodeAndCity}</div>
      </div>
      <div className='email'>Email: {companyEmail}</div>
    </div>
  )
}

export default VisitorContact
