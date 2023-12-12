import React from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { useTexts } from '../../../../../../shared/app/functions/store/use-texts'

const VisitorContact = () => {
  useStyles(styles)

  const { companyName, companyStreetAndStreetNumber, companyPostalCodeAndCity, companyEmail } = useTexts()

  return (
    <div id='contact'>
      <div className='container'>
        <div className='company'>
          <strong>{companyName}</strong>
        </div>
        <div className='address'>
          <div className='street'>{companyStreetAndStreetNumber}</div>
          <div className='postalc-code-and-city'>{companyPostalCodeAndCity}</div>
        </div>
        <div className='email'>Email: {companyEmail}</div>
      </div>
    </div>
  )
}

export default VisitorContact
