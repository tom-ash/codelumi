import React from 'react'
import { useStore } from '../../../../../../shared/app/functions/store/useStore'
import { Heading } from '../../../support/components/heading'
import { Line } from '../../../support/components/line/line'
import { UserEditCountryCodeAndPhoneNumber as CountryCodeAndPhoneNumber } from './components/country-code-and-phone-number/country-code-and-phone-number'
import { UserEditDelete as Delete } from './components/delete/delete'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'

const UserEdit = () => {
  useStyles(styles)

  const { state } = useStore()
  const { texts } = state
  const {
    headingOne,
  } = texts

  const headingProps = {
    tier: 1,
    text: headingOne
  }

  return (
    <div id='user-edit'>
      <div className='container'>
        <Heading {...headingProps} />
        <Line />
        <CountryCodeAndPhoneNumber />
        <Line />
        <Delete />
      </div>
    </div>
  )
}

export default UserEdit
